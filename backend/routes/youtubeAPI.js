const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { UserModel, UserCoursesModel, CourseDataModel } = require('../models/db');
const API_KEY = process.env.YOUTUBE_API_KEY;


/**
 * Fetches the thumbnail of the first video in a YouTube playlist
 * @param {string} playlistId - The YouTube playlist ID
 * @returns {Promise<string|null>} - Thumbnail URL or null on error
 */
async function getFirstVideoThumbnail(playlistId) {
  try {
    const res = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
      params: {
        part: 'snippet',
        maxResults: 1,
        playlistId,
        key: API_KEY,
      },
    });

    const items = res.data.items;
    if (!items || items.length === 0) return null;

    const thumbnailUrl = items[0].snippet.thumbnails?.medium?.url ||
                         items[0].snippet.thumbnails?.default?.url;

    return thumbnailUrl || null;
  } catch (err) {
    console.error(`Failed to fetch thumbnail for playlist ${playlistId}:`, err.message);
    return null;
  }
}




// Helper to format total duration
const getTotalDuration = (durations) => {
  let totalSeconds = 0;
  durations.forEach(time => {
    const [min, sec] = time.split(':').map(Number);
    totalSeconds += min * 60 + sec;
  });
  const totalMin = Math.floor(totalSeconds / 60);
  return `${totalMin} min`;
};

// Helper to parse ISO 8601 YouTube duration
const parseDuration = (ISO) => {
  const match = ISO.match(/PT(?:(\d+)M)?(?:(\d+)S)?/);
  const minutes = parseInt(match?.[1] || 0);
  const seconds = parseInt(match?.[2] || 0);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

// Main function to fetch and process YouTube playlist data
const fetchData = async (playlistID) => {
  try {
    // Step 1: Get playlist items (video IDs and metadata)
    const res = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
      params: {
        part: 'snippet',
        maxResults: 10,
        playlistId: playlistID,
        key: API_KEY,
      },
    });

    const items = res.data.items;
    const firstVideo = items[0];
    const videoIds = items.map(item => item.snippet.resourceId.videoId).join(',');

    // Step 2: Get video durations
    const videoRes = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        part: 'contentDetails',
        id: videoIds,
        key: API_KEY,
      },
    });

    const durations = videoRes.data.items.map(item =>
      parseDuration(item.contentDetails.duration)
    );

    // Build course data object
    const courseData = {
      image: firstVideo.snippet.thumbnails.medium.url,
      name: firstVideo.snippet.title,
      creator: firstVideo.snippet.channelTitle,
      duration: 'Approx. ' + getTotalDuration(durations),
      date: '2024-06-01',
      price: '₹499',
      videos: items.map((item, i) => ({
        title: item.snippet.title,
        duration: durations[i],
        videoUrl: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
      })),
    };

    return courseData;
  } catch (err) {
    console.error('Failed to fetch playlist data:', err.message);
    return null;
  }
};

// Route to serve playlist/course data
router.get('/playlist', async (req, res) => {
  const playlistID = req.query.playlistID;
  const data = await fetchData(playlistID);
  if (data) {
    res.json(data);
  } else {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Placeholder route (you can implement this later)
// router.get('/searchcourse', async (req, res) => {
//   res.status(501).json({ error: 'Not implemented' });
// });

router.get('/searchcourse', async (req, res) => {
  try {
    const courses = await CourseDataModel.find();

    const result = await Promise.all(
      courses.map(async (course) => {
        const thumbnail = await getFirstVideoThumbnail(course.link);
        return {
          name: course.name,
          image: thumbnail || 'https://via.placeholder.com/300x200?text=No+Image',
          link: course.link
        };
      })
    );

    res.json(result);
  } catch (err) {
    console.error('Error in /searchcourse:', err.message);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

router.get('/checkcourse', async (req, res) => {
  try {
    const { playlistID, token } = req.query;
    const JWT_SECRET = "thisismyproject";
    const decoded = jwt.verify(token, JWT_SECRET);
    const userId = decoded.id;
    const course = await CourseDataModel.findOne({ link: playlistID });
    if (!course) {
      return res.status(404).json({ flag: false, message: "Course not found" });
    }
    const user = await UserCoursesModel.findById(userId);
    if (!user) {
      return res.status(404).json({ flag: false, message: "User not found" });
    }
    const hasCourse = user.courses.includes(course._id);
    res.json({ flag: hasCourse });

  } catch (error) {
    console.error("Error in checking course:", error);
    res.status(500).json({ error: 'Failed to check course' });
  }
});





module.exports = router;

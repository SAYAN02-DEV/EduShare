const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.YOUTUBE_API_KEY;
const PLAYLIST_ID = 'PLWz5rJ2EKKc9CBxr3BVjPTPoDPLdPIFCE';

const getTotalDuration = (durations) => {
  let totalSeconds = 0;
  durations.forEach(time => {
    const [min, sec] = time.split(':').map(Number);
    totalSeconds += min * 60 + sec;
  });
  const totalMin = Math.floor(totalSeconds / 60);
  return `${totalMin} min`;
};

const parseDuration = (ISO) => {
  const match = ISO.match(/PT(?:(\d+)M)?(?:(\d+)S)?/);
  const minutes = parseInt(match?.[1] || 0);
  const seconds = parseInt(match?.[2] || 0);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

let parsedData = {};
const fetchData = async () => {
    try {
      const res = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
        params: {
          part: 'snippet',
          maxResults: 10,
          playlistId: PLAYLIST_ID,
          key: API_KEY,
        },
      });

      const items = res.data.items;
      const firstVideo = items[0];
      const videoIds = items.map(item => item.snippet.resourceId.videoId).join(',');

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

      parsedData = courseData;
    } catch (err) {
      console.error(err);
    }
  };

  router.get('/playlist', async (req, res) => {
    await fetchData();
    res.json(parsedData);
  });

module.exports = router;
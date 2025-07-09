import React, { useEffect, useState } from 'react';
import {
  Box, Card, CardMedia, Typography, Button,
  List, ListItem, ListItemText, Divider
} from '@mui/material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const CourseProfile = () => {
  const location = useLocation();
  const [course, setCourse] = useState(null);
  const [isPurchased, setIsPurchased] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const importedCourse = location.state?.course;
  const playlistID = importedCourse.link;
  const fetchData = async () => {
    try {
      const res = await axios.get('https://edu-share-project.vercel.app/api/playlist',{params: { playlistID }});
      setCourse(res.data);
    } catch (err) {
      console.error('Failed to fetch course data:', err);
    }
  };

    async function checkCourse(){
    try{
      const token = localStorage.getItem('token');
      const res = await axios.get('https://edu-share-project.vercel.app/api/checkcourse',{params:{token, playlistID}});
      setIsPurchased(res.data.flag);
    }catch(err){
      console.log('failed to check course availability');
    }
  }

  useEffect(() => {
    fetchData();
    checkCourse();
  }, []);

  const handleWatch = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const handleClose = () => {
    setSelectedVideo(null);
  };

  // Loading state or data not ready
  if (!course || !course.videos) {
    return <Typography sx={{ color: '#fff', p: 4 }}>Loading...</Typography>;
  }

  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'flex-start',
          background: 'linear-gradient(180deg, #162138 0%, #1e293b 100%)',
          p: 4,
          gap: 3,
        }}
      >
        {/* Left: Course Card */}
        <Card
          sx={{
            width: 260,
            minHeight: 400,
            borderRadius: 4,
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'linear-gradient(180deg, #232b4a 0%, #23244a 100%)',
            boxShadow: 3,
          }}
        >
          <CardMedia
            component="img"
            image={course.image}
            alt={course.name}
            sx={{
              width: 160,
              height: 160,
              borderRadius: 2,
              background: '#fff',
              mb: 2,
            }}
          />
          <Typography variant="body1" sx={{ mb: 1 }}>
            <b>{course.name}</b>
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <b>Created By:</b> {course.creator}
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <b>Duration:</b> {course.duration}
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <b>Date Published:</b> {course.date}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <b>Price:</b> {course.price}
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 1, width: '100%' }}>
            Buy Course
          </Button>
        </Card>

        {/* Right: Videos List */}
        <Card
          sx={{
            flex: 1,
            minHeight: 400,
            borderRadius: 4,
            p: 3,
            background: 'linear-gradient(180deg, #232b4a 0%, #23244a 100%)',
            boxShadow: 3,
            ml: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, color: '#fff' }}>
            Course Content
          </Typography>
          <Divider sx={{ mb: 2, background: '#334155' }} />
          <List>
            {course.videos.map((video, idx) => (
              <ListItem key={idx} sx={{ px: 0 }}
                secondaryAction={
                  isPurchased ? (
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      onClick={() => handleWatch(video.videoUrl)}
                    >
                      Watch
                    </Button>
                  ) : null
                }
              >
                <ListItemText
                  primary={video.title}
                  secondary={`Duration: ${video.duration}`}
                  primaryTypographyProps={{ style: { color: '#fff', fontWeight: 500 } }}
                  secondaryTypographyProps={{ style: { color: '#cbd5e1' } }}
                />
              </ListItem>
            ))}
          </List>
        </Card>
      </Box>

      {/* Modal Overlay Video Player */}
      {selectedVideo && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.85)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: 2,
            overflowY: 'auto',
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: 900,
              position: 'relative',
              aspectRatio: '16 / 9',
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={selectedVideo.replace("watch?v=", "embed/") + '?autoplay=1'}
              title="Course Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ borderRadius: '10px' }}
            ></iframe>

            <Button
              variant="contained"
              color="error"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: -50,
                right: 0,
                '@media (max-width:600px)': {
                  top: '-40px',
                  right: '10px',
                },
              }}
            >
              Close
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default CourseProfile;
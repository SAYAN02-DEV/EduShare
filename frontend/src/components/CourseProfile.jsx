import React from 'react';
import { Box, Card, CardMedia, Typography, Button, List, ListItem, ListItemText, Divider } from '@mui/material';

const CourseProfile = () => {
  // Placeholder data
  const course = {
    image: 'https://via.placeholder.com/150',
    name: 'Course Name',
    creator: 'Instructor Name',
    duration: '5h 30m',
    date: '2024-06-01',
    price: '$49.99',
    videos: [
      { title: 'Introduction to the Course', duration: '10:00' },
      { title: 'Getting Started', duration: '15:30' },
      { title: 'Core Concepts', duration: '22:10' },
      { title: 'Project Walkthrough', duration: '18:45' },
      { title: 'Summary & Next Steps', duration: '8:20' },
    ],
  };

  return (
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
            <ListItem key={idx} sx={{ px: 0 }}>
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
  );
};

export default CourseProfile; 
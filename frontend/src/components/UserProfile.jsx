import React from 'react';
import { Box, Card, CardMedia, Typography, Button, Avatar, List, ListItem, ListItemAvatar, ListItemText, Divider } from '@mui/material';

const UserProfile = () => {
  // Placeholder user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    purchasedCourses: [
      {
        id: 1,
        name: 'React for Beginners',
        image: 'https://via.placeholder.com/80',
      },
      {
        id: 2,
        name: 'Intro to Data Science',
        image: 'https://via.placeholder.com/80',
      },
      {
        id: 3,
        name: 'Web Development Bootcamp',
        image: 'https://via.placeholder.com/80',
      },
    ],
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #162138 0%, #1e293b 100%)',
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* User Info Card */}
      <Card sx={{ width: 350, p: 3, borderRadius: 4, mb: 4, background: 'linear-gradient(180deg, #232b4a 0%, #23244a 100%)', boxShadow: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar src={user.avatar} alt={user.name} sx={{ width: 80, height: 80, mb: 2 }} />
        <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>{user.name}</Typography>
        <Typography variant="body2" sx={{ color: '#cbd5e1', mb: 1 }}>{user.email}</Typography>
      </Card>

      {/* Purchased Courses */}
      <Card sx={{ width: 500, p: 3, borderRadius: 4, background: 'linear-gradient(180deg, #232b4a 0%, #23244a 100%)', boxShadow: 3 }}>
        <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>Purchased Courses</Typography>
        <Divider sx={{ mb: 2, background: '#334155' }} />
        <List>
          {user.purchasedCourses.map(course => (
            <ListItem key={course.id} sx={{ px: 0, mb: 1 }} secondaryAction={
              <Button variant="contained" color="primary" size="small">
                Go to Course
              </Button>
            }>
              <ListItemAvatar>
                <CardMedia
                  component="img"
                  image={course.image}
                  alt={course.name}
                  sx={{ width: 60, height: 60, borderRadius: 2, background: '#fff' }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={course.name}
                primaryTypographyProps={{ style: { color: '#fff', fontWeight: 500 } }}
              />
            </ListItem>
          ))}
        </List>
      </Card>
    </Box>
  );
};

export default UserProfile; 
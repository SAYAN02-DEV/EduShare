import React, { useEffect, useState } from 'react';
import {
  Box, Card, CardMedia, Typography, Button,
  Avatar, List, ListItem, ListItemAvatar, ListItemText, Divider
} from '@mui/material';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  const fetchData = async () => {
  try {
    const res = await axios.get('https://edu-share-project.vercel.app/user/mycourses', {
      headers: {
        token: localStorage.getItem('token')  // ✅ must match backend expectations
      }
    });
    setUser(res.data);
  } catch (err) {
    console.error('Failed to fetch user data:', err);
  }
};


  useEffect(() => {
    fetchData();
  }, []);

  if (!user) return <Typography sx={{ color: '#fff' }}>Loading...</Typography>;

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
      <Card
        sx={{
          width: 350,
          p: 3,
          borderRadius: 4,
          mb: 4,
          background: 'linear-gradient(180deg, #232b4a 0%, #23244a 100%)',
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar src={user.avatar || ''} alt={user.name} sx={{ width: 80, height: 80, mb: 2 }} />
        <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>{user.name}</Typography>
        <Typography variant="body2" sx={{ color: '#cbd5e1', mb: 1 }}>{user.email}</Typography>
      </Card>

      {/* Purchased Courses */}
      <Card
        sx={{
          width: 500,
          p: 3,
          borderRadius: 4,
          background: 'linear-gradient(180deg, #232b4a 0%, #23244a 100%)',
          boxShadow: 3
        }}
      >
        <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>Purchased Courses</Typography>
        <Divider sx={{ mb: 2, background: '#334155' }} />
        <List>
          {user.purchasedCourses.length === 0 ? (
            <Typography sx={{ color: '#94a3b8', textAlign: 'center' }}>No courses purchased yet.</Typography>
          ) : (
            user.purchasedCourses.map((course, index) => (
              <ListItem key={index} sx={{ px: 0, mb: 1 }} secondaryAction={
                <Button variant="contained" color="primary" size="small">
                  Go to Course
                </Button>
              }>
                <ListItemAvatar>
                  <CardMedia
                    component="img"
                    image={course.image || 'https://via.placeholder.com/60'}
                    alt={course.name}
                    sx={{ width: 60, height: 60, borderRadius: 2, background: '#fff' }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={course.name}
                  primaryTypographyProps={{ style: { color: '#fff', fontWeight: 500 } }}
                />
              </ListItem>
            ))
          )}
        </List>
      </Card>
    </Box>
  );
};

export default UserProfile;

import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, TextField, Box } from '@mui/material';

const sampleCourses = [
  { id: 1, image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg', title: 'Course 1' },
  { id: 2, image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg', title: 'Course 2' },
  { id: 3, image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg', title: 'Course 3' },
  { id: 4, image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg', title: 'Course 4' },
  { id: 5, image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg', title: 'Course 5' },
  { id: 6, image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg', title: 'Course 6' },
];

function SearchCourses() {
  const [query, setQuery] = useState('');

  const filteredCourses = sampleCourses.filter(course =>
    course.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Box minHeight="80vh" bgcolor="#162138" py={6}>
      <Box maxWidth={600} mx="auto" mb={5}>
        <TextField
          fullWidth
          variant="outlined"
          label="Search courses..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          sx={{ background: '#fff', borderRadius: 2 }}
        />
      </Box>
      <Grid container spacing={4} justifyContent="center" maxWidth={1200} mx="auto">
        {filteredCourses.map(course => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
            <Card sx={{ borderRadius: 3, boxShadow: 4, height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.03)' } }}>
              <CardMedia
                component="img"
                height="160"
                image={course.image}
                alt={course.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" align="center" fontWeight={600} color="text.primary">
                  {course.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SearchCourses;

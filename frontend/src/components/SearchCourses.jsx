import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardMedia, CardContent, Typography, TextField, Box, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function SearchCourses() {
  const [query, setQuery] = useState('');
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('https://edu-share-project.vercel.app/api/searchcourse'); // replace with your actual backend URL
        setCourses(res.data);
      } catch (err) {
        console.error('Failed to fetch courses:', err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(query.toLowerCase())
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

      {loading ? (
        <Box display="flex" justifyContent="center" mt={8}>
          <CircularProgress color="primary" />
        </Box>
      ) : (
        <Grid container spacing={4} justifyContent="center" maxWidth={1200} mx="auto">
          {filteredCourses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'scale(1.03)' },
                }} onClick = {() => {navigate('/courseprofile', { state: { course } })}}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={course.image}
                  alt={course.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" align="center" fontWeight={600} color="text.primary">
                    {course.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default SearchCourses;

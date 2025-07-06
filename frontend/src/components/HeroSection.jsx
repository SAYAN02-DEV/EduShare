import { Box, Typography, Button, Grid, Card, CardMedia, Stack } from '@mui/material';
import DSCourse from '../assets/DSCourse.png';
import MLCourse from '../assets/MLCourse.png';
import WEB3Course from '../assets/WEB3Course.png';
import WebDevCourse from '../assets/webDevCourse.png';
import { Link as RouterLink } from 'react-router-dom';

const courseImages = [
  { src: DSCourse, alt: 'DS Course' },
  { src: MLCourse, alt: 'ML Course' },
  { src: WEB3Course, alt: 'WEB3 Course' },
  { src: WebDevCourse, alt: 'Web Dev Course' },
];

function HeroSection() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 4, md: 8 },
        background: 'linear-gradient(180deg, #162138 60%, #1e293b 100%)',
        m: 0,
        pb: 0,
      }}
    >
      <Typography
        variant="h3"
        align="center"
        fontWeight={700}
        sx={{
          mb: 1,
          background: 'linear-gradient(90deg, #417dea, #254784)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block',
        }}
      >
        Edushare, <span style={{ background: 'linear-gradient(90deg, #b7b9bd, #545557 97.6%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>because</span>
      </Typography>
      <Typography
        variant="h4"
        align="center"
        fontWeight={600}
        sx={{
          mb: 3,
          background: 'linear-gradient(90deg, #b7b9bd, #545557 82.69%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block',
        }}
      >
        knowledge is meant to be shared!
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={4}>
        <Button
          component={RouterLink}
          to="/searchcourses"
          variant="contained"
          color="warning"
          size="large"
          sx={{ fontWeight: 600, borderRadius: 2, px: 4 }}
        >
          Explore Courses
        </Button>
        <Button
          variant="contained"
          color="inherit"
          size="large"
          sx={{ fontWeight: 600, borderRadius: 2, px: 4, background: 'linear-gradient(92.36deg, #d9d9d9, #737373)', color: '#222' }}
        >
          Create Courses
        </Button>
      </Stack>
      <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: 1200, mt: 2, mb: 0 }}>
        {courseImages.map((img, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card sx={{ borderRadius: 5, boxShadow: 3, overflow: 'hidden', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.04)' } }}>
              <CardMedia
                component="img"
                height="200"
                image={img.src}
                alt={img.alt}
                sx={{ objectFit: 'cover' }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HeroSection;

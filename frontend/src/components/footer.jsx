import { Box, Typography, IconButton, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        bgcolor: '#181819',
        color: '#fff',
        py: 4,
        mt: 6,
        boxShadow: '0px 3px 4px 5px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        px: { xs: 2, md: 10 },
      }}
    >
      <Stack direction="row" spacing={2} mb={{ xs: 2, md: 0 }}>
        <IconButton color="inherit" href="https://linkedin.com" target="_blank">
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton color="inherit" href="https://github.com" target="_blank">
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton color="inherit" href="https://instagram.com" target="_blank">
          <InstagramIcon fontSize="large" />
        </IconButton>
        <IconButton color="inherit" href="https://facebook.com" target="_blank">
          <FacebookIcon fontSize="large" />
        </IconButton>
      </Stack>
      <Typography variant="body1" align="center">
        Made with love by Sayan
      </Typography>
    </Box>
  );
}

export default Footer;
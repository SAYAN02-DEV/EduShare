import React from 'react';
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';

function Login() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" minHeight="80vh" bgcolor="#162138">
      <Card sx={{ minWidth: 350, borderRadius: 4, boxShadow: 6, background: 'linear-gradient(180deg, #181d2a, #1d273d 54.33%)', color: '#fff' }}>
        <CardContent>
          <Typography variant="h5" align="center" fontWeight={700} mb={2}>
            Login
          </Typography>
          <Box component="form" display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Username"
              variant="filled"
              fullWidth
              InputProps={{ style: { background: 'rgba(255,255,255,0.79)', borderRadius: 12 } }}
            />
            <TextField
              label="Password"
              type="password"
              variant="filled"
              fullWidth
              InputProps={{ style: { background: 'rgba(255,255,255,0.79)', borderRadius: 12 } }}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 1, borderRadius: 2, fontWeight: 600 }}
              fullWidth
            >
              Login
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;

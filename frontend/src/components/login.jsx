import React, { useRef } from 'react';
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';
import axios from 'axios'
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleLogin() {
    const email = usernameRef.current.value;
    const password = passwordRef.current.value;
    console.log('Sending to backend:', { email, password });
    // Send login request via fetch or 
    axios.post('https://edu-share-project.vercel.app/user/signin',{
      email,
      password,
    }).then(
      response => {
        const token = response.data.token;
        console.log('login Successful. Token', token);
        login(token);
        navigate('/');
      }
    )
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <Box display="flex" alignItems="center" justifyContent="center" minHeight="80vh" bgcolor="#162138">
      <Card
        sx={{
          minWidth: 300,
          borderRadius: 4,
          boxShadow: 6,
          background: 'linear-gradient(180deg, #181d2a, #1d273d 54.33%)',
          color: '#fff',
          
        }}
      >
        <CardContent>
          <Typography variant="h5" align="center" fontWeight={700} mb={2}>
            Login
          </Typography>
          <Box display="flex" flexDirection="column" gap={2} alignItems="center" >
            <TextField
              label="Username"
              variant="filled"
              fullWidth
              inputRef={usernameRef}
              InputProps={{ style: { background: 'rgba(255,255,255,0.79)', borderRadius: 20,height: 50 } }}
            />
            <TextField
              label="Password"
              type="password"
              variant="filled"
              fullWidth
              inputRef={passwordRef}
              InputProps={{ style: { background: 'rgba(255,255,255,0.79)', borderRadius: 20, height: 50 } }}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 1, borderRadius: 2, fontWeight: 600, maxWidth:100 }}
              fullWidth
              onClick={handleLogin}
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

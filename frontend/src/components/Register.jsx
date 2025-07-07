import React from 'react';
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';
import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Register() {
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  function handleRegister() {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    if(password !== confirmPassword){
      alert("Passwords do not match");
      return;
    }
    const userData = {name, email, password};
    console.log(userData);
    // Send login request via fetch or axios
    axios.post('http://localhost:3000/user/signup',{
      name,
      email,
      password,
    }).then(
      response => {
        console.log('Sucessfully signed up!');
        alert('sucessfully signed up! login to continue!');
        navigate('/login');
      }
    ).catch(error => {
      console.log(error);
    })

  }
  return (
    <Box display="flex" alignItems="center" justifyContent="center" minHeight="80vh" bgcolor="#162138">
      <Card sx={{ minWidth: 350, borderRadius: 4, boxShadow: 6, background: 'linear-gradient(180deg, #181d2a, #1d273d 54.33%)', color: '#fff' }}>
        <CardContent>
          <Typography variant="h5" align="center" fontWeight={700} mb={2}>
            Register
          </Typography>
          <Box  display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Name"
              variant="filled"
              fullWidth
              inputRef = {nameRef}
              InputProps={{ style: { background: 'rgba(255,255,255,0.79)', borderRadius: 12 } }}
            />
            <TextField
              label="Email"
              type="email"
              variant="filled"
              fullWidth
              inputRef = {emailRef}
              InputProps={{ style: { background: 'rgba(255,255,255,0.79)', borderRadius: 12 } }}
            />
            <TextField
              label="Password"
              type="password"
              variant="filled"
              fullWidth
              inputRef = {passwordRef}
              InputProps={{ style: { background: 'rgba(255,255,255,0.79)', borderRadius: 12 } }}
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="filled"
              fullWidth
              inputRef = {confirmPasswordRef}
              InputProps={{ style: { background: 'rgba(255,255,255,0.79)', borderRadius: 12 } }}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 1, borderRadius: 2, fontWeight: 600 }}
              fullWidth
              onClick={handleRegister}
            >
              Register
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Register;

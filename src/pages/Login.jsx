import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username) {
      localStorage.setItem('user', username);
      navigate('/dashboard');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <TextField fullWidth label="Username" onChange={e => setUsername(e.target.value)} />
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleLogin}>Login</Button>
    </Container>
  );
};

export default Login;

# Advanced React + Material UI Tutorial
**Author**: Dr. Basel Magableh  
**Date**: April 2025

---

## Overview

This tutorial demonstrates how to build an advanced React application using Material UI components. It includes:

- Login and logout functionality  
- A top navigation bar and a sidebar drawer  
- Avatar with tooltip for user info  
- Breadcrumbs for navigation context  
- Cards for user interface structure  
- Data Grid for displaying dynamic data  

---

## Project Setup

```bash
npm create vite@latest advanced_todo --template react
cd advanced_todo
npm install
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled @mui/x-data-grid react-router-dom
```

---

## Folder Structure

```text
src/
|- components/
|  |- Navbar.js
|  |- Sidebar.js
|  |- BreadcrumbsNav.js
|- pages/
|  |- Login.js
|  |- Dashboard.js
|- App.js
|- index.js
```

---

## Login Page (`pages/Login.js`)

```javascript
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
```

---

## Navbar (`components/Navbar.js`)

```javascript
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ onMenuClick }) => {
  const username = localStorage.getItem('user') || 'User';
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Dashboard</Typography>
        <Tooltip title={username}>
          <Avatar>{username.charAt(0).toUpperCase()}</Avatar>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
```

---

## Sidebar Drawer (`components/Sidebar.js`)

```javascript
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List sx={{ width: 250 }}>
        <ListItem button onClick={onClose}>
          <ListItemText primary="Close" />
        </ListItem>
        <ListItem button onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
```

---

## Breadcrumbs (`components/BreadcrumbsNav.js`)

```javascript
import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';

const BreadcrumbsNav = () => (
  <Breadcrumbs sx={{ my: 2 }}>
    <Link underline="hover" color="inherit" href="#">Home</Link>
    <Typography color="text.primary">Tasks</Typography>
  </Breadcrumbs>
);

export default BreadcrumbsNav;
```

---

## Dashboard Page (`pages/Dashboard.js`)

```javascript
import React, { useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import BreadcrumbsNav from '../components/BreadcrumbsNav';

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const rows = [
    { id: 1, task: 'Finish report', status: 'Done' },
    { id: 2, task: 'Update website', status: 'Pending' },
  ];
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'task', headerName: 'Task', width: 200 },
    { field: 'status', headerName: 'Status', width: 150 },
  ];

  return (
    <>
      <Navbar onMenuClick={() => setOpen(true)} />
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <Box sx={{ p: 2 }}>
        <BreadcrumbsNav />
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5">Welcome Back!</Typography>
            <Typography variant="body1">Here are your tasks:</Typography>
          </CardContent>
        </Card>
        <DataGrid autoHeight rows={rows} columns={columns} pageSize={5} />
      </Box>
    </>
  );
};

export default Dashboard;
```

---

## Routing Setup (`App.js`)

```javascript
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => {
  const isLoggedIn = !!localStorage.getItem('user');

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
```

---

## Conclusion

This advanced React + MUI app demonstrates:

- Basic authentication
- Responsive navigation components (Navbar + Drawer)
- Layout structure using Cards
- Displaying dynamic data with DataGrid

It serves as a strong base for building production-quality applications.

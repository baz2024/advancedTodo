import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => {
  const isLoggedIn = !!localStorage.getItem('user');

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />} />
      <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default App;
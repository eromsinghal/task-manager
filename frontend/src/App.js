// src/App.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import TaskList from './components/TaskList/TaskList';
import TaskCreate from './components/TaskCreate/TaskCreate';
import TaskEdit from './components/TaskEdit/TaskEdit';
import HomeRedirect from './components/HomeRedirect/HomeRedirect';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';

function App() {
  const storedUserInfo = localStorage.getItem('userInfo');
  const user = storedUserInfo ? JSON.parse(storedUserInfo) : null;

  const config = user
    ? {
        headers: {
          'Content-Type': 'application/json',
          Authorization: user.token ? `Bearer ${user.token}` : '',
        },
      }
    : {};

  return (
    <div className="App">
      {user && <Header />}
      <Routes>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path="/tasks" element={user ? <TaskList /> : <Navigate to="/login" />} />
        <Route path="/create" element={user ? <TaskCreate config={config} /> : <Navigate to="/login" />} />
        <Route path="/edit/:id" element={user ? <TaskEdit config={config} /> : <Navigate to="/login" />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/" element={user ? <HomeRedirect /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;

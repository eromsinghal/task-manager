import React, { useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';

const HomeRedirect = () => {
  const storedUserInfo = localStorage.getItem('userInfo');
  const userInfo = storedUserInfo ? JSON.parse(storedUserInfo) : null;

  useEffect(() => {
    if (userInfo) {
      const token = userInfo.token;
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token ? `Bearer ${token}` : ''
        },
      };
      axios
        .get(`${API_URL}/api/tasks`, config)
        .then(response => {
          // Redirect based on whether tasks exist
          if (response.data.length > 0) {
            window.location.href = '/tasks';
          } else {
            window.location.href = '/create';
          }
        })
        .catch(error => {
          console.error(error);
          window.location.href = '/tasks'; // fallback
        });
    } else {
      window.location.href = '/login';
    }
  }, [userInfo]);

  return <div>Loading...</div>;
};

export default HomeRedirect;

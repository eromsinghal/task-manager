import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
  const storedUserInfo = localStorage.getItem('userInfo');
  const userInfo = storedUserInfo ? JSON.parse(storedUserInfo) : null;

  if (!userInfo) {
    window.location.href = '/login';
    return null;
  }

  return (
    <div className={styles.container}>
      <h2>User Profile</h2>
      <div className={styles.profileInfo}>
        <p>
          <strong>Name:</strong> {userInfo.name}
        </p>
        <p>
          <strong>Email:</strong> {userInfo.email}
        </p>
      </div>
      <button
        onClick={() => {
          window.location.href = '/tasks';
        }}
        className={styles.backButton}
      >
        Back to Tasks
      </button>
    </div>
  );
};

export default Profile;

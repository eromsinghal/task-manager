import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  const handleProfile = () => {
    window.location.href = '/profile';
  };

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    window.location.href = '/login';
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <svg
          className={styles.logoIcon}
          width="40"
          height="40"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0" y1="0" x2="64" y2="64">
              <stop offset="0%" stopColor="#4facfe" />
              <stop offset="100%" stopColor="#00f2fe" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="32" r="30" fill="url(#logoGradient)" />
          <polyline
            points="20,34 28,42 44,26"
            fill="none"
            stroke="#fff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className={styles.logoText}>TaskFlow</span>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.profileButton} onClick={handleProfile}>
          Profile
        </button>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;

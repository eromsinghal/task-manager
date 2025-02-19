import React from 'react';
import TaskForm from '../TaskForm/TaskForm';
import styles from './TaskCreate.module.css';

const TaskCreate = ({ config }) => {
  const handleSuccess = () => {
    window.location.href = '/tasks';
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Create a New Task</h2>
        <button
          onClick={() => { window.location.href = '/profile'; }}
          className={styles.profileButton}
        >
          Profile
        </button>
      </div>
      <TaskForm 
        fetchTasks={handleSuccess} 
        editingTask={null} 
        setEditingTask={() => {}} 
        config={config} 
      />
      <button
        onClick={() => { window.location.href = '/tasks'; }}
        className={styles.backButton}
      >
        Back to Task List
      </button>
    </div>
  );
};

export default TaskCreate;

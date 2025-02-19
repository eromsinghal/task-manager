import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import styles from './TaskList.module.css';
import { API_URL } from '../../config';


function TaskList() {
  const [tasks, setTasks] = useState([]);

  // Use useMemo to ensure userInfo is computed only once.
  const userInfo = useMemo(() => {
    const stored = localStorage.getItem('userInfo');
    return stored ? JSON.parse(stored) : null;
  }, []);

  // If userInfo is not found, redirect to login.
  useEffect(() => {
    if (!userInfo) {
      window.location.href = '/login';
    }
  }, [userInfo]);

  const token = userInfo ? userInfo.token : '';
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
  };

  // Function to fetch tasks.
  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/tasks`, config);
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Run fetchTasks only once after component mounts.
  useEffect(() => {
    if (userInfo) {
      fetchTasks();
    }
  }, [userInfo]);

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/tasks/${id}`, config);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Task List</h2>
        <div>
          <button
            onClick={() => { window.location.href = '/create'; }}
            className={styles.createButton}
          >
            Create Task
          </button>
        </div>
      </div>
      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <li key={task._id} className={styles.taskItem}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>
              <strong>Status:</strong> {task.status}
            </p>
            <div className={styles.taskActions}>
              <button
                onClick={() => { window.location.href = `/edit/${task._id}`; }}
                className={styles.editButton}
              >
                Edit
              </button>
              <button onClick={() => deleteTask(task._id)} className={styles.deleteButton}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TaskForm from '../TaskForm/TaskForm';
import styles from './TaskEdit.module.css';
import { API_URL } from '../../config';


const TaskEdit = ({ config }) => {
  const { id } = useParams();
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/tasks/${id}`, config)
      .then((response) => {
        setEditingTask(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id, config]);

  const handleSuccess = () => {
    window.location.href = '/tasks';
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Edit Task</h2>
        <button
          onClick={() => {
            window.location.href = '/profile';
          }}
          className={styles.profileButton}
        >
          Profile
        </button>
      </div>
      {editingTask ? (
        <TaskForm
          fetchTasks={handleSuccess}
          editingTask={editingTask}
          setEditingTask={() => {}}
          config={config}
        />
      ) : (
        <div>Loading task details...</div>
      )}
      <button
        onClick={() => {
          window.location.href = '/tasks';
        }}
        className={styles.backButton}
      >
        Back to Task List
      </button>
    </div>
  );
};

export default TaskEdit;

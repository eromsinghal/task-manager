import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './TaskForm.module.css';
import { API_URL } from '../../config';


function TaskForm({ fetchTasks, editingTask, setEditingTask, config }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setStatus(editingTask.status);
    } else {
      setTitle('');
      setDescription('');
      setStatus('pending');
    }
  }, [editingTask]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (editingTask) {
        await axios.put(`${API_URL}/api/tasks/${editingTask._id}`, { title, description, status }, config);
        setEditingTask(null);
      } else {
        await axios.post(`${API_URL}/api/tasks`, { title, description, status }, config);
      }
      setTitle('');
      setDescription('');
      setStatus('pending');
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.formContainer}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Title:</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
          required 
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Description:</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
          className={styles.textarea}
        ></textarea>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className={styles.select}>
          <option value="pending">Pending</option>
          <option value="in-progress">In-Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.button}>
          {editingTask ? 'Update Task' : 'Add Task'}
        </button>
        {editingTask && (
          <button type="button" onClick={() => setEditingTask(null)} className={`${styles.button} ${styles.cancelButton}`}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default TaskForm;

# TaskFlow Task Manager Web Application

TaskFlow is a full-stack task management web application built with the **MERN stack** (MongoDB, Express, React, Node.js). It allows users to register, log in, and manage their tasks with full **CRUD functionality** (Create, Read, Update, Delete). The app features **JWT-based authentication**, a **modern and responsive UI**, and centralized API configuration for seamless deployment across different environments.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Live Demo](#live-demo)
- [Setup and Installation](#setup-and-installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Main Workflows](#main-workflows)
- [Deployment](#deployment)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

✅ **User Authentication** - Secure login and registration using **JWT authentication**  
✅ **Task Management** - Users can **create, view, update, and delete** tasks  
✅ **Modern UI** - Responsive design with **CSS Modules** and a **sticky header**  
✅ **Navigation Bar** - A **sticky header** featuring the **TaskFlow** logo and navigation buttons  
✅ **Centralized API Configuration** - Easily switch between **local and production environments**  
✅ **Secure API** - Uses **bcrypt** for password hashing and **JWT for authentication**  
✅ **Error Handling** - Proper validation and meaningful error messages  

## Technologies

### 🌐 **Frontend**
- React.js (Hooks, Context API)
- React Router DOM
- CSS Modules for modular styling
- Axios for API requests

### ⚙ **Backend**
- Node.js and Express.js
- MongoDB + Mongoose (Database)
- JWT Authentication for secure login
- bcrypt for password hashing

### 🛠 **Other Tools**
- Jest + Supertest for Backend Testing
- Git, npm, dotenv for environment management

## Live Demo

🚀 **Check out the live application:**  
🔗 [https://taskflow.example.com](https://taskflow.example.com)  
*(Replace with your actual live URL.)*

## Setup and Installation

### Backend Setup

1️⃣ **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/taskflow.git
   ```
   # Frontend Setup
   ```bash
      cd taskflow/backend
      npm install
   ```
   # Set up environment variables
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   
   # Run the backend server
   npm run dev

   # Frontend Setup
   cd ../frontend
   npm install
   # Set up environment variables
   REACT_APP_API_URL=http://localhost:5000
   #  Run the frontend
   npm start

   --- 

   ## Main Workflows

### 🔐 User Authentication
- **User Registration** - Users sign up securely using email and password.
- **Login** - Users receive a **JWT token** upon successful login.
- **Logout** - Token is removed from local storage.

### 📋 Task Management
- **Create Task** - Users can add new tasks.
- **Task List View** - Users can view their existing tasks in a **responsive layout**.
- **Edit Task** - Users can modify task details (title, description, status).
- **Delete Task** - Tasks can be removed with a single click.

### 🏗 Navigation & UI
- **Sticky Header** - Contains:
  - **TaskFlow Logo**
  - **"Create Task" Button**
  - **"Profile" Button**
  - **"Logout" Button**
- **Consistent API Configuration** - Uses `config.js` for dynamic API endpoint switching.

---

## Deployment

### ✅ Backend Deployment
The backend is deployed on a cloud platform (e.g., **Heroku, Render, AWS**) at:  
🔗 [https://your-backend-url.com](https://your-backend-url.com)

### ✅ Frontend Deployment
The frontend is hosted on a cloud platform (e.g., **Netlify, Vercel, AWS Amplify**) at:  
🔗 [https://your-frontend-url.com](https://your-frontend-url.com)


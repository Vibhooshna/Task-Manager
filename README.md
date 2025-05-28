# 📝 Task Manager

A simple yet powerful **To-Do Task Manager** app built using the **MEAN Stack (MongoDB, Express.js, Angular, Node.js)**. It allows users to perform CRUD operations (Create, Read, Update, Delete) to efficiently manage their tasks.

## 🚀 Features

- User registration and login (with Clerk authentication)
- Create, read, update, and delete tasks
- Responsive and intuitive UI with Angular
- RESTful API built with Node.js and Express.js
- MongoDB for persistent data storage
- Google/Facebook/GitHub social login support
- Deployed on [Your Deployment Platform] (e.g., Vercel, Render, or Railway)

## 📁 Folder Structure

TaskManager/
│
├── backend/                         # Node.js + Express API
│   ├── config/                      # Database and Passport config
│   │   ├── db.js
│   │   └── passport.js
│   ├── controllers/                 # Route controller logic
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── functions/                   # Utility/helper functions
│   ├── middlewares/                # Auth and error handling
│   │   └── authMiddleware.js
│   ├── models/                      # Mongoose models
│   │   ├── Task.js
│   │   └── User.js
│   ├── routes/                      # API route definitions
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── .env                         # Environment variables (DO NOT COMMIT)
│   ├── server.js                    # Entry point of the backend app
│   ├── package.json
│   └── .gitignore
│
├── frontend/                        # React client app
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/              # React components
│   │   │   ├── Auth.jsx
│   │   │   ├── OAuthSuccess.js
│   │   │   ├── SocialLogin.js
│   │   │   ├── TaskDashboard.jsx
│   │   │   ├── TaskEditForm.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskItem.jsx
│   │   ├── services/                # API call logic
│   │   │   ├── authService.js
│   │   │   └── taskService.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── App.test.js
│   │   ├── index.js
│   │   ├── index.css
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
│   ├── tailwind.config.js
│   ├── .env                         # Frontend env variables (DO NOT COMMIT)
│   ├── package.json
│   ├── .gitignore
│   └── README.md
│
├── architecture-diagram.png        # Architecture image (to be added)
├── README.md                       # Project description and setup guide
├── .gitignore                      # Root-level Git ignore rules
└── LICENSE                         # (Optional) License file


## 🛠️ Tech Stack

- **Frontend:** Angular 15+, Tailwind CSS, TypeScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (hosted on MongoDB Atlas)
- **Auth:** Clerk (supports social login)
- **Deployment:** Render (Backend) & Vercel (Frontend)

🚀 Live Demo
You can try out the live app here:
👉 https://task-manager-dun-five-99.vercel.app/

📢 Note
This project is a part of a hackathon run by
https://www.katomaran.com


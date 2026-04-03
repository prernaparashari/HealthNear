# 🏥 HealthNear

HealthNear is a full-stack healthcare web application that allows users to register and log in securely. It is built using Node.js, Express, and MongoDB for the backend, and a simple frontend deployed using GitHub Pages.

This project demonstrates core backend development concepts like REST APIs, authentication, and database integration.

---

## 🚀 Live Demo

🌐 Frontend: https://your-username.github.io/HealthNear/


---

## ✨ Features

* 👤 User Registration
* 🔐 Secure Login System
* 🔒 Password Hashing (bcrypt)
* 🌐 REST API using Express.js
* 🗄️ MongoDB Atlas Integration
* 🔗 Frontend connected to live backend

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* bcrypt
* HTML, CSS, JavaScript

---

## 📂 Project Structure

HealthNear/
│
├── server.js
├── package.json
├── models/
│   └── user.js
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css

---

## ⚙️ Installation (Local Setup)

1. Clone the repository

git clone https://github.com/your-username/HealthNear.git

2. Install dependencies

npm install

3. Create `.env` file

MONGO_URI=your_mongodb_connection_string

4. Run server

node server.js

---

## 📡 API Endpoints

### 🔹 Register User

POST /register

Request Body:
{
"name": "Prerna",
"email": "[prerna@gmail.com](mailto:prerna@gmail.com)",
"password": "123456"
}

---

### 🔹 Login User

POST /login

Request Body:
{
"email": "[prerna@gmail.com](mailto:prerna@gmail.com)",
"password": "123456"
}

---

## 🎯 Future Improvements

* 🗺️ Add map integration (nearby hospitals)
* 🧑‍⚕️ Doctor listing system
* 🔐 JWT Authentication
* 🌐 Full UI improvements

---

## 👩‍💻 Author

Prerna

---

## ⭐ Note

This project is built for learning full-stack development and demonstrates how frontend, backend, and database work together in a real-world application.


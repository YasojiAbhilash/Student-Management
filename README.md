# Student Management System

A simple **CRUD application** to manage student records using **Node.js, Express.js, and MongoDB (Mongoose)**.  
It supports adding, updating, deleting, and fetching student data with a clean folder structure and proper MongoDB integration.

---

## Features
- **Add Student** – Add a new student record  
- **Fetch Students** – Get all student records  
- **Fetch Single Student** – Get student details by ID  
- **Update Student** – Update student information by ID  
- **Delete Student** – Remove student record by ID  

---

## Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Environment Variables:** dotenv  

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/student-management.git

cd student-management

npm install

PORT=5000

MONGO_URI=mongodb://localhost:27017/studentDB

npm start

API Endpoints
1. Add New Student
POST /api/students
Request Body (JSON):
{
  "name": "John Doe",
  "age": 20,
  "year": 2,
  "branch": "CSE",
  "enrollmentNumber": "ENR2023001"
}

2. Get All Students
GET /api/students

3. Get Student by ID
GET /api/students/:id

4. Update Student
PUT /api/students/:id
Request Body (JSON):
{
  "age": 21
}

5. Delete Student
DELETE /api/students/:id

Environment Variables
PORT → Port on which the server runs (default: 5000)

MONGO_URI → MongoDB connection string

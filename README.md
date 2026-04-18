# ✨ NodeJS-Project - Personal Finance & Expense Tracker
## This is a Node.js application that controlls the transaction phases of the user and track his personal payments "income or expense".
## Built with Express, MongoDB, and follows MVC architecture.

## ✨ Features
- User Authentication (Login/Register)
- Transaction (expense, income)
- CRUD Operations for user and transactions
- RESTful APIs
- Swagger UI Documentation

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt

## 📂 Project Structure

src/
│── controllers/
│── models/
│── routes/
│── middleware/
│── config/
│── utils/


## 📡 API Endpoints (Swagger UI)

### 👨🏻‍💻 Admin Endpoints

* **Admin (Get All Users)**
  GET /api/v1/admin/users <img src="https://github.com/user-attachments/assets/78eb5938-7c8c-444e-abe4-0008060c39d8" width="100%" />

* **Admin (Get Stats)**
  GET /api/v1/admin/stats <img src="https://github.com/user-attachments/assets/fe5458c0-3377-4189-8ce2-fc01e394fd5c" width="100%" />

* **Admin (Delete User)**
  DELETE /api/v1/admin/users/:id <img src="https://github.com/user-attachments/assets/cd1c532c-5f2d-41a3-a2c8-8f06062d2eec" width="100%" />

### 🔏 Authorization Endpoints

* **Auth (Register)**
  POST /api/v1/auth/register <img width="1772" height="763" alt="image" src="https://github.com/user-attachments/assets/b8c81374-f31b-4a50-a742-df1cd45b5bcf" />

* **Auth (Login)**
  POST /api/v1/auth/login <img width="1780" height="738" alt="image" src="https://github.com/user-attachments/assets/c9dc23d6-1b73-407a-94f2-fa687485b286" />

* **Auth (Get Profile)**
  DELETE /api/v1/auth/profile <img width="1774" height="485" alt="image" src="https://github.com/user-attachments/assets/a6fdfd56-b20c-42ea-b95d-78137695ca46" />

### 💸 Transaction Endpoints

* **Transaction (Add Transaction)**
  POST /api/v1/transactions <img width="1780" height="719" alt="image" src="https://github.com/user-attachments/assets/791e6449-1b38-44a3-9de8-895dc17c923f" />

* **Transaction (Get All User Transactions)**
  GET /api/v1/transactions <img width="1322" height="791" alt="image" src="https://github.com/user-attachments/assets/c8057517-c962-427f-9b78-dbb0760b7f8d" />

* **Transaction (Get Transactions by Date)**
  GET /api/v1/transactions/date/:date <img width="1778" height="566" alt="image" src="https://github.com/user-attachments/assets/c879f96c-c1ec-4e38-9f2f-6db6bb093097" />

* **Transaction (Update Existing Transaction)**
  PATCH /api/v1/transactions/:id <img width="1600" height="719" alt="image" src="https://github.com/user-attachments/assets/d786e58b-5f79-4cf4-9314-7bc2786b05a8" />

* **Transaction (Delete a Transaction)**
  DELTE /api/v1/transactions/:id <img width="1594" height="505" alt="image" src="https://github.com/user-attachments/assets/a55ea7b0-bfd7-4222-945b-f28bfa02aa0b" />

## Team Members and Contributers
### 🙋🏻 1. Salah Amer Mohammed 
- Create Models for user and transaction
- handle input for correct data or schema
- Unit testing both models
### 🙋🏻‍♀️ 2. Mariam Essam Edward
- Full CRUD Operations for user
- Differintiate between user functionalities and admin functionalities 
- Use Tokens for checking if he is authorized or not
- Unit Testing for all CRUD operations
### 🙋🏻 3. Omar Abdullah Diab 
- Create JWT and authentication for user
- Create hashing for password of user 
- Differentiate the type of user (user, admin)
- Unit testing for authentication and authorization phase
### 🙋🏻 4. Filopateer Fouad bekheet 
- Full CRUD operations for transactions
- Apply pagination and filteration
- Apply Swagger Documentation
- Unit Testing for CRUD operations for all transaction 
### 🙋🏻 5. Islam Adel Ahmed 
- Atlas creation and make the DB online and available for all and initialize the environment and github
- Apply Error handling for all project and implement the dbConfig 
- Apply limitation and sorting
- Testing all the project functionality 
- Make readme file for github documentation for the project

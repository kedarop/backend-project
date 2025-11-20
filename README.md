# Node.js Express CRUD API (Customer & Employee)

This is a simple beginner‑friendly **Node.js + Express.js + MongoDB** project that contains two tables:

* **Customer**
* **Employee**

For both tables, full **CRUD operations** are implemented:

* **GET** – Fetch all data or a single record
* **POST** – Add a new record
* **PUT** – Update an existing record
* **DELETE** – Remove a record

## 🚀 Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose (for schema + database operations)

## 📁 Project Structure

```
backend-project/
│   server.js
│   package.json
│
├── models/
│   ├── Customer.js
│   └── Employee.js
│
└── routes/
    ├── customerRoutes.js
    └── employeeRoutes.js
```

## 🔌 API Endpoints

### Customer Routes

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| POST   | `/customers`     | Create a customer   |
| GET    | `/customers`     | Get all customers   |
| GET    | `/customers/:id` | Get single customer |
| PUT    | `/customers/:id` | Update customer     |
| DELETE | `/customers/:id` | Delete customer     |

### Employee Routes

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| POST   | `/employees`     | Create an employee  |
| GET    | `/employees`     | Get all employees   |
| GET    | `/employees/:id` | Get single employee |
| PUT    | `/employees/:id` | Update employee     |
| DELETE | `/employees/:id` | Delete employee     |

## 🗄 MongoDB Connection

Uses MongoDB Atlas connection string inside `server.js`.
The database and collections are created automatically when data is added.

## ▶️ How to Run

```bash
npm install
npm run dev
```

Server runs on: `http://localhost:3000`

## 🧪 Testing API

Use **Postman** or **Thunder Client** to test POST, GET, PUT, DELETE requests.

## ✔️ Summary

This project demonstrates a clean and simple Express API with two collections, each supporting full CRUD. Ideal for basic backend learning or assignment submission.

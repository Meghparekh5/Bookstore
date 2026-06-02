# 📚 Book Store Management System

A simple Book Store Management System built with Node.js, Express.js, MongoDB, Mongoose, EJS, and Multer. This application allows users to manage books by performing CRUD operations and uploading book images.

---

## 🚀 Features

- View all books
- Add new books
- View book details
- Edit existing books
- Delete books
- Upload and manage book cover images
- MongoDB database integration
- Server-side rendering using EJS

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Frontend
- EJS
- HTML
- CSS
- JavaScript

### File Upload
- Multer

---

## 📂 Project Structure

```bash
Book-store/
│
├── controller/
│   └── bookController.js
│
├── middleware/
│   └── upload.js
│
├── models/
│   └── bookmodel.js
│
├── routes/
│   └── Routers.js
│
├── views/
│   ├── index.ejs
│   ├── add.ejs
│   ├── edit.ejs
│   └── view.ejs
│
├── uploads/
│
├── public/
│
├── app.js
├── package.json
└── README.md
```
---

## 📖 Book Schema

```javascript
{
  bookName: String,
  author: String,
  price: Number,
  category: String,
  description: String,
  image: String
}
```

---

## 🔥 CRUD Operations

### Create
Add a new book with image upload.

### Read
View all books and individual book details.

### Update
Modify book information and update images.

### Delete
Remove books and associated images from storage.

---
## 📦 Dependencies

```json
{
  "express": "^5.2.1",
  "mongoose": "^9.6.3",
  "multer": "^2.1.1",
  "ejs": "^6.0.1",
  "nodemon": "^3.1.14"
}
```

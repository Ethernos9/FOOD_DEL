# 🍔 Full Stack Food Delivery System

This repository contains a full-stack food delivery system with three separate applications:
1. **👨‍💼 Admin Panel**: An interface for the admin to track orders, add items, and remove items.
2. **🖥️ Frontend App**: A React-based user interface where customers can browse the menu, place orders, and track them.
3. **🛠️ Backend API**: An Express.js backend that handles order management, item inventory, payment processing using Stripe, and interactions between the frontend and the admin panel.

## 🏗️ Project Structure
root │ ├── admin-panel │ ├── public │ ├── src │ └── ... │ ├── frontend-app │ ├── public │ ├── src │ └── ... │ └── backend-api ├── src ├── models ├── routes ├── controllers └── ...

## ✨ Features

### 👨‍💼 Admin Panel
- Track all incoming and ongoing orders.
- Add new items to the menu.
- Remove existing items.
- Manage inventory and item availability.

### 🖥️ Frontend App
- Browse items in the menu.
- Add items to the cart.
- Place an order.
- View and track orders in real-time.
- **Secure Payments**: Integrated with Stripe for handling secure payments.

### 🛠️ Backend API
- Manages item inventory and order placement.
- Processes payments through Stripe.
- Provides order-tracking functionalities.
- Integrates with both the frontend and admin panel.

## 🛠️ Tech Stack

- **Frontend App**: React.js, Tailwind CSS (for styling)
- **Admin Panel**: React.js, Tailwind CSS (for styling)
- **Backend API**: Express.js, Node.js, MongoDB (or your choice of database)
- **Payment Gateway**: Stripe for handling secure payments

## ⚙️ Installation

### Clone the Repository
```
git clone https://github.com/Ethernos9/FOOD_DEL

📄 API Documentation
The backend API exposes the following routes:

🛒 Items

GET /items: Retrieve all items.
POST /items: Add a new item.
DELETE /items/:id: Remove an item.
📦 Orders

GET /orders: Retrieve all orders.
POST /orders: Place a new order.
PATCH /orders/:id: Update order status.
💳 Payments

POST /payment: Process payment using Stripe.

# 🏡 StayFinder

StayFinder is a full-stack web application similar to Airbnb, where users can list and book properties for short-term or long-term stays. Built as an intern project, this app provides hands-on experience in both frontend and backend development using modern technologies.

## 🚀 Project Overview

StayFinder allows users to:

- Browse property listings
- View detailed pages with images and descriptions
- Register/login as guests or hosts
- Book properties for selected dates
- (Optional) Hosts can manage their listings

Bonus features include:

- Advanced search with filters
- Interactive map integration
- Mock payment flow

---

## 📦 Features

### ✅ Core Features

#### 🧑‍💻 Frontend (React + Tailwind)

- Homepage with property cards (image, location, price)
- Listing detail page with:
  - Images
  - Description
  - Calendar for availability
- Login and registration pages with client-side validation
- (Optional) Host dashboard to manage their listings

#### 🔧 Backend (Node.js + Express + Typescript)

- **Auth**:
  - `POST /register`
  - `POST /login`
- **Listings API**:
  - `GET /listings` — list all properties
  - `GET /listings/:id` — details for a single property
- **Bookings API**:
  - `POST /bookings` — create a reservation
- (Optional) CRUD routes for hosts to manage listings

#### 🗄️ Database (MongoDB)

- `Users`: id, name, email, password, role
- `Listings`: id, title, description, price, location, host_id, images
- `Bookings`: id, user_id, listing_id, checkin, checkout
- Includes **seed data** for testing

---

## 🌟 Bonus Features

- 🔍 **Search with Filters**:
  - Location
  - Price range
  - Availability by date
- 🗺️ **Map Integration**:
  - Google Maps or Mapbox to show property locations
- 💳 **Mock Payment Integration**:
  - Use Stripe test mode to simulate payment flows
- 🧠 **StayMatch AI** _(Suggested Feature)_:
  - Recommends properties based on user behavior (wishlist, history)
- 📆 **Split Booking** _(Suggested Feature)_:
  - Allows auto-booking of multiple properties if dates overlap

---

## 🧠 Tech Stack

| Layer    | Technology                        |
| -------- | --------------------------------- |
| Frontend | React, Tailwind CSS, React Router |
| Backend  | Node.js, Express, Typescript      |
| Database | MongoDB                           |
| ORM      | Mongoose                          |
| Auth     | JWT, bcrypt                       |
| Optional | Google Maps, Stripe (mock mode)   |

---

## 🔐 Security & Scalability

- JWT for stateless authentication
- Passwords hashed using bcrypt
- Input validation using `express-validator` or Zod
- HTTPS in production, env vars for secrets
- Optimized database queries and pagination
- Images via CDN and cloud storage (optional)
- Can be containerized and deployed on services like Render, Vercel, or AWS

---

## 🛠️ Setup Instructions

```bash
# Clone the repo
git clone https://github.com/Annany2002/stayfinder.git
cd stayfinder

# Install dependencies
cd backend
npm install

cd ../frontend
npm install
```

### 🔧 Configure Environment Variables

Create a `.env` file in `/backend`:

```
MONGODB_URI=mongodb://localhost:27017/stayfinder
```

### 🔨 Run the App

```bash
# Backend
cd backend
npm run dev

# Frontend
cd ../frontend
npm start
```

### 🌱 Seed Database

---

## ✍️ Author

Made with ❤️ as part of an intern project.

- [Annany Vishwakarma](https://github.com/Annany2002)
- Internship Project for Full-Stack Learning

---

## 📃 License

This project is licensed under the MIT License.

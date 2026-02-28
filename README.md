# 📸 Instagram Clone - Full-Stack Web Application

![Banner](https://images.unsplash.com/photo-1596526131090-bcbe09e432d3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

A modern, high-performance Instagram clone built with the **MERN** stack (MongoDB, Express, React, Node.js) and styled with **SCSS** for a premium, dark-themed user experience.

---

## 🚀 Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![SCSS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)
![Multer](https://img.shields.io/badge/Multer-FF6C37?style=for-the-badge&logo=multer&logoColor=white)
![ImageKit](https://img.shields.io/badge/ImageKit-0170F0?style=for-the-badge&logo=icloud&logoColor=white)

---

## 📖 About the Project
This is a **personal practice project** developed to master the complexities of full-stack development. My objective was to replicate the core functional and aesthetic experience of a world-class social media platform while focusing on:
*   **Scalable Backend Architecture:** Leveraging Node.js and MongoDB with industry-standard patterns.
*   **High-Performance UI:** Building a fluid, dark-themed interface with React and SCSS.
*   **Modern Optimization:** Implementing advanced image processing pipelines (ImageKit) and secure session management.

> [!NOTE]
> This project is a key part of my professional development, serving as a comprehensive demonstration of my technical growth and attention to fine UI/UX details.

---

## ✨ Features Implemented

### 🔐 Authentication & Authorization
*   **Secure Login/Register:** Fully functional authentication system using JWT and HTTP-only cookies.
*   **Logout Mechanism:** Professional logout dialog with an elegant UI and backend cookie clearance.
*   **Auth Guards:** Protected routes that redirect unauthenticated users to the login page.

### 🖼️ Feed & Interactions
*   **Dynamic Feed:** Fetches and displays posts from the community.
*   **Post Creation:** Intuitive post-creation interface with image upload capabilities.
*   **Like System:** Responsive like/unlike functionality with instant UI updates.

### 👤 Profile Management
*   **Instagram-Style Profile:** Premium dark-themed layout featuring a circular profile picture with a gradient border.
*   **Bio:** Personalized bio display and clean information.
*   **Cloud DP Update:** New feature that allows users to change their profile picture with a premium upload modal featuring real-time image preview.
*   **Responsive Gallery:** A 3-column responsive image grid with fixed aspect ratios and object-fit optimization.

### 🎨 UI/UX Highlights
*   **Premium Dark Mode:** Consistent, eye-pleasing dark aesthetic across all pages.
*   **Custom Scrollbar:** Sleek, minimalist custom-styled scrollbar for a polished feel.
*   **Hover-Expand Sidebar:** Modern sidebar that smoothly expands on hover to reveal labels.
*   **Micro-animations:** Smooth transitions and fade-in effects for a high-end feel.

---

## Performance & Optimization

### 🖼️ Intelligent Image Handling (ImageKit.io)
To ensure lightning-fast load times without sacrificing quality:
*   **High-Quality Storage:** Original images are stored in high resolution on **ImageKit.io**.
*   **Dynamic Scaling:** Images are dynamically scaled down to the required dimensions on-the-fly.
*   **WebP Transformation:** All images are automatically converted to modern **.webp** format for superior compression and faster rendering in the browser.
*   **Structured Organization:** Dedicated storage structure for various assets (e.g., `InstaClone/Posts/${id}` and `InstaClone/ProfilePics/${username}`).

### 🔗 Scalable Relationships (Edge Collection Concept)
*   **Future-Ready Architecture:** Implemented the **Edge Collection** pattern for managing followers and following.
*   **Optimized Queries:** While the UI for following is in progress, the backend **Models** and **Routes** are already optimized to handle massive social graphs with high performance.

---

## 📂 Project Structure

### Backend Tree
```text
Backend/
├── server.js               # Entry point for the server
└── src/
    ├── app.js              # Express app configuration
    ├── config/             # Database & environment config
    ├── controllers/        # Business logic (Auth, Post, User)
    ├── middlewares/        # Authentication & security middlewares
    ├── models/             # Mongoose Schemas (User, Post, Like, Follow)
    └── routes/             # API Endpoints
```

### Frontend Tree
```text
Frontend/
├── src/
│   ├── Features/           # Modularized feature-based structure
│   │   ├── Auth/           # Login, Register, Logout Logic & Styles
│   │   └── Post/           # Feed, Post Creation, Sidebar, Likes
│   ├── Routes/             # Application Routing setup
│   ├── Shared/             # Reusable global components (Loading, Popups)
│   ├── index.scss          # Global styles & custom scrollbars
│   └── main.jsx            # Entry point
└── vite.config.js          # Vite configuration
```

---

## 🛠️ Getting Started

1.  **Clone the repository**
2.  **Environment Setup:** Create a `.env` file in the `Backend` folder with:
    ```env
    PORT=your_port_number
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_secret_key
    IMAGEKIT_PUBLIC_KEY=your_key
    IMAGEKIT_PRIVATE_KEY=your_key
    IMAGEKIT_ENDPOINT=your_endpoint
    ```
3.  **Install Dependencies:**
    ```bash
    # For Backend
    cd Backend && npm install
    # For Frontend
    cd Frontend && npm install
    ```
4.  **Run Development Servers:**
    ```bash
    # For Backend
    npm run dev
    # For Frontend
    npm run dev
    ```

---

## 📈 Roadmap

### ✅ Completed & Working
*   Full-stack Authentication (JWT + Cookies)
*   Post Creation & Community Feed
*   Like/Unlike Interaction
*   Premium Dark Theme
*   Image Optimization Pipeline (WebP + Scaling)
*   Cloud Profile Picture Update: Users can now update their DP with real-time preview and secure cloud storage.
*   Modular Feature-based Architecture

### 🚀 Future Enhancements
*   **Follow/Unfollow System:** Full implementation of user social graph using existing edge models.
*   **Direct Messaging:** Real-time chat functionality using WebSockets.
*   **Explore Page:** Algorithmic post discovery.
*   **Bio Editing:** Allow users to update their bio directly.
*   **Comments System:** Enable interactions through post comments.

---

## 👨‍💻 Developed By

**Sounarva**  
Building high-impact web applications with passion and love 💖🚀

---

## ⭐ Show your support

If you find this project interesting or useful for your learning, please consider giving it a **star**! It helps me stay motivated and continue building more high-quality projects. 🌟


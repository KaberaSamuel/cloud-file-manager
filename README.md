# 📂 Cloud File Manager (File Uploader)

## About The Project

This project is a full-featured cloud file management system. I tried my best to implement the core functionalities from google drive services.

It provides users with the ability to:

- Create, view, and organize files and folders.
- Securely upload, download, and delete files.
- Manage a hierarchical file structure for easy navigation.

---

## 🛠️ Technologies Used

The application is built using React for frontend and Node (with express) for backend.

### 🖥️ Frontend

| Category             | Technology          | Role in this app                                                                                 |
| :------------------- | :------------------ | :----------------------------------------------------------------------------------------------- |
| **Language**         | **JavaScript (JS)** | Primary language for the client-side logic.                                                      |
| **Main UI**          | **React**           | Library for building the dynamic, component-based user interface.                                |
| **Styling**          | **CSS**             | Used for styling and the look                                                                    |
| **Folder Structure** | **MUI TreeView**    | Used to efficiently display the hierarchical folder structure (it saved me alot of headache 😅). |
| **Animations**       | **Framer Motion**   | Used to easily created animated components                                                       |

### 🧠 Backend

| Category               | Technology                | Role in this app                                                                          |
| :--------------------- | :------------------------ | :---------------------------------------------------------------------------------------- |
| **Runtime**            | **Node.js**               | JavaScript runtime environment for running the server.                                    |
| **API Framework**      | **Express.js**            | Fast, minimalist framework used for building API endpoints.                               |
| **Database & Storage** | **Supabase**              | Provides a PostgreSQL database and **Supabase Buckets** for efficient cloud file storage. |
| **File Handling**      | **Multer.js**             | Middleware for handling file uploads.                                                     |
| **Authentication**     | **JWT (JSON Web Tokens)** | Used for storing users' sessions                                                          |
| **Password Security**  | **Bcrypt**                | Used for securely hashing and verifying user passwords                                    |

---

## 🚀 Quick Links

This project is live at: https://file-uploader-1cpl.onrender.com/

If you have an idea on where to improve feel free to reach out to me at kaberanshutisamuel@gmail.com

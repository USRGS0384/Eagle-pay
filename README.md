Webstack - Portfolio Project

# Eagle Pay - Mobile Money Transfer System

Eagle Pay is a state-of-the-art mobile money transfer system, enabling secure, fast, and efficient financial transactions. The system features a robust backend API and an intuitive frontend interface, designed to provide a seamless user experience.

---

## Features
- **Secure User Authentication**: Sign-up, Login, JWT-based session management.
- **Mobile Money Transfers**: Transfer funds securely between users.
- **Transaction History**: View detailed transaction records.
- **Role-Based Access Control**: Admins and users have different access levels.
- **Real-time Notifications**: Instant updates for transactions using WebSockets.
- **Optimized Performance**: Caching with Redis to enhance response times.
- **Cross-Origin Resource Sharing (CORS)**: Support for secure frontend-backend interaction.

---

## Technologies Used

### **Backend**
- **Node.js**: Scalable JavaScript runtime environment.
- **Express.js**: Framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user and transaction data.
- **Redis**: Caching and background task management.
- **JWT**: Secure token-based authentication.
- **CORS**: Enables cross-origin resource sharing.
- **Bull Queue**: Background job processing (e.g., email notifications).
- **Mongoose**: MongoDB object modeling for Node.js.
- **Jest**: Unit and integration testing for backend APIs.

### **Frontend**
- **React.js**: Dynamic user interface library.
- **Axios**: HTTP client for API communication.
- **React Router**: Frontend routing for navigation.
- **WebSockets**: Real-time transaction notifications.
- **Redux (Optional)**: State management for complex frontend data.

### **Other Tools**
- **Git**: Version control for collaboration and code management.
- **Nodemon**: Automatic server restarts during development.
- **ESLint/Prettier**: Code linting and formatting for consistency.
- **Postman**: API testing and documentation.

---

## System Architecture

Eagle Pay follows a **Client-Server Architecture**, leveraging a decoupled frontend and backend to enable flexibility and scalability.

### **Architecture Diagram**
```plaintext
User <-> Frontend (React.js) <-> Backend (Node.js/Express.js) <-> Database (MongoDB) <-> Redis (Cache & Job Queue)


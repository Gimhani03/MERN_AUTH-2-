# 🎬 Cinema Auth - Full Stack Authentication System

A complete authentication and user management system built with React, Node.js, Express, and MongoDB. Features secure user registration, login, role-based access control (Admin/Customer), profile management, and password reset functionality.

![Cinema Auth](https://img.shields.io/badge/Cinema-Auth-purple?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Node](https://img.shields.io/badge/Node.js-v18+-green?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.x-blue?style=for-the-badge)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🔐 Authentication
- **User Registration** - Create new customer accounts
- **User Login** - Secure login with JWT tokens
- **Admin Login** - Separate admin authentication portal
- **Password Reset** - Forgot password with OTP verification via email
- **Role-Based Access** - Customer and Admin roles with different permissions

### 👤 User Management
- **Profile Management** - View and edit user information
- **Update Profile** - Change name and email
- **Change Password** - Update password with current password verification
- **Delete Account** - Permanent account deletion with confirmation

### 🎨 UI/UX
- **Profile Dropdown** - Beautiful dropdown menu with user info
- **Avatar Component** - User initials in circular avatar
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Loading States** - Visual feedback during async operations
- **Password Visibility Toggle** - Show/hide password fields
- **Form Validation** - Client-side and server-side validation

### 🛡️ Security
- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - bcrypt encryption for passwords
- **Protected Routes** - Middleware to protect sensitive routes
- **Role Verification** - Admin-only route protection
- **Email Verification** - OTP-based password reset

---

## 🛠️ Tech Stack

### Frontend
- **React** 18.x - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **Vite** - Fast build tool and dev server
- **React Icons** - Icon library
- **CSS3** - Styling with glassmorphism effects

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Nodemailer** - Email sending
- **dotenv** - Environment variables
- **cors** - Cross-origin resource sharing

---

## 📁 Project Structure

```
Cinema Auth/
├── frontend/                    # React frontend
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   │   ├── Avatar.jsx
│   │   │   ├── Avatar.css
│   │   │   ├── ProfileDropdown.jsx
│   │   │   └── ProfileDropdown.css
│   │   ├── pages/              # Page components
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── AdminLogin.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   ├── ResetPassword.jsx
│   │   │   ├── ConfirmPassword.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Profile.jsx
│   │   ├── services/           # API services
│   │   │   └── api.js
│   │   ├── App.jsx             # Main app component
│   │   └── main.jsx            # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── backend/                     # Node.js backend
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js   # Auth logic
│   │   └── passwordController.js
│   ├── middleware/
│   │   └── auth.js             # JWT verification & admin check
│   ├── models/
│   │   ├── User.js             # User schema
│   │   └── OTP.js              # OTP schema
│   ├── routes/
│   │   ├── auth.js             # Auth routes
│   │   └── password.js         # Password reset routes
│   ├── scripts/
│   │   └── createAdmin.js      # Create admin user
│   ├── utils/
│   │   └── sendEmail.js        # Email utility
│   ├── .env                    # Environment variables
│   ├── server.js               # Entry point
│   └── package.json
│
└── README.md                    # This file
```

---

## 🚀 Installation

### Prerequisites
- **Node.js** v18 or higher
- **MongoDB** (Local or MongoDB Atlas)
- **npm** or **yarn**
- **Gmail account** (for sending OTP emails)

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/cinema-auth.git
cd cinema-auth
```

### Step 2: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 3: Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

---

## ⚙️ Configuration

### Backend Configuration

1. **Create `.env` file** in the `backend` folder:

```env
# Server Configuration
PORT=5001

# MongoDB Connection
MONGO_URI=mongodb://localhost:27017/cinema-auth
# Or use MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/cinema-auth

# JWT Secret (Generate a random string)
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production

# Email Configuration (Gmail)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password

# Frontend URL
FRONTEND_URL=http://localhost:5173
```

2. **Gmail App Password Setup:**
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification
   - Generate App Password: [App Passwords](https://myaccount.google.com/apppasswords)
   - Use the 16-character password in `EMAIL_PASS`

3. **Create Admin User:**
```bash
cd backend
node scripts/createAdmin.js
```

**Default Admin Credentials:**
- Email: `admin@cinema.com`
- Password: `admin123456`
- ⚠️ **Change password after first login!**

### Frontend Configuration

The frontend is pre-configured to use `http://localhost:5001` for the backend API.

To change the API URL, edit `frontend/src/services/api.js`:
```javascript
const API = axios.create({
  baseURL: 'http://localhost:5001/api',
});
```

---

## 🎮 Usage

### Start Backend Server
```bash
cd backend
npm run dev
```
Server runs on: `http://localhost:5001`

### Start Frontend Development Server
```bash
cd frontend
npm run dev
```
Frontend runs on: `http://localhost:5173`

### Access the Application
- **Homepage/Login:** http://localhost:5173
- **Register:** http://localhost:5173/register
- **Admin Login:** http://localhost:5173/admin-login
- **Dashboard:** http://localhost:5173/dashboard
- **Profile:** http://localhost:5173/profile

---

## 📡 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/register` | Register new user | No |
| POST | `/login` | User login | No |
| POST | `/adminlogin` | Admin login | No |
| PUT | `/profile` | Update profile | Yes |
| PUT | `/change-password` | Change password | Yes |
| DELETE | `/profile` | Delete account | Yes |

### Password Reset Routes (`/api/password`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/send-otp` | Send OTP to email | No |
| POST | `/verify-otp` | Verify OTP code | No |
| POST | `/reset-password` | Reset password | No |

### Request/Response Examples

#### Register User
**Request:**
```json
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "customer"
  }
}
```

#### Login
**Request:**
```json
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "customer"
  }
}
```

#### Update Profile (Protected)
**Request:**
```json
PUT /api/auth/profile
Headers: { "Authorization": "Bearer <token>" }
{
  "name": "John Smith",
  "email": "johnsmith@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Smith",
    "email": "johnsmith@example.com",
    "role": "customer"
  }
}
```

---

## 📸 Features Overview

### 🔐 Authentication Pages
- **User Registration** - Sign up with name, email, and password
- **User Login** - Secure login with email and password
- **Admin Login** - Separate admin authentication
- **Forgot Password** - Request password reset via email
- **OTP Verification** - Enter 6-digit code sent to email
- **Reset Password** - Set new password after verification

### 🏠 Dashboard
- **Welcome Screen** - Personalized greeting
- **Profile Dropdown** - Access to profile and settings
- **Role Badge** - Display user role (Admin/Customer)
- **Logout** - Secure logout with session cleanup

### 👤 Profile Management
- **View Profile** - Display user information
- **Edit Profile** - Update name and email
- **Change Password** - Secure password update
- **Delete Account** - Permanent account deletion

### 🎨 UI Features
- **Glassmorphism Design** - Modern transparent card design
- **Gradient Backgrounds** - Beautiful purple gradient themes
- **Smooth Animations** - Slide-down and fade effects
- **Responsive Layout** - Mobile-friendly design
- **Loading States** - Visual feedback during operations
- **Error Handling** - User-friendly error messages

---

## 🔒 Security Features

1. **Password Encryption** - bcrypt with 12 salt rounds
2. **JWT Tokens** - Secure token-based authentication (30-day expiry)
3. **Protected Routes** - Middleware verification for sensitive endpoints
4. **Role Verification** - Admin-only route protection
5. **Email Verification** - OTP expires in 10 minutes
6. **Input Validation** - Client and server-side validation
7. **CORS Protection** - Configured origin restrictions
8. **Password Requirements** - Minimum 8 characters

---

## 🧪 Testing

### Test User Accounts

**Admin Account:**
- Email: `admin@cinema.com`
- Password: `admin123456`

**Customer Account:**
- Register at `/register`

### Manual Testing Checklist
- [ ] User registration
- [ ] User login
- [ ] Admin login
- [ ] Forgot password flow
- [ ] OTP verification
- [ ] Password reset
- [ ] Profile update
- [ ] Password change
- [ ] Account deletion
- [ ] Logout functionality

---

## 🚧 Known Issues & Future Enhancements

### Known Issues
- None currently reported

### Future Enhancements
- [ ] Email verification on registration
- [ ] Remember me functionality
- [ ] Social login (Google, Facebook)
- [ ] Two-factor authentication
- [ ] Password strength meter
- [ ] Profile picture upload
- [ ] Activity log
- [ ] Session management
- [ ] Rate limiting
- [ ] Unit and integration tests

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Use ESLint for linting
- Follow React best practices
- Write clean, documented code
- Add comments for complex logic

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI Library
- [Express.js](https://expressjs.com/) - Backend Framework
- [MongoDB](https://www.mongodb.com/) - Database
- [JWT](https://jwt.io/) - Authentication
- [Nodemailer](https://nodemailer.com/) - Email Service
- [React Icons](https://react-icons.github.io/react-icons/) - Icon Library

---

## 📞 Support

If you have any questions or issues, please:
- Open an issue on GitHub
- Contact: your.email@example.com

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by Your Name

</div>

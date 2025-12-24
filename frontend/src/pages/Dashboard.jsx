import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileDropdown from '../components/ProfileDropdown'
import './dashboard.css'

const Dashboard = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    setIsAuthenticated(false);
  };
  
  return (
    <div className="dashboard-wrapper">

      <nav className="dashboard-navbar">
        <div className="navbar-left">
          <h2>Cinema Auth</h2>
        </div>
        <div className="navbar-right">
          {isAuthenticated ? (
            <ProfileDropdown onLogout={handleLogout} />
          ) : (
            <button className="login-button" onClick={handleLoginClick}>
              Login
            </button>
          )}
        </div>
      </nav>

      <div className="dashboard-container">
        <h1>Welcome to Dashboard</h1>
      
      </div>
    </div>
  )
}

export default Dashboard

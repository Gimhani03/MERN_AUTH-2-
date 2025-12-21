import React from 'react'
import { useNavigate } from 'react-router-dom'
import './dashboard.css'

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Later: Clear auth tokens
    navigate('/login');
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <h1>Welcome to Dashboard</h1>
        <p>You have successfully logged in!</p>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  )
}

export default Dashboard

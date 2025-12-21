import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import './login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault(); // stop page reload

    if (!email || !password) {
      alert("Email and password are required");
      return; // STOP navigation
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Later: API call for authentication
      navigate("/dashboard"); // ✅ Go to dashboard
    }, 1000);
  };

  return (
    <div className="login-wrapper">
      <div className="login-form-box">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>

          <div className="login-input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email Address"
            />
            <FaUser className="icon" />
          </div>

          <div className="login-input-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
            />
            <div className="icon" onClick={() => setShowPassword(!showPassword)} style={{cursor: 'pointer'}}>
              {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </div>
          </div>

          <div className="login-forgot-password">
            <label>
              <Link to="/forgot-password">Forgot Password?</Link>
            </label>
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>

          <div className="register">
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

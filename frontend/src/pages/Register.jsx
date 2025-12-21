import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import './register.css'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return; 
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert("Registration successful! Please login.");
      navigate("/login");
    }, 1000);
  };

  return (
     <div className="register-wrapper">
            <div className="register-form-box">
            <form action="" onSubmit={handleSignup}>
                <h1>Register</h1>
                <div className="register-input-box">
                    <input type="text" placeholder='Full Name' onChange={(e) => setName(e.target.value)} aria-label="Full Name" required />
                    <FaUser className='icon' />
                </div>

                <div className="register-input-box">
                    <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} aria-label="Email Address" required />
                    <MdEmail className='icon' />
                </div>
    
                <div className="register-input-box">
                    <input type={showPassword ? "text" : "password"} placeholder='Password' onChange={(e) => setPassword(e.target.value)} aria-label="Password" required />
                    <div className='icon' onClick={() => setShowPassword(!showPassword)} style={{cursor: 'pointer'}}>
                      {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                    </div>
                </div>
    
                <button type='submit' disabled={isLoading}>
                  {isLoading ? "Signing up..." : "Sign up"}
                </button>
    
                <div className="register">
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </form>
            </div>
        </div>
  )
}

export default Register

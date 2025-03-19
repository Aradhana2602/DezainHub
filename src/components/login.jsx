import React, { useState } from "react";
import "./login.css"; // Import the CSS file for styling
import { FaArrowRight } from "react-icons/fa";




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (

    <div className="maincontainer">
        <div className="sub-part">
          <div className="logo">
            <img src="/assets/logo.svg" alt="Logo" className="logo" />
          </div>

          <div className="content-wrapper">
            <div className="content1">Get Started with Us</div>
            <div className="content2">Complete these easy steps to register your account.</div>
          </div>
        </div>

        {/* <div className="login-container">
        <h2>Login</h2>
        <form>
            <div className="input-group">
            <label>Email:</label>
            <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
             />
            </div>
            <div className="input-group">
            <label>Password:</label>
            <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            </div>
            <button type="submit">Login</button>
        </form>
        </div> */}

<div className="login-container">
      <h2 className="login-title">Admin Log in</h2>
      <p className="login-subtitle">Fill in your details to log in</p>

      <form className="login-form">
        <label className="input-label">Admin ID</label>
        <input type="email" placeholder="eg. johnfrans@gmail.com" className="login-input" /><br></br><br/>

        <label className="input-label">Password</label>
        <input type="password" placeholder="eg. johnfrans@gmail.com" className="login-input" /><br/><br/>

        <a href="#" className="forgot-password">Forgot password?</a>

        <button type="submit" className="login-button">
          Submit application <FaArrowRight className="arrow-icon" />
        </button>
      </form>
    </div>
    </div>
  );
};

export default Login;

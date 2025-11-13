import React from "react";
import "../index.css"; // link the CSS file
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://zerodha-backend-pho2.onrender.com/auth/signup", // backend url
        {
          name,
          email,
          password,
          mobileNumber: number,
        },
        {withCredentials:true}
      );

      window.location.href = "https://zerodha-lyart-three.vercel.app/dashboard";
    } catch (error) {
      alert(error.response?.data?.message || "registration failed dut to some error ")
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <>
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Create Account</h2>

          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="number">Mobile Number</label>
            <input
              type="number"
              placeholder="Enter your mobile number"
              id="number"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>

          {/* 👇 Added login section */}
          <p className="login-text">
            Already have an account?{" "}
            <Link to={"/login"} className="login-link">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Signup;

import React, { useState } from "react";
import "../index.css"
 // link the CSS file
import axios from "axios";

// import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    const res =   await axios.post(
        "https://zerodha-backend-pho2.onrender.com/auth/login", // backend url frontend
        { email, password },
        {withCredentials:true},
      )
      if(res.data.success){
        window.location.href = "https://zerodha-lyart-three.vercel.app/";  // dashboard url link
      }
      else{
        alert(res.data.message || "Invalid Email or password")
      }

    } catch (err) {
      alert(err.response?.data?.message || "Invalid email Or Password")
      console.log(err);
       
    }
  };

  return (
    <>
      <div className="login-container">
        <form className="login-form" action="" onSubmit={handleSubmit}>
          <h2>Login Account</h2>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
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
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;

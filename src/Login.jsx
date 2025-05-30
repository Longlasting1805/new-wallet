import React, { useState, useEffect } from "react";
import imgUrl from "./assets/webpix.jpg";
import { Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; 

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const navigate = useNavigate();

  const loginDetails = async () => {
    try {
      const loginData = {
        username: email,
        password: pass
      }
      const response = await axios.get('', 
      loginData, 
      {headers: {'Content-Type': 'application/json'}})
      if (response.status === 200) loginData(response.data)

    } catch (error) {
      console.error('error', error)
    }
  }

  useEffect (() => { loginDetails() }, [])

  return (
    <div className="auth-form-container">
      <div className="login-div">
        <img className="login-img" src={imgUrl} alt="Italian Trulli" />
      </div>

      <div className="form">
        <div className="formchild">
          <div className="welcome-container">
            <h2 className="welcome">Welcome Back!</h2>
          </div> 
        
          <p className="login-dashboad">Log in to your Dashboard</p>
          <form className="login-form" onSubmit={handleSubmit}>
            {/* <label htmlFor="email">email</label> */}
            <input
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="email:"
              id="email"
              name="email"
            />
            {/* <label htmlFor="password">password</label> */}
            <input
              className="login-input"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="password:"
              id="password"
              name="password"
            />  

          <div style={{ display: "flex" }} className="forgot-and-rem">
              
            <div className="remember">
                <Checkbox {...label} defaultChecked className="remember-check"/>
                <p className="remember-box">Remember Me</p>
              </div>
              
              <a href="/forgot" className="forgotp">
                Forgot Password
              </a>
             
            </div>
            <button className="login-btn" onClick={() => navigate("/dashboard")}>Login</button>
           
          <div className="no-account">
            <p className="dont-have-acc-btn">
              Don't have an account?
            </p>
            <p className="click-signup"
            onClick={() => navigate("/register")}>Sign Up</p>
          </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

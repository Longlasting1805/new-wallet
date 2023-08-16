import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from './Login';
import { Register } from "./Register";
import { Forgot } from "./Forgotpassword";
import {Routes, Route} from 'react-router-dom'
import { Otp } from './Otp';
import { Completeregistration } from "./Completeregistration";
import { Moredetails } from "./Moredetails"
import { Forgotpasswordotp } from "./Forgotpasswordotp"
import { Newpassword } from "./Newpassword";
import { Dashboard } from "./Dashboard";


function App() {
  // const [currentForm, setCurrentForm] = useState('login')

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }
  return (
    <div className="App">
      
       <Routes>
       <Route path="/" element={<Login />}/>
       <Route path="/login" element={<Login />}/>
       <Route path="/register" element={<Register />}/>
       <Route path="/forgot" element={<Forgot />}/>
       <Route path="/otp" element={<Otp />}/>
       <Route path="/completeregistration" element={<Completeregistration />}/>
       <Route path="/moredetails" element={<Moredetails />}/>
       <Route path="/forgotpasswordotp" element={<Forgotpasswordotp />}/>
       <Route path="/newpassword" element={<Newpassword />}/>
       <Route path="/dashboard" element={<Dashboard />}/>

             
       
       
       </Routes>

    </div>
  );
}

export default App;

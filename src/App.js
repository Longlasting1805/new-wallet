import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from './Login';
import { Register } from "./Register";
import { Forgot } from "./Forgotpassword";
import {Routes, Route} from 'react-router-dom'
import { Otp } from './Otp';
import { Completeregistration } from "./Completeregistration";
import {}


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
             
       
       
       </Routes>

    </div>
  );
}

export default App;

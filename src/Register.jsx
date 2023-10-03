import React, { useState, useEffect } from "react";
import imgUrl from './assets/webpix1.jpg'
import axios from 'axios';
import Modal from '@mui/material/Modal';
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
            setData(response.data);
            setLoading(false);
          })
          .catch(error => {
            console.error("There was an error fetching data", error);
            setLoading(false);
          });
      }, []);

    return (
        <div className="auth-form-container">
                <div className="register-div">
                    <img className="register-img" src={imgUrl}alt="Trulli"/>
                </div>

        
            <div className="form">
                <h2 className="welcome">Welcome!</h2>
                <p className="register-dashboard">Sign up by entering the information below</p>
                <form  className="register-form"  onSubmit={handleSubmit}>
                    {/* <label htmlFor="firstname">First name</label> */}
                    <input className="register-input" value={firstname}  onChange={(e) => setFirstName(e.target.value)} name="name" id="name" placeholder="First Name:"/>
                    {/* <label htmlFor="lastname">Last name</label> */}
                    <input className="register-input" value={lastname}  onChange={(e) => setLastName(e.target.value)} name="name" id="name" placeholder="Last Name:"/>
                    {/* <label htmlFor="email">email</label> */}
                    <input className="register-input"  value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email:" id="email" name="email"/>
                    {/* <label htmlFor="password">password</label> */}
                    <input className="register-input" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password:" id="password" name="password"/>
                    <div className="no-account">
          <p className="alreadyhave-acc">
            Already have an account?
          </p>
          <p className="already-have-acc-btn"
            onClick={() => navigate("/login")}>Login</p>
          </div>
                    <button className="signup-btn" onClick={handleOpen}> Sign Up</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box  onClick={() => navigate("/otp")} sx={style}>
                    Kindly Check your mail to see your OTP number
                            for Account verification
                </Box>
             </Modal>
            </form>

               
               

            </div>
        </div>
    )
}
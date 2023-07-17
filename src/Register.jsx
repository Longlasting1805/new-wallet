import React, { useState } from "react";
import imgUrl from './assets/webpix1.jpg'
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

    return (
        <div className="auth-form-container">
                <div className="img"><img src={imgUrl}alt="Trulli"/></div>

        
            <div className="form">
                <h2>Welcome!</h2>
                <p>Sign up by entering the information below</p>
                <form  className="register-form"  onSubmit={handleSubmit}>
                    <label htmlFor="firstname">First name</label>
                    <input value={firstname}  onChange={(e) => setFirstName(e.target.value)} name="name" id="name" placeholder="First name"/>
                    <label htmlFor="lastname">Last name</label>
                    <input value={lastname}  onChange={(e) => setLastName(e.target.value)} name="name" id="name" placeholder="Last name"/>
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="ken@gmail.com" id="email" name="email"/>
                    <label htmlFor="password">password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
                    <button onClick={handleOpen}> Sign Up</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    Kindly Check your mail to see your OTP number
                            for Account verification
                </Box>
             </Modal>
                </form>

               
                <button className="link-btn" onClick={() => navigate('/login')}> Already have an account? Login.</button>

            </div>
        </div>
    )
}
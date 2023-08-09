import React, { useState } from "react";
import imgUrl from './assets/webpix1.jpg';
import { useNavigate } from "react-router-dom";
import { MuiOtpInput } from 'mui-one-time-password-input'
import Modal from '@mui/material/Modal';
import { Box, Typography } from "@mui/material";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    height:'100px',
    borderRadius:'8px',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p:2
  };

export const Forgotpasswordotp = (props, text) => {
    const [otp, setOtp] = useState('');
    
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(otp);
    }

    const navigate = useNavigate()

    const handleChange = (newValue) => {
        setOtp(newValue)
      }

    return(
        <div className="otp-form">
            <div className="otp-div">
              <img className="otp-img" src={imgUrl}alt="Italian Trulli"/>
            </div>
           <div>
            <p className="otp-label" > Enter your OTP number</p>
                {/* <label htmlFor="otp" style={{ marginLeft: '5rem', marginBottom: '5rem'}}> otp</label> */}
                 <div className="otp">
                    <MuiOtpInput TextFieldsProps={{ size: 'small', placeholder: '-', type: 'password' }}  value={otp} onChange={handleChange} style={{ width: '300px'}}/>
                </div>

                <div style={{width: '48rem', }}>
                  <button className="otpcontinue-button" onClick={handleOpen}> Continue</button>
                  <div>
                  <a href="" className="cancelotplink" onClick={() => navigate('/login')} >cancel</a>
                  </div>
                 
                  <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{borderRadius:"5px"}}
                >
                <Box sx={style}>
                    Your Account has been Successfully Verified
                    <p className="otpcontinue-link" onClick={() => navigate('/Newpassword')}> continue</p>
                </Box>
             </Modal>
                </div>
                   
           </div>
        </div>
    )
}
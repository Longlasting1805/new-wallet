import React, {useState} from "react";
import imgUrl from './assets/forgot.jpg'
import { useNavigate } from "react-router-dom";
import Modal from '@mui/material/Modal';
import { Box, Typography } from "@mui/material";


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

export const Forgot = (props) => {
    const [email, setEmail] = useState('');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

   

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
}

const navigate = useNavigate()

return(
    <div className="forgot-container">
        <div className="forgot-div">
        <img className="forgot-img" src={imgUrl}alt="Italian Trulli"/>
        </div>
        <div className="forgot-pass">
        
            <label className="forgot-label" htmlFor="email">Enter Email Address to reset Password</label>
            <input className="forgot-input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email Address" id="email" name="email"/>
            <button className="forgot-btn" onClick={handleOpen}>Next</button>
        
            <a href="" className="cancel-link" onClick={() => navigate('/login')} >cancel</a>

            <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                    <Box sx={style}>
                        Check your mail for your OTP number
                    </Box>
                </Modal>
        </div> 
    </div>
)

}
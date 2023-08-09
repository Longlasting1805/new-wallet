import React, {useState} from "react";
import imgUrl from './assets/forgot.jpg';
// import imgUrl from './assets/vector.jpg';
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

export const Newpassword = (props) => {
    const [newPassword, setNewpassword] = useState('');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

   

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newPassword);
}

const navigate = useNavigate()

return(
    <div className="forgot-container">
        <div className="forgot-div">
        <img className="forgot-img" src={imgUrl}alt="Italian Trulli"/>
        </div>
        <div className="forgot-pass">
            {/* <div className="reset-password">
                <p>Reset Password</p>
            </div> */}
        
            <label className="newpasswordlabel" htmlFor="email">Enter New Password</label>
            <input className="forgot-input" value={newPassword} onChange={(e) => setNewpassword(e.target.value)} type="new password" placeholder="New Pasword" id="new password" name="new password"/>
            <button className="forgot-btn" onClick={handleOpen}>Reset</button>
        
            {/* <a href="" className="cancel-link" onClick={() => navigate('/login')} >cancel</a> */}

            <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                    <Box className="success-box" onClick={() => navigate("/Forgotpasswordotp")} sx={style}>
                        Success
                        <div>
                            { <a href="" className="dashboard-link" onClick={() => navigate('/login')} >Go to Dashboard</a> }

                        </div>
                    </Box>
                </Modal>
        </div> 
    </div>
)

}
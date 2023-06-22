import React, { useState } from "react";
import imgUrl from './assets/ygt.JPG';
import { useNavigate } from "react-router-dom";
import { MuiOtpInput } from 'mui-one-time-password-input'


export const Otp = (props) => {
    const [otp, setOtp] = useState('');

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
            <div className="otp-img">
              <img src={imgUrl}alt="Italian Trulli"/>
            </div>
           <div>
            <p style={{ marginLeft: '10rem'}}> Enter your otp number</p>
                {/* <label htmlFor="otp" style={{ marginLeft: '5rem', marginBottom: '5rem'}}> otp</label> */}
                 <div className="otp">
                    <MuiOtpInput value={otp} onChange={handleChange} style={{ width: '300px'}}/>
                </div>

                <div style={{width: '48rem', }}>
                  <button style={{width: '15rem', marginTop: '1rem', color: '#7439bd'}}> Continue</button>
                </div>
                   
           </div>
        </div>
    )
}
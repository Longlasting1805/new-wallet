import React, { useState } from "react";
import imgUrl from './assets/com.jpg'
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";



export const Completeregistration = (props) => {

    const [nin, setNin] = useState('');
    const [driverslicence, setDriversLicence] = useState('');
    const [voterscard, setVotersCard] = useState('');
    const [homeaddress, setHomeAdress] = useState('');
    const handleChange = (e) =>{
        e.preventDefault()
    }
    return(

    <div className="root-div">
        <div className="img">
            <img src={imgUrl}alt="Italian Trulli"/>
        </div>

        
        <div className="select-identification">
        <div className="kindly">
            <p>Kindly Complete your Registration</p>
        </div>

            <p className="kyc">KYC</p>
            <FormControl fullWidth>
                <p className="select-class">select a form of identification</p>
                <InputLabel onChange={(e) => setNin(e.target.value)} id="demo-simple-select-label" placeholder="nin"></InputLabel>
                <InputLabel onChange={(e) => setDriversLicence(e.target.value)} id="demo-simple-select-label" placeholder="drivers licence"></InputLabel>
                <InputLabel onChange={(e) => setVotersCard(e.target.value)} id="demo-simple-select-label" placeholder="voters card"></InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={nin}
                    label="Nin"
                    onChange={handleChange}
                >
                    <MenuItem value={nin}>Nin</MenuItem>
                    <MenuItem value={driverslicence}>Drivers licence</MenuItem>
                    <MenuItem value={voterscard}>Voters card</MenuItem>
                
                </Select>
               
            </FormControl>
            <div>
            <input className="homeaddress" value={homeaddress}  onChange={(e) => setHomeAdress(e.target.value)} placeholder="Home Address"/>
            </div>

            <div className="cards">
            <p>Add Cards</p>
            </div>
        </div>

    </div>
    )

}

    
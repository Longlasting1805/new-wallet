import React, { useState } from "react";
import imgUrl from './assets/com.jpg'
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import {BiPlus} from 'react-icons/bi'



export const Completeregistration = (props) => {

    const [nin, setNin] = useState('');
    const [driverslicence, setDriversLicence] = useState('');
    const [voterscard, setVotersCard] = useState('');
    const [homeaddress, setHomeAdress] = useState('');
    const [cardnumber, setCardNumber] = useState('');
    const [cardname, setCardName] = useState('');
    const [expdate, setExpDate] = useState('');
    const [cvv, setCvv] = useState('');
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
                <p className="select-class">Select a Form of Identification</p>
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
            
            <div className="plus">
            <BiPlus />
            </div>
        </div>
           
            <div className="carding">
                <input className="Cardname" value={cardname}  onChange={(e) => setCardName(e.target.value)} placeholder="Card Name"/>
                <input className="Cardnumber" value={cardnumber}  onChange={(e) => setCardNumber(e.target.value)} placeholder="Card Number"/>
                <input className="Expdate" value={expdate}  onChange={(e) => setExpDate(e.target.value)} placeholder="Exp.Date"/>
                <input className="cvv" value={cvv}  onChange={(e) => setCvv(e.target.value)} placeholder="CVV"/>
            </div>
          
        </div>

    </div>
    )

}

    
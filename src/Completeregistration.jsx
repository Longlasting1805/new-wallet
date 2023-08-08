import React, { useState } from "react";
import imgUrl from './assets/com.jpg'
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import {BiPlus} from 'react-icons/bi'
import { useNavigate } from "react-router-dom";



export const Completeregistration = (props) => {

    const [selectValues, setSelectValues] = useState({
        nin: "",
        driverslicence: "",
        voterscard: ""
    })
    const [nine, setNine] = useState('');
    // const [driverslicence, setDriversLicence] = useState('');
    // const [voterscard, setVotersCard] = useState('');
    const [homeaddress, setHomeAdress] = useState('');
    const [cardnumber, setCardNumber] = useState('');
    const [cardname, setCardName] = useState('');
    const [expdate, setExpDate] = useState('');
    const [cvv, setCvv] = useState('');
    // const handleChange = (e) => {
    //     setSelectValues({...selectValues,  name:e.target.value})
    //   };

    const handleChange = (e) => {
        setNine(e.target.value)
      };

      const navigate = useNavigate()

    return(

    <div className="root-div">
        <div className="registration-div">
            <img className="registration-img" src={imgUrl}alt="Italian Trulli"/>
        </div>

        
       <div className="select-identification">
        <div className="kindly">
            <p>Kindly Complete your Registration</p>
           
        </div>

        <div className="line-div">
        <hr className="line"></hr>
        </div>

            <p className="kyc">KYC</p>
            <FormControl fullWidth sx={{marginLeft: "5rem"}}>
                <p className="select-class">Select a Form of Identification</p>
                <InputLabel onChange={(e) => setSelectValues({...selectValues, nin:e.target.value})} id="demo-simple-select-label" placeholder="nin"></InputLabel>
                <InputLabel onChange={(e) => setSelectValues({...selectValues, driverslicence:e.target.value})} id="demo-simple-select-label" placeholder="drivers licence"></InputLabel>
                <InputLabel onChange={(e) => setSelectValues({...selectValues, voterscard:e.target.value})} id="demo-simple-select-label" placeholder="voters card"></InputLabel>
                <Select
                
                    id="nin"
                    value={nine}
                    label="Options"
                    onChange={handleChange}
                    sx={{color: "White", marginTop:"2rem", marginLeft:"5rem",width:"300px", marginBottom:"1rem"}}
                >
                    <MenuItem value={"Nin"}>Nin</MenuItem>
                    <MenuItem value={"Drivers licence"}>Drivers licence</MenuItem>
                    <MenuItem value={"Voters card"}>Voters card</MenuItem>
                
                </Select>
               
            </FormControl>
            <div>
            <input className="homeaddress" value={homeaddress}  onChange={(e) => setHomeAdress(e.target.value)} placeholder="Home Address"/>
            </div>

            <hr className="lining"></hr>
        <div className="cards">
            <p className="p-tag"> Add Cards</p>
            <BiPlus size={20} style={{marginLeft: "10rem", cursor: "pointer", color: "#000"}}/>
        </div>
           
            <div className="carding">
                <input className="cardname" value={cardname}  onChange={(e) => setCardName(e.target.value)} placeholder="Card Name"/>
                <input className="cardnumber" value={cardnumber}  onChange={(e) => setCardNumber(e.target.value)} placeholder="Card Number"/>
                <input className="expdate" value={expdate}  onChange={(e) => setExpDate(e.target.value)} placeholder="Exp.Date"/>
                <input className="cvv" value={cvv}  onChange={(e) => setCvv(e.target.value)} placeholder="CVV"/>
            </div>
            <a href="" onClick={() => navigate('/moredetails')} className="next" >Next</a>

      </div>
       
    </div>
    )

}

    
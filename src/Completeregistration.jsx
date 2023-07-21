import React, { useState } from "react";
import imgUrl from './assets/ygt.JPG'
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";


export const Completeregistration = (props) => {

    const [nin, setNin] = useState('');
    const handleChange = (e) =>{
        e.preventDefault()
    }
    return(

        <div className="root-div">
        <div className="img">
            <img src={imgUrl}alt="Italian Trulli"/>
        </div>

        <div className="select-identification">
            <p>KYC</p>
            <h1>Select a Form of Identification</h1>
        <FormControl fullWidth>
            <InputLabel onChange={(e) => setNin(e.target.value)} id="demo-simple-select-label">Nin</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={nin}
                label="Nin"
                onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
            
            </Select>
        </FormControl>
        </div>

    </div>
    )

}

    
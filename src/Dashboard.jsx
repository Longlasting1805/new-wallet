import React, { useState } from "react";
import imgUrl from "./assets/vector1.jpg";
import imgUrl1 from "./assets/group1.jpg";
// import { Checkbox } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Dashboard = (props) => {
  const [card, setCard] = useState("");
//   const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email);
  };

//   const navigate = useNavigate();

  return (
  <div className="root-div">

    <div className="group-div">
       <img className="group-img" src={imgUrl1}alt="Trulli"/>
    </div>

     <div className="money-div">
                    <img className="money-img" src={imgUrl}alt="Trulli"/>
                    <img className="money-img" src={imgUrl}alt="Trulli"/>
                    <img className="money-img" src={imgUrl}alt="Trulli"/>
                    <img className="money-img" src={imgUrl}alt="Trulli"/>
                    <img className="money-img" src={imgUrl}alt="Trulli"/>
                    <img className="money-img" src={imgUrl}alt="Trulli"/>
                    <img className="money-img" src={imgUrl}alt="Trulli"/>
                    <img className="money-img" src={imgUrl}alt="Trulli"/>
                    <img className="money-img" src={imgUrl}alt="Trulli"/>
                </div>
        <div>
        <Card variant="outlined">{card}</Card>
        </div>
  </div>
  );
};

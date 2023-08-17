import React, { useState } from "react";
import imgUrl from "./assets/vector1.jpg";
import imgUrl1 from "./assets/group1.jpg";
// import { Checkbox } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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

                    <div className="card-div">
          <Card className="root-card">
              <CardContent className="card-content">
              <div>
                <p>
                  Hi Kenny,
                </p>
               
               <div>
                <CardContent className="card-content2">
                  <div>
                    <p>Total Balance</p>
                    <p>£1m</p>
                  </div>

                  <div>
                    
                  </div>

                </CardContent>
               </div>
              </div>
              
               
              </CardContent>
              <CardActions className="card-action">
                {/* <Button size="small">Learn More</Button> */}
              </CardActions>
        </Card>
      
  
        </div>
                </div>
       
  </div>
  );
};

import React, { useState } from "react";
import imgUrl from "./assets/vector1.jpg";
import imgUrl1 from "./assets/group1.jpg";
import imgUrl2 from "./assets/atmCard.jpg";
import imgUrl3 from "./assets/handMoney.jpg";
import imgUrl4 from "./assets/help.jpg";
import imgUrl5 from "./assets/airtime.jpg";
import imgUrl6 from "./assets/save.jpg";
import imgUrl7 from "./assets/ellipse19.jpg";
import imgUrl8 from "./assets/ellipse20.jpg";
import imgUrl9 from "./assets/ellipse21.jpg";
import imgUrl10 from "./assets/ellipse22.jpg";
import imgUrl11 from "./assets/user.jpg";

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
              <div className="greeting-div">
                <p className="greeting-paragraph">
                  Hi Kenny,
                </p>
                <div className="userimg-div">
                <img className="user-img" src={imgUrl11}alt="Trulli"/>
                </div>
               
               <div className="cardcontent-div">
                <CardContent className="card-content2">
                  <div className="balance-div">
                    <p className="balance-paragraph">Total Balance</p>
                    <p>£1m</p>
                  </div>

                </CardContent>
               </div>
              </div>
              <div className="images-div">
                    <img className="atm-img" src={imgUrl2}alt="Trulli"/>
                    <p>cards</p>
                    <img className="spend-img" src={imgUrl3}alt="Trulli"/>
                    <p>Spend</p>
                    <img className="help-img" src={imgUrl4}alt="Trulli"/>
                    <p>Help</p>
                    <img className="airtime-img" src={imgUrl5}alt="Trulli"/>
                    <p>Airtime</p>
                    <img className="save-img" src={imgUrl6}alt="Trulli"/>
                    <p>Save</p>

              </div>

              <div className="transaction-div">
                <p className="transaction-p">Recent Transactions</p>
              </div>

              <div className="cardcontent2-div">
                <CardContent className="card-content2">
                  <div>
                    <p>Water Payment</p>
                    <p>10:00am</p>
              
                    <img className="ellipse-img" src={imgUrl7}alt="Trulli"/>
                  
                    
                  </div>

                </CardContent>
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

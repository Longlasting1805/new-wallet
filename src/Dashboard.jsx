import React, { useState } from "react";
import imgUrl from "./assets/vector1.jpg";
import imgUrl2 from "./assets/group1.jpg";
import imgUrl3 from "./assets/atmCard.jpg";
import imgUrl4 from "./assets/handMoney.jpg";
import imgUrl5 from "./assets/help.jpg";
import imgUrl6 from "./assets/airtime.jpg";
import imgUrl7 from "./assets/save.jpg";
import imgUrl8 from "./assets/ellipse19.jpg";
import imgUrl9 from "./assets/ellipse20.jpg";
import imgUrl10 from "./assets/ellipse21.jpg";
import imgUrl11 from "./assets/ellipse22.jpg";
import imgUrl12 from "./assets/user.jpg";
import imgUrl13 from "./assets/bell.jpg";
import imgUrl14 from "./assets/eye.jpg";
import imgUrl15 from "./assets/WebdashboardPage.jpg"

// import { Checkbox } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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
           <div className="card-div"> 
            <div className="card-background">
              <div className="top-card">
                <p className="name">Hi, Chibuzor</p>
                <img src={imgUrl12} />
              </div>
              <div className="balance">
                <div className="total-balance">
                <p className="total">Total balance</p>
                <img src={imgUrl13} />
                </div>
                <div className="money-div">
                  <div className="total-balance">
                  <p className="money"><span>&#8358;</span>10,000</p>
                  <img src={imgUrl14} />
                  </div>
                </div>
              </div>
              <div className="card-container">
                <div className="cards">
                  <div>
                    <img src={imgUrl3} />
                    <p className="card-text">Cards</p>
                  </div>
                  <div>
                    <img src={imgUrl3} />
                    <p className="card-text">Cards</p>
                  </div>
                  <div>
                    <img src={imgUrl3} />
                    <p className="card-text">Cards</p>
                  </div>
                  <div>
                    <img src={imgUrl3} />
                    <p className="card-text">Cards</p>
                  </div>
                  <div>
                    <img src={imgUrl3} />
                    <p className="card-text">Cards</p>
                  </div>
                </div>
                <div>
                  <img src={imgUrl} />
                </div>
              </div>
              <div>
                <p className="trans">Recent transaction</p>
                <div>
                  <div className="recent-trans">
                    <div>
                      <p className="date">3-28-2022</p>
                      <img src={imgUrl8} />
                    </div>
                    <div className="water-time">
                      <p className="water">Water Payment</p>
                      <p className="time">10:00 am</p>
                    </div>
                    <div className="cash">
                      <p>-N1,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>



           {/* <div className="backgroung-img-div">
             <img className="background-img" src={imgUrl2} alt="" />
           </div>
      
            <div className="greeting-card">
              <div className="greeting-div">
                <p className="greeting-paragraph">Hi Kenny,</p>
                <div className="userimg-div">
                  <img className="user-img" src={imgUrl12} alt="Trulli" />
                </div>

                <div className="amountcard-div">
                  <div className="amount-card">
                    <div className="amount-div">
                      <p className="amount-paragraph">Total Balance</p>
                      <p>£1m</p>
                      <img className="bell-img" src={imgUrl13} alt="Trulli" />
                      <img className="eye-img" src={imgUrl14} alt="Trulli" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="images-div">
                <img className="atm-img" src={imgUrl3} alt="Trulli" />
                <p className="atm-card">cards</p>
                <img className="spend-img" src={imgUrl4} alt="Trulli" />
                <p>Spend</p>
                <img className="help-img" src={imgUrl5} alt="Trulli" />
                <p>Help</p>
                <img className="airtime-img" src={imgUrl6} alt="Trulli" />
                <p>Airtime</p>
                <img className="save-img" src={imgUrl7} alt="Trulli" />
                <p>Save</p>
              </div>

              <div className="transaction-div">
                <p className="transaction-p">Recent Transactions</p>
              </div>

              <div className="waterpayment-div">
                <div className="waterpayment-card">
                  <div className="waterpaymentsecond-div">
                    <p>Water Payment</p>
                    <p>10:00am</p>
                    <p>-$1,000</p>

                    <img className="ellipse-img" src={imgUrl8} alt="Trulli" />
                  </div>
                </div>

                <div className="airtimecard-div">
                  <div className="airtime-card">
                    <div className="airtime-div">
                      <img className="ellipse-img" src={imgUrl9} alt="Trulli" />
                      <p className="airtime-p">Airtime</p>
                      <p>10:00am</p>
                      <p>-$200</p>
                    </div>
                  </div>
                </div>

                <div className="pocketmoni-div">
                  <div className="pocketmoni-card">
                    <div className="pocket-div">
                      <p>Pocket Moni</p>
                      <p>10:00am</p>
                      <p>$5,000</p>

                      <img className="ellipse-img" src={imgUrl10} alt="Trulli" />
                    </div>
                  </div>
                </div>

                <div className="upkeep-div">
                  <div className="upkeep-card">
                    <p>Up-keep</p>
                    <p>10:00am</p>
                    <p>$5,000</p>

                    <img className="ellipse-img" src={imgUrl11} alt="Trulli" />
                  </div>
                </div>
              </div>
            </div> */}
            </div>
            
         
  );
};

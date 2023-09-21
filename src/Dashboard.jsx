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
import imgUrl16 from  "./assets/arrow.jpg"

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
                    <img src={imgUrl4} />
                    <p className="card-text">Spend</p>
                  </div>
                  <div>
                    <img src={imgUrl5} />
                    <p className="card-text">Help</p>
                  </div>
                  <div>
                    <img src={imgUrl6} />
                    <p className="card-text">Airtime</p>
                  </div>
                  <div>
                    <img src={imgUrl7} />
                    <p className="card-text">Save</p>
                  </div>
                </div>
                <div>
                  <img className="arrow" src={imgUrl16} />
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
              <div>
                  <div className="recent-trans">
                    <div>
                      <p className="date">3-28-2022</p>
                      <img src={imgUrl9} />
                    </div>
                    <div className="water-time">
                      <p className="water">Airtime</p>
                      <p className="time">10:00 am</p>
                    </div>
                    <div className="cash">
                      <p>-N200</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="recent-trans">
                    <div>
                      <p className="date">3-28-2022</p>
                      <img src={imgUrl10} />
                    </div>
                    <div className="water-time">
                      <p className="water">Pocket Moni</p>
                      <p className="time">10:00 am</p>
                    </div>
                    <div className="cash">
                      <p className="moni">N5,000</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="recent-trans">
                    <div>
                      <p className="date">3-28-2022</p>
                      <img src={imgUrl11} />
                    </div>
                    <div className="water-time">
                      <p className="water">Up-keep</p>
                      <p className="time">10:00 am</p>
                    </div>
                    <div className="cash">
                      <p className="up-keep">N5,000</p>
                    </div>
                  </div>
                </div>
              
            </div>
            </div>
            
         
  );
};

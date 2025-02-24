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
import imgUrl16 from "./assets/arrow.jpg";
import imgUrl17 from "./assets/deleteicon.jpg";
import imgUrl18 from "./assets/addicon.jpg";
import imgUrl19 from "./assets/dropdownicon.jpg";
import imgUrl20 from "./assets/chatWithUs.png";
import imgUrl21 from "./assets/email.jpg";
import imgUrl22 from "./assets/phonecall.jpg";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


import { useNavigate } from "react-router-dom";
import { Tab } from "./components/Tab";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const style = {
  py: 0,
  width: '100%',
  maxWidth: 360,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};

export const Dashboard = (props) => {
  const [amount, setAmount] = useState("");
  const [visible, setVisible] = useState(false);
  const isamount = "10,000";

  const toggleEyeVisibility = () => {
    setVisible(!visible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();
  const displayValue = amount ? isamount : "*".repeat(amount.length);

  const [tab, setTab] = useState("");

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };
  const tabs = [
    {
      name: "cards",
      image: imgUrl3,
    },
    {
      name: "Spend",
      image: imgUrl4,
    },

    {
      name: "Help",
      image: imgUrl5,
    },

    {
      name: "Airtime",
      image: imgUrl6,
    },

    {
      name: "Save",
      image: imgUrl7,
    },

    {
      name: "",
      image: imgUrl16,
    },
  ];

  return (
    <div className="card-div">
      <div className="card-background">
        <div className="top-card">
          <p className="name">Hi, Ken</p>
          <img className="dashboard-avatar" src={imgUrl12} />
        </div>
        <div className="balance">
          <div className="total-balance">
            <p className="total">Total balance</p>
            <img src={imgUrl13} />
          </div>
          <div className="money-div">
            <div className="total-balance">
              <p className="money">
                {" "}
                <span>${}</span>
                {visible ? "31,000,000" : "*****"}
              </p>
              <img
                type={visible ? "text" : "password"}
                onClick={toggleEyeVisibility}
                src={imgUrl14}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="cards">
            {tabs.map((tab, index) => (
              <Tab key={index} tab={tab} handleTabChange={handleTabChange} />
            ))}
          </div>  
        </div>
        <div className="tab-container">
            {tab === "cards" && (
              <div className="cards-view">
                <div className="view-text">
                   <Accordion className="card-accordion">
                   <AccordionSummary>
                      View existing card
                   </AccordionSummary>
                   <AccordionDetails>
                   <List sx={style}>
                      <ListItem>
                        <ListItemText primary="Card Name: " />
                      </ListItem>
                      <Divider component="li" />
                      <ListItem>
                        <ListItemText primary="Card Number: " />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem>
                        <ListItemText primary="Expiry Date: " />
                      </ListItem>
                      <Divider variant="middle" component="li" />
                      <ListItem>
                        <ListItemText primary="CVV: " />
                      </ListItem>
                    </List>
                   </AccordionDetails>
                  
                  </Accordion>
                </div>
            <div className="view-text">

              <Accordion className="card-accordion">
                   <AccordionSummary>
                      Edit card information
                   </AccordionSummary>
                   <AccordionDetails>
                   <List sx={style}>
                      <ListItem>
                        <ListItemText primary="Card Name: " />
                      </ListItem>
                      <Divider component="li" />
                      <ListItem>
                        <ListItemText primary="Card Number: " />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem>
                        <ListItemText primary="Expiry Date: " />
                      </ListItem>
                      <Divider variant="middle" component="li" />
                      <ListItem>
                        <ListItemText primary="CVV: " />
                      </ListItem>
                    </List>
                   </AccordionDetails>
                  </Accordion>  
              </div>
              <div className="view-text">
              <Accordion className="card-accordion">
                   <AccordionSummary>
                      Add new card
                    <img src={imgUrl18} alt=""  className="pluss-add"/>
                   </AccordionSummary>
                   <AccordionDetails>
                   <List sx={style}>
                      <ListItem>
                        <ListItemText primary="Card Name: " />
                      </ListItem>
                      <Divider component="li" />
                      <ListItem>
                        <ListItemText primary="Card Number: " />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem>
                        <ListItemText primary="Exp. Date: " />
                      </ListItem>
                      <Divider variant="middle" component="li" />
                      <ListItem>
                        <ListItemText primary="CVV: " />
                      </ListItem>
                    </List>
                   </AccordionDetails>
                  
                  
                  </Accordion>  
                
                  
                </div>
                  <div className="viewdelete-text">
                  <p>Delete card</p>
                  <img src={imgUrl17} alt="" />
                  </div>
                  <a href="" className="back-link" >back</a>

              </div>
            )}
             {tab === "Spend" && (
              <div className="spend-views">
                 <div className="view-text">
                  <p>Choose Account</p>
                  <img className="dropdownimg" src={imgUrl19} alt="" />
                  </div>
                <div className="view-text">Enter Amount:</div>
                <div className="view-text">
                  <p>Enter Account Number:</p>
                  {/* <img src={imgUrl18} alt="" /> */}
                  </div>
                  <div className="spend-description">Enter Description:
                  {/* <p className="spend-description">Enter Description</p> */}
                  </div>
                  <a href="" className="nextspend-link" >next</a>
              </div>
            )}

             {tab === "Help" && (
              <div className="help-views">
                <div className="view-text">
                 <img className="callus" src={imgUrl22} alt="" />
                  <p className="call-p">Call Us</p>
                  <img className="dropdownimg" src={imgUrl19} alt="" />
                  </div>
                  <div className="view-text">
                <img className="emailus" src={imgUrl21} alt="" />
                  <p className="email-p">Send us an Email</p>
                  <img className="dropdownimg" src={imgUrl19} alt="" />
                  </div>
                  <div className="view-text">
                <img className="chatus" src={imgUrl20} alt="" />
                  <p className="chat-p">Chat with us</p>
                  <img className="dropdownimg" src={imgUrl19} alt="" />
                  </div>
              </div>
            )}

             {tab === "Airtime" && (
              <div className="airtime-views">
                 <div className="view-text">
                  <p className="network-p">Select Network</p>
                  <img className="dropdownimg" src={imgUrl19} alt="" />
                  </div>
                  <div className="view-text">
                     <p className="amount-p">Enter Phone Number</p>
                  </div>
                <div className="view-text">
                  <p className="amount-p">Enter Amount</p>
                  {/* <img src={imgUrl18} alt="" /> */}
                  </div>
                  <a href="" className="nextspend-link" >next</a>
              </div>
            )}

             {tab === "Save" && (
              <div className="save-views">
                 <div className="view-text">
                  <p className="network-p">Choose Saving plan</p>
                  <img className="dropdownimg" src={imgUrl19} alt="" />
                  </div>
                  <div className="view-text">
                  <p className="network-p">Withdraw Savings</p>
                  <img className="dropdownimg" src={imgUrl19} alt="" />
                  </div>
                  <div className="view-text">
                  <p className="network-p">View Savings</p>
                  <img className="dropdownimg" src={imgUrl19} alt="" />
                  </div>
                  <a href="" className="nextspend-link" >next</a>
              </div>
            )}

             {tab === "" && ( 
              <div className="arrow-views"> 
                <div>
                  <p className="trans">Recent transaction</p>
                <div > 
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
                      <p>-$12,000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                  <div className="recent-trans">
                    <div>
                      <p className="date">3-28-2022</p>
                      <img className="ellipse20" src={imgUrl9} />
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
                      <img className="ellipse22" src={imgUrl11} />
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
            )}
            
          </div>
      </div>
    </div>
  );
};

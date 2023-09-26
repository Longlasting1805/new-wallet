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
import { useNavigate } from "react-router-dom";
import { Tab } from "./components/Tab";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Dashboard = (props) => {
  const [amount, setAmount] = useState("");
  const [visible, setVisible] = useState(false);
  const isamount = "10,000";
  const [currentPage, setCurrentPage] = useState(1);
  const [totalpages, setTotalPages] = useState(6);
  //   const [pass, setPass] = useState("");

  const toggleEyeVisibility = () => {
    setVisible(!visible);
  };

  const totalNumberOfPages = () => {
    setTotalPages(totalpages);
  };

  const handleImageClick = () => {
    setCurrentPage((prevPage) => {
      if (prevPage >= totalNumberOfPages) {
        // Set this value to the total number of pages/views
        return 1; // Go back to the first page
      }
      return prevPage + 1;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email);
  };

  const navigate = useNavigate();
  const displayValue = amount ? isamount : "*".repeat(amount.length);

  const [tab, setTab] = useState("cards");

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
          <img src={imgUrl12} />
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
                <span>&#8358;</span>
                {visible ? "10,000" : "*****"}
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
                  <p>View Existing Cards</p>
                  </div>
                <div className="view-text">Edit card information</div>
                <div className="view-text">
                  <p>Add new card</p>
                  <img src={imgUrl18} alt="" />
                  </div>
                  <div className="viewdelete-text">
                  <p>Delete card</p>
                  <img src={imgUrl17} alt="" />
                  </div>
                  <a href="" className="back-link" >back</a>

              </div>
            )}
             {tab === "Spend" && (
              <div>
                 <div className="view-text">
                  <p>Choose Account</p>
                  </div>
                <div className="view-text">Enter Amount:</div>
                <div className="view-text">
                  <p>Enter Account Number:</p>
                  <img src={imgUrl18} alt="" />
                  </div>
                  <div className="viewdelete-text">
                  <p>Enter Description</p>
                  <img src={imgUrl17} alt="" />
                  </div>
                  <a href="" className="back-link" >back</a>
              </div>
            )}

             {tab === "Help" && (
              <div>
                <p className="help-text">Help comp</p>
              </div>
            )}

             {tab === "Airtime" && (
              <div>
                <p className="airtime-text">Airtime comp</p>
              </div>
            )}

             {tab === "Save" && (
              <div>
                <p className="save-text">Save comp</p>
              </div>
            )}

             {tab === "Arrow" && (
              <div>
                <p className="arrow-text">Arrow comp</p>
              </div>
            )}
            
          </div>

        {/* <div>
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
                </div> */}
      </div>
    </div>
  );
};

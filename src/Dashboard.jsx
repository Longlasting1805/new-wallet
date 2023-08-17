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
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  be{card}nev{card}o{card}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
        </Card>
      
  
        </div>
                </div>
       
  </div>
  );
};

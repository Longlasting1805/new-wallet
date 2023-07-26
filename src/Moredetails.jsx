import React, { useState } from "react";
import imgUrl from './assets/com.jpg'

export const Moredetails = (props) => {

    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [relationship, setRelationship] = useState('');
    const [bvn, setBvn] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
       
    }

      return(
        <div className="root">
            <div className="image">
            <img src={imgUrl}alt="Italian Trulli"/>
            </div>
            <div className="details">
                <input className="fullname" value={fullname}  onChange={(e) => setFullName(e.target.value)} placeholder="full name"/>
                <input className="email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
                <input className="phonenumber" value={phonenumber}  onChange={(e) => setPhonenumber(e.target.value)} placeholder="phone number"/>
                <input className="relationship" value={relationship}  onChange={(e) => setRelationship(e.target.value)} placeholder="relationship"/>
            </div>
        </div>
      )

}
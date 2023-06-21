import React, {useState} from "react";
import imgUrl from './assets/ygt.JPG'

export const Forgot = (props) => {
    const [email, setEmail] = useState('');

   

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
}

return(
    <div style={{ display: 'flex', width: '100%', height: '670px'}}>
        <div className="img">
        <img src={imgUrl}alt="Italian Trulli"/>
        </div>
         <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10rem', marginTop: '15rem'}}>
        
        <label htmlFor="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="ken@gmail.com" id="email" name="email"/>
        <button>Next</button>
        </div> 
    </div>
)

}

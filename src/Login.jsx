import React, {useState} from "react";
import imgUrl from './assets/ygt.JPG'

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }



    return (
        <div className="auth-form-container">
            <div className="img"><img src={imgUrl}alt="Italian Trulli"/></div>
            
            <div className="form">
            <h2>Welcome Back!</h2>
            <p>Login in to your Dashboad</p>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="ken@gmail.com" id="email" name="email"/>
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
                <button>Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}> Don't have an account? Register.</button>
            </div>
           
        </div>
    )
}
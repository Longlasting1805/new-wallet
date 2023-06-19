import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
         <div className="auth-form-container">
            
            <h2>Welcome!</h2>
            <p>Sign up by entering the information below</p>
            <form  className="register-form"  onSubmit={handleSubmit}>
                <label htmlFor="name">First name</label>
                <input value={name} name="name" id="name" placeholder="First name"/>
                <label htmlFor="name">Last name</label>
                <input value={name} name="name" id="name" placeholder="Last name"/>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="ken@gmail.com" id="email" name="email"/>
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
                <button>Sign Up</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}> Already have an account? Login.</button>
        </div>
    )
}
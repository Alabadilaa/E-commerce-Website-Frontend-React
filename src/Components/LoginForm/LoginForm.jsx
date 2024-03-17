import React from 'react'
import './LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div>
        <form className='wrapper'>
            <h1>Log In</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' />
                <FaLock className='icon'/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot Password</a>
            </div>

            <button type='submit'>Log in</button>

            <div className="register-link">
                <p>Don't have an account <a href="#">Register</a></p>
            </div>
        </form>
    </div>
  )
}

export default LoginForm;
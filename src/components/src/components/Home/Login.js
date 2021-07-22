import './Login.css';
import React ,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Login = (props)=>{

    const [userName, setUserName] = useState('');
    const  [password, setPassword] = useState('');

    const HandleOnSubmit = (event)=>{
        event.preventDefault();
        const loginCredentials = {
            userName :userName,
            password :password
        }
        props.handleLogin(loginCredentials);
    }

    const userNameHandler = (event) => {
        setUserName (event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword (event.target.value);
    }

    return <div className="login">
        <form  onSubmit={HandleOnSubmit}>
            <div className= "login_controls">
                <div className = "login_control">
                    <label> Username </label>                    
                    <input type="text" value ={userName} onChange= {userNameHandler} required></input>
                </div>             
                <div className = "login_control">
                     <label> password</label>
                     <input type="password" value ={password} onChange= {passwordHandler}  required></input>
                </div> 
            </div>
            <div className="login_actions">
                <button className = 'login_button' type="submit">Login</button>
                <button className = 'login_button' type="button" onClick = {props.handleForgetPassword}>Forget Password</button>
            </div>
        </form>
    </div>
    
}

export default Login;
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Context/useAuth';
import { useHistory, useLocation } from 'react-router';
import './Login.css';

const Login = () => {
    const location = useLocation()
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const {handleGoogleLogin, setIsLogin} = useAuth();
    // if(isLogin) {
    //     return 0;
    // }
    const handleSignInGooogle = () =>{
        handleGoogleLogin()
        .then(res =>{
            
                history.push(redirect_url);
            // isLogin(false);
        })
        .finally(() =>setIsLogin(false));
        
    }
    return (
        <div className="login-container">
           
            <div className="login-page">
                <h1>Sign up</h1>
                <button className="signUp" onClick={handleSignInGooogle}>Sign Up with Google</button>
                <p>........................or...................</p>
                <h1>Login</h1>
                <button className="login" onClick={handleSignInGooogle}>Login with Google</button>
            </div>
        </div>
    );
};

export default Login;
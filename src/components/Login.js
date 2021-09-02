import React from 'react';
import { GoogleOutlined } from '@ant-design/icons';
import "firebase/app";

import { auth } from '../firebase';
import firebase from 'firebase/app';

const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>raspberrychat</h2>
                <div
                    className="login-button google"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined/> Sign in with Google
                </div>   
                <br/>
                <div className="description"> 
                Hello there! 
                <br/> 
                Raspberrychat© is a web-app created for the purpose of chatting by Sans Bhatia.
                <br/><br/> It is currently only available to use with your Google mail account
                <br/> <br/>
                You don't need to 'Sign up'. You can just login directly.
                </div>   
            </div>
        </div>

    );

}

export default Login;
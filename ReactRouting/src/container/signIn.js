import React from 'react';

import SignUp from "./signUp";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
export default function SignIn()
{
		return (
            <>

            <div className="box"><h1>SignIn</h1><br/>
            <h3>Username</h3>
            <input className="in" placeholder="Enter Username"/>
            <h3>Password</h3>
            <input className="in" placeholder="Enter Password"/><br/><br/>
            <button className="btn1">SignIn</button>
            <Link to="/signUp"><p>sign Up</p></Link>
            
             <Switch>
                <Route path="/signUp" component={SignUp}/>
            </Switch>
            
            </div>
            </>
		)
}
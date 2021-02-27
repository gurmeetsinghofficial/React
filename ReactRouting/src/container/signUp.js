import React from 'react';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";

import SignIn from "./signIn";
export default function SignUp()
{
		return (
            <>
                <div className="box"><h1>SignUp</h1><br/>
            <h3>Username</h3><div></div>
            <input type="email" className="in" placeholder="Enter Username"/>
            <h3>Email</h3>
            <input className="in" placeholder="Enter your email"/>
            <h3>Password</h3>
            <input className="in" placeholder="Enter Password"/><br/><br/>

            <button className="btn1">SignUp</button>
            <Link to="/signIn"><p>sign In</p></Link>
            
             <Switch>
                <Route path="/signIn" component={SignIn}/>
            </Switch>
            </div>
            </>
		)
}
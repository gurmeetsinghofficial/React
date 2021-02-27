import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import SignUp from "./container/signUp";
import SignIn from "./container/signIn";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
class Cq extends React.Component {
	render() {
		return (
            <>
            <Link to="/signUp"><p>sign Up</p></Link>
            <Link to="/signIn"><p>sign In</p></Link>
            <Switch>
                <Route path="/signUp" component={SignUp}/>
                <Route path="/signIn" component={SignIn}/>
            </Switch>
            </>
		)
	}
}

ReactDOM.render(
    <BrowserRouter>
	<Cq />
    </BrowserRouter>,
	document.getElementById('root')
);

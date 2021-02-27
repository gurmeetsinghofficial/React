import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
import './style.css';
class Cq extends React.Component {
	render() {
		return (
            <>
            <Header/>
			<p></p>
            </>
		)
	}
}

ReactDOM.render(
	<Cq />,
	document.getElementById('root')
);

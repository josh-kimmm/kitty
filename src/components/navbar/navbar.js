import React from 'react';
import './navbar.css';

const navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm">
        	<ul className="navbar-nav">
            	<li className="nav-item" id="Home">
              		<a className="nav-link" id="rek">Home</a>
            	</li>
	            <li className="nav-item">
	              	<a className="nav-link">Games</a>
	            </li>
	            <li className="nav-item">
	              	<a className="nav-link">Apps</a>
	            </li>
	            <li className="nav-item">
	              	<a className="nav-link">About</a>
	            </li>
	            <li className="nav-item">
	              	<a className="nav-link">Resume</a>
	            </li>
	            <li className="nav-item">
	              	<a className="nav-link">Contact</a>
	            </li>
          	</ul>
        </nav>
	);
};

export default navbar;
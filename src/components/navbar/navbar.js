import React from 'react';
import './navbar.css';

const navbar = () => {
	return (
		<nav class="navbar navbar-expand-sm bg-light">
        	<ul class="navbar-nav">
            	<li class="nav-item">
              		<a class="nav-link">Home</a>
            	</li>
	            <li class="nav-item">
	              	<a class="nav-link">Games</a>
	            </li>
	            <li class="nav-item">
	              	<a class="nav-link">Apps</a>
	            </li>
	            <li class="nav-item">
	              	<a class="nav-link">About</a>
	            </li>
	            <li class="nav-item">
	              	<a class="nav-link">Resume</a>
	            </li>
	            <li class="nav-item">
	              	<a class="nav-link">Contact</a>
	            </li>
          	</ul>
        </nav>
	);
};

export default navbar;
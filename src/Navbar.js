import React, { useState, useEffect } from 'react';
import Netflix from './img/Netflix_Logo_RGB.png';
import avatar from './img/avatar.png';
import './Navbar.css';

const Navbar = () => {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 200) {
				handleShow(true);
			} else {
				handleShow(false);
			}
		});
		return () => {
			window.removeEventListener('scroll');
		};
	}, []);
	return (
		<div className={`nav ${show && 'nav__dark'}`}>
			<img className="nav__logo" src={Netflix} alt="Netflix" />
			<img className="nav__avatar" src={avatar} alt="avatar" />
		</div>
	);
};

export default Navbar;

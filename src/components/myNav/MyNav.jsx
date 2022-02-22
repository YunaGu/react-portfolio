import "./myNav.css"
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
// import { HashLink as Link } from 'react-router-hash-link';
import Logo from '../../img/Logo.png';

const MyNav = () => {
    const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	// const closeMenu = () => {
	// 	setOpen(false);
	// };
  return (
    <div className={open?"n active":"n"}>
        <div className={open?"n-left active":"n-left"}>
            <a href="/" className="n-logo"><img src={Logo} alt="logo" /></a>
        </div>
        <div className={open?"n-right active":"n-right"}>
            <div onClick={handleClick} className="n-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
            <ul className={open ? "n-right-items active":"n-right-items"}>
                <li className="n-right-item">
                    <a href="#home" className="n-link">Home</a>
                </li>
                <li className="n-right-item">
                    <a href="#about" className="n-link">About</a>
                </li>
                <li className="n-right-item">
                    <a href="#contact" className="n-link">Contact</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default MyNav
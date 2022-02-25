import "./myNav.css"
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../../img/Logo.png';

const MyNav = () => {
    const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

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
                    <a href="#home" className="normal-link" onClick={closeMenu}>
                        <p>Home</p>
                    </a>
                </li>
                <li className="n-right-item">
                    <a href="#about" className="normal-link" onClick={closeMenu}>About</a>
                </li>
                <li className="n-right-item">
                    <a href="#work" className="normal-link" onClick={closeMenu}>Works</a>
                </li>
                <li className="n-right-item">
                    <a href="#contact" className="normal-link" onClick={closeMenu}>Contact</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default MyNav
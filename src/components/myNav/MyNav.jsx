import "./myNav.css"
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
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
    <div onClick={handleClick} className={open?"n-active":"n"}>
        <div className={open?"n-left active":"n-left"}>
            <Link to="/" className="n-logo"/><img src={Logo} alt="" />
        </div>
        <div className="n-right">
            <div onClick={handleClick} className="n-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
            <ul className={open ? "n-right-items active":"n-right-items"}>
                <li className="n-right-item">
                    <Link to="/" className="n-link" onClick={closeMenu}/>Home
                </li>
                <li className="n-right-item">
                    <Link to="/about" className="n-link" onClick={closeMenu}/>About
                </li>
                <li className="n-right-item">
                    <Link to="/contact" className="n-link" onClick={closeMenu}/>Contact
                </li>
            </ul>
        </div>
    </div>
  )
}

export default MyNav
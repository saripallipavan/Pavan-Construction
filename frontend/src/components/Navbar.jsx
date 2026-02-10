
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaMapMarkerAlt, FaUser, FaCity, FaCaretDown } from 'react-icons/fa';
import './Navbar.css';
import './NavbarLogoUpdates.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [city, setCity] = useState('Hyderabad');
    const [scrolled, setScrolled] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        setDropdown(false);
    };

    // Add scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={() => setClick(false)}>
                    <FaCity color="#FF5100" size={35} />
                    <div className="logo-text-container">
                        <span className="logo-top">PAVAN</span>
                        <span className="logo-bottom">CONSTRUCTION</span>
                    </div>
                </Link>

                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item location-selector">
                        <FaMapMarkerAlt className="location-icon" />
                        <select value={city} onChange={(e) => setCity(e.target.value)} className="city-select">
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Vizag">Vizag</option>
                        </select>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'nav-links active-link' : 'nav-links'} onClick={closeMobileMenu}>HOME</NavLink>
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <NavLink to='/services' className={({ isActive }) => isActive ? 'nav-links active-link' : 'nav-links'} onClick={closeMobileMenu}>
                            SERVICES <FaCaretDown className='fa-caret-down' />
                        </NavLink>
                        {dropdown && (
                            <ul className="dropdown-menu">
                                <li><Link to="/services#residential" className="dropdown-link" onClick={closeMobileMenu}>Residential Construction</Link></li>
                                <li><Link to="/services#commercial" className="dropdown-link" onClick={closeMobileMenu}>Commercial Construction</Link></li>
                                <li><Link to="/services#project-management" className="dropdown-link" onClick={closeMobileMenu}>Project Management</Link></li>
                                <li><Link to="/services#architecture" className="dropdown-link" onClick={closeMobileMenu}>Architecture & Structure</Link></li>
                                <li><Link to="/services#interiors" className="dropdown-link" onClick={closeMobileMenu}>Interiors & Smart Home</Link></li>
                            </ul>
                        )}
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/projects' className={({ isActive }) => isActive ? 'nav-links active-link' : 'nav-links'} onClick={closeMobileMenu}>PORTFOLIO</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'nav-links active-link' : 'nav-links'} onClick={closeMobileMenu}>ABOUT US</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/contact' className={({ isActive }) => isActive ? 'nav-links active-link' : 'nav-links'} onClick={closeMobileMenu}>CONTACT US</NavLink>
                    </li>
                    <li className='nav-item user-icon-item'>
                        <Link to='/admin' className='nav-links user-link' onClick={closeMobileMenu}>
                            <FaUser />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

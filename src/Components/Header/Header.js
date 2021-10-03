import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/service'>Services</NavLink>
                <NavLink to='/other'>Others</NavLink>
            </nav>
        </div>
    );
};

export default Header;
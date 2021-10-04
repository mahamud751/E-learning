import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import img from '../../logo.png'

const Header = () => {
    <NavLink style={{
        padding: "10px"
    }}></NavLink>
    return (
        <div className='header'>
            <nav>
                <img src={img} alt="" />
                <NavLink to='/home' className="navLink" activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}>Home</NavLink>
                <NavLink to='/about' className="navLink" activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
                >About</NavLink>
                <NavLink to='/courses' className="navLink" activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}>Courses</NavLink>
                <NavLink to='/features' className="navLink" activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}>Features</NavLink>
            </nav>
        </div>
    );
};

export default Header;
import React from "react";
import {Button} from 'antd';
import './Header.css';
import {NavLink} from "react-router-dom";
import logo from './logo.jpg';


const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo}/>
            <NavLink to='/'>
                <Button type='primary' className="btn">Login</Button>
            </NavLink>
            <NavLink to='/sign-up'>
                <Button type='primary' className="btn">Sign Up</Button>
            </NavLink>
        </div>
    );
};

export default Header;
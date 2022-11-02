import React from "react";
import {Button} from 'antd';
import './Header.css';
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className='header'>
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
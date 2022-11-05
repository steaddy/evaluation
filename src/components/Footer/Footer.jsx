import React from 'react';
import './Footer.css';
import analit from './../../img/analit.png';
import depart from './../../img/depart.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer_main-container">
                <div className="footer_logo-container">
                    <img src={analit}/>
                </div>
                <div className="footer_logo-container">
                    <img src={depart}/>
                    <p>Департамент экономической
                        политики и развития</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
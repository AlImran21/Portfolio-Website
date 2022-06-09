import React from 'react';
import './Header.css';
import CTA from '../CTA/CTA';
import ME from '../../assets/man.png';
import HeaderSocial from '../HeaderSocial/HeaderSocial';

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Al-Imran</h1>
                <h5 className='text-light'>
                    Web Developer
                </h5>
                <CTA />
                <HeaderSocial />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;
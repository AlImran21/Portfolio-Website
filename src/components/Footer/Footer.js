import React from 'react';
import './Footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer_logo'>Al-Imran</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className='footer_socials'>
                <a href="https://facebook.com" target="_blank"><FaFacebookF /></a>
                <a href="https://instagram.com" target="_blank"><FiInstagram /></a>
                <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
            </div>

            <div className='footer_copyright'>
                <small>&copy; Al-Imran. All rights reserved</small>
            </div>
        </footer>
    );
};

export default Footer;
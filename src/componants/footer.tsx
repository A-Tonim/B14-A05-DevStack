import React from 'react';
import logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <div className="footer footer-center p-10  text-base-content rounded">
            <div>
                <img src={logo} alt="Logo" />
                <p className="text-gray-600">
                    Curated tools, technologies, and resources for developers building
                    modern software.
                </p>
                <ul className="grid grid-flow-col gap-4">
                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">LinkedIn</a></li>    
                </ul>
            </div>
            <div>
                <h1>PRODUCT</h1>
                <p>Home</p>
                <p>Technologies</p>
                <p>Projects</p>
            </div>
            <div>
                <h1>COMPANY</h1>
                <p>About us</p>
                <p>Contact</p>
                <p>Careers</p>
            </div>
            <div>
                <h1>LEGAL</h1>  
                <p>Privacy policy</p>
                <p>Terms of use</p>
            </div>  


        </div>
    );
};

export default Footer;
import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo-white.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-item">
                    {/* <img src={Logo} className="footer-logo" alt="footer logo" /> */}
                    <Link to='/'> <img src={Logo} className="footer-logo" alt="footer logo" /> </Link>
                </div>

                <div className="footer-item">
                    <div className="social-media">
                        <i className="social-icon fa-brands fa-facebook-square"/>
                        <i className="social-icon fa-brands fa-instagram-square"/>
                    </div>

                    <div className="footer-details">
                        <span className="footer-text"> Tuesday - Saturday <br/> 12pm - 8pm </span>
                    </div>
                </div>
                
                <div className="footer-item">
                    <div className="footer-details">
                        <span className="footer-text"> (123) 456-7890 </span>
                        <span className="footer-text"> info@tattoostudio.com </span>
                        <span className="footer-text"> 123 Tattoo Street, <br/> Toms River, NJ 08753 </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
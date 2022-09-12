import React, { useState } from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {

    const [toggleMobile, setToggleMobile] = useState(false)
    const [showArtistLinks, setShowArtistLinks] = useState(false)

    const handleIconClick = () => {
        setToggleMobile(!toggleMobile)
        setShowArtistLinks(false)
    }

    const hideMobileNav = () => {
        setToggleMobile(false)
        setShowArtistLinks(false)
    }

    const handleArtistLinkClick = () => {
        setShowArtistLinks(!showArtistLinks)
    }
    



    return (
        <div className="navbar">
            <div className="left-nav">
                <Link to='/' className="logo-text" onClick={hideMobileNav}> PİCASSO TATTOO STUDIO </Link>
            </div>
            
            <div className="center-nav">
                <ul className={toggleMobile ? "mobile-nav" : "nav"}>
                    <li> <NavLink to='/book-appointment' className={({ isActive }) => (isActive ? 'active-link' : 'link')} onClick={hideMobileNav}> Book Tattoo </NavLink> </li>
                    <li className="link" onClick={handleArtistLinkClick}> 
                        Artists <i className={showArtistLinks ? "caret-icon fa-solid fa-caret-up" : "caret-icon fa-solid fa-caret-down"}/>
                    </li>
                    
                    <ul className={showArtistLinks ? "artists-list" : "hide-artists-list"}>
                        <li> <NavLink to='/artists/Dan' className={({ isActive }) => (isActive ? 'active-link' : 'link')} onClick={hideMobileNav}> ARDA PEKCAN </NavLink> </li>
                    </ul>

                    <li> <NavLink to='/aftercare' className={({ isActive }) => (isActive ? 'active-link' : 'link')} onClick={hideMobileNav}> Aftercare </NavLink> </li>
                    <li> <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active-link' : 'link')} onClick={hideMobileNav}> Contact Us </NavLink> </li>
                </ul>
            </div>

            <div className="right-nav">
                <button className="mobile-icon-btn" onClick={handleIconClick}> 
                    <i className={ toggleMobile ? "mobile-close fa-solid fa-xmark" : "mobile-bars fa-solid fa-bars"}/> 
                </button>

                <div className="social-media">
                    <i className="social-nav fa-brands fa-facebook-square"/>
                    <i className="social-nav fa-brands fa-instagram-square"/>
                </div>                
            </div>
        </div>
    )
}

export default Navbar
import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import MobileLandingImg from '../../images/mobile-landing.jpg'
import Logo from '../../images/logo-white.png'
import Img1 from '../../images/home-img1.jpg'
import Img2 from '../../images/home-img2.jpg'
import Img3 from '../../images/home-img3.jpg'
import Tat1 from '../../images/tat1.jpeg'
import Tat2 from '../../images/tat2.jpeg'
import Tat3 from '../../images/tat3.jpeg'
import Tat4 from '../../images/tat4.jpeg'

const Home = () => {
        
    return (
        <div className="home">
            <div className="landing-container">
                <div className="landing-img-bg"> </div>

                <div className="landing-overlay">
                    <div className="landing-overlay-container">
                        <img src={Logo} className="logo" alt="logo" />

                        <div className="overlay-titles">
                            <h2 className="overlay-title-md"> Turn Great Designs Into </h2>
                            <h1 className="overlay-title-lg"> Great Tattoos </h1>
                        </div>
                            
                    </div>
                </div> 
            </div>

            <div className="covid">
                <p className="covid-msg">
                Due to Covid-19 resctrictions, our artists are currently appointment only until further notice.
                </p>
            </div>

            <div className="content">
                <div className="content-items">
                    <div className="container">
                        <img src={Img1} className="home-imgs" alt="img 1" />

                        <div className="overlay">
                            <div className="overlay-text-container">
                                <Link to='/book-appointmen' className="overlay-link"> Book Now </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-items">
                    <div className="container">
                        <img src={Img2} className="home-imgs" alt="img 2" />

                        <div className="overlay">
                            <div className="overlay-text-container">
                                <Link to='/aftercare' className="overlay-link"> Aftercare </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-items">
                    <div className="container">
                        <img src={Img3} className="home-imgs" alt="img 3" />

                        <div className="overlay">
                            <div className="overlay-text-container">
                                <Link to='/contact' className="overlay-link"> Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-title-container">
                <h1 className="section-title"> Walk-ins Welcomed! </h1>
            </div>

            <div className="tattoo-info">
                <p>
                    <strong>  Walk-ins </strong> are always welcomed, as long as we have time available. We are typically very busy so it is in your best interest to book an appointment to have your tattoo done. To book an appointment, feel free to stop in, call, or email us with all your ideas or questions. We will find a spot in the book that works best to give you the proper allotted time to take care of your custom needs. If necessary, we can book a free consultation to sit down and discuss your ideas before securing an appointment. All tattoo appointments require a $100 deposit which goes towards the total price once the tattoo is complete. 
                </p>
            </div>

            <div className="section-title-container">
                <h1 className="section-title"> Recent Work </h1>
            </div>

            <div className="recent-work">
                <div className="recent-item">
                    <img src={Tat1} className="recent-imgs" alt="tat 1" />
                </div>

                <div className="recent-item">
                    <img src={Tat2} className="recent-imgs" alt="tat 2" />
                </div>

                <div className="recent-item">
                    <img src={Tat3} className="recent-imgs" alt="tat 3" />
                </div>

                <div className="recent-item">
                    <img src={Tat4} className="recent-imgs" alt="tat 4" />
                </div>
                
            </div>
        </div>
    )
}

export default Home
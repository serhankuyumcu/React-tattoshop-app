import React from 'react'
import './artists.css'



const Artists = ({ artist, description, artistImg, img1, img2, img3, img4 }) => {
    return (
        <div className="artists">
             <div className="landing-container">
                <img src={artistImg} className="landing-img" alt="home Landing Img" />

                <div className="landing-overlay">
                    <div className="landing-overlay-container">
                        <h1 className="overlay-title-lg"> {artist} </h1>
                    </div>
                </div> 
            </div>

            <div className="artist-info">

                <p className="artist-desc">
                    <strong> { artist } </strong> { description }
                </p>

                <div className="portfolio-images">
                    <div className="portfolio-item">
                        <img src={img1} className="artists-img" alt="artists Img" />
                    </div>

                    <div className="portfolio-item">
                        <img src={img2} className="artists-img" alt="artists Img" />
                    </div>

                    <div className="portfolio-item">
                        <img src={img3} className="artists-img" alt="artists Img" />
                    </div>

                    <div className="portfolio-item">
                        <img src={img4} className="artists-img" alt="artists Img" />
                    </div>

                    <div className="portfolio-item">
                        <img src={img1} className="artists-img" alt="artists Img" />
                    </div>

                    <div className="portfolio-item">
                        <img src={img2} className="artists-img" alt="artists Img" />
                    </div>

                    <div className="portfolio-item">
                        <img src={img3} className="artists-img" alt="artists Img" />
                    </div>

                    <div className="portfolio-item">
                        <img src={img4} className="artists-img" alt="artists Img" />
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Artists
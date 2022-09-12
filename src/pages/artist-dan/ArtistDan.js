import React from 'react'
import Artists from '../../components/artists/Artists'
import DanImg from '../../images/tattoo-artist-1.jpg'
import Tat1 from '../../images/tat2.jpeg'
import Tat2 from '../../images/tat4.jpeg'
import Tat3 from '../../images/tat5.jpeg'
import Tat4 from '../../images/tat6.jpeg'

const ArtistDan = () => {

    const name = 'Arda Pekcan'
    const desc = "has been tattooing for 7 years, mostly specializing in black and gray, is not afraid to take on any style that is thrown at him. His love of art started at a young age, he has focused his life on his love of art whether it be tattooing, painting, creating music, or photography."

    return (
        <div className="dan">
            <Artists 
                artist={name} 
                description={desc}
                artistImg={DanImg}
                img1={Tat1} 
                img2={Tat2} 
                img3={Tat3} 
                img4={Tat4} 
            />
        </div>
    )
}

export default ArtistDan
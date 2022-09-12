import React from 'react'
import './aftercare.css'
import AftercareImg from '../../images/aftercare-img.jpg'

const Aftercare = () => {
    return (
        <div className="aftercare">
            <img src={AftercareImg} className="aftercare-landing" alt="Mobile Landing Img" />
            
            <div className="aftercare-overlay">
                <h1 className="page-title"> Aftercare </h1> 
            </div>

            <div className="aftercare-directions">
                <div className="direction-item">
                    <h1 className="direction-title"> Removing Bandage </h1>
                    <p className="direction-text">
                        After waiting at least one hour post tattoo, remove your bandage(s) and leave uncovered during the day. Your tattoo needs to breathe in order to heal properly, you can replace the bandage at night to avoid making a mess from the ointment if you would like but it is best to leave uncovered.
                    </p>
                </div>

                <div className="direction-item">
                    <h1 className="direction-title"> Washing Tattoo </h1>
                    <p className="direction-text">
                        Gently wash your tattoo with warm water and <strong> fragrence free </strong> soap at least 3 times per day. Please use your hands to wash your tattoo and rinse by pouring warm water from a cup or splash with hands, <strong> DO NOT </strong> place tatoo directly under faucet or shower head. <strong> DO NOT </strong> use a washcloth, loofah, or sponge as this can damage your fresh tattoo and cause discomfort. Use a <strong> clean </strong> towel and pat dry your tattoo, <strong> DO NOT </strong> rub your tattoo dry with a towel as this can also damage your fresh tattoo and cause discomfort.
                    </p>
                </div>

                <div className="direction-item">
                    <h1 className="direction-title"> Applying Ointment </h1>
                    <p className="direction-text">
                        For the first week, apply a thin layer of <strong> Aquaphor or A&D ointment </strong> over the tattoo several times a day. Make sure you properly wash and dry your tattoo each time before applying more ointment. After the first week and once it begins to scab, you can switch to applying <strong> fragrence free </strong> lotion multiple times a day. You can continue to apply ointment if you prefer, the choice is yours.
                    </p>
                </div>

                <div className="direction-item">
                    <h1 className="direction-title"> Itchy Tattoos </h1>
                    <p className="direction-text">
                        As your tattoo starts to scab it will become itchy, <strong> DO NOT </strong> scratch, rub, or pick at the scabs! Doing so can remove some of the pigment leading to your tattoo missing spots. You don’t want that to happen and neither do we!
                    </p>
                </div>

                <div className="direction-item">
                    <h1 className="direction-title"> Soaking Tattoos </h1>
                    <p className="direction-text">
                    <strong> DO NOT </strong> soak your tattoo for at least <strong> 4 to 7 weeks </strong>, wait until the tattoo is fully healed. This means no swimming, baths, saunas, excessive sweat, etc. until your tattoo is healed. Avoid fully submerging your tattoo until fully healed.
                    </p>
                </div>

                <div className="direction-item">
                    <h1 className="direction-title"> Sun Protection </h1>
                    <p className="direction-text">
                    <strong> DO NOT </strong> expose your tattoo to the sun for at least <strong> 4 to 7 weeks </strong>, wait until the tattoo is fully healed. Once your tattoo is fully healed make sure to apply <strong> sunblock SPF-30 or higher </strong> when your tattoo is exposed to the sun for prolonged periods of time.  This will help prevent your tattoo from fading.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Aftercare
import './IcyBlonde.css'

import Box from '../../images/icyBlonde/boxImg.png'
import Raywellimg from '../../images/icyBlonde/raywellLogo.png'




const IcyBlonde = () => {
    return (
        <div className='IcyBlonde-bg'>
            <h1 className='IcyBlondeTitle'>EXCELLENCE <br /> ICY BLONDE</h1>
            <img className='BoxImg-animation' src={Box} alt="Box" />
            <div className='raywellContainer'>
                <img src={Raywellimg} alt="Box" />
            </div>
        </div>
    )
}

export default IcyBlonde;
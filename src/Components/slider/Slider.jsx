import 'react-slideshow-image/dist/styles.css'
import React from 'react';
import { Zoom } from 'react-slideshow-image';
import envie from '../../images/envie.jpg'
import extremo from '../../images/extremo.jpg'
import invidia from '../../images/invidia.jpg'
import raywell from '../../images/raywell.jpg'


const images = [ envie, extremo, invidia, raywell];

console.log(images)

const Slider = () => {
return (
      <div className="slide-container">
        <Zoom scale={0.4}>
          {
            images.map((each, index) => <img alt='lol' key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom>
      </div>
    )
}

export default Slider
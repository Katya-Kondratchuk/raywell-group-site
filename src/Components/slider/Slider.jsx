import 'react-slideshow-image/dist/styles.css'
import './slider.css'
import React from 'react';
import { Fade } from 'react-slideshow-image';
import envie from '../../images/envie.jpg'
import extremo from '../../images/extremo.jpg'
import invidia from '../../images/invidia.jpg'
import raywell from '../../images/raywell.jpg'


const fadeImages = [
  {
  url: raywell,
  },
    {
  url: envie,
  },
      {
  url: extremo,
  },
        {
  url: invidia,
  },

];

const Slider = () => {
return (
      <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={fadeImage.url} />
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
      </div>
    )
}

export default Slider
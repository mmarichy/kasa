import React, { useState } from 'react'
import Arrow from '../../assets/arrow.svg'

function Carrousel({ Log }) {
  const [slider, updateSlider] = useState(0)
  const pictures = Log.pictures
  const prevNext = (slider, change) => {
    if (change === 'prev') {
      slider === 0
        ? updateSlider(pictures.length - 1)
        : updateSlider(slider - 1)
    } else {
      slider === pictures.length - 1
        ? updateSlider(0)
        : updateSlider(slider + 1)
    }
  }
  return (
    <div>
      <div className="carrouselBox">
        {pictures.length !== 1 ? (
          <div>
            <img
              src={Arrow}
              alt="Arrow"
              className="prev "
              onClick={() => prevNext(slider, 'prev')}
            ></img>
            <img
              src={Arrow}
              alt="Arrow"
              className="next"
              onClick={() => prevNext(slider, 'next')}
            ></img>
            <p className="compteur">
              {slider + 1}/{pictures.length}
            </p>
          </div>
        ) : (
          <div></div>
        )}
        <img
          src={pictures[slider]}
          alt="Photos appartements"
          className="slides"
        />
      </div>
    </div>
  )
}

export default Carrousel

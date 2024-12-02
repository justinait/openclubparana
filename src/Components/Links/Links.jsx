import React from 'react'
import './Links.css'
import star from '../../assets/icons/star.png'
import wsp from '../../assets/icons/wspblanco.png'

function Links() {
  return (
    <div className='linksContainer'>
        <div className='linkStar'>
            <img src={star} alt="Destacados" />
            <p>Accede a los beneficios exclusivos</p>
        </div>

        <div className='linkWsp'>
            <img src={wsp} alt="WhatsApp" />
        </div>
    </div>
  )
}

export default Links
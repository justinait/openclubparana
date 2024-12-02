import React from 'react'
import logo from '../../assets/logo.png'
import './Footer.css'

function Footer() {
  return (
    <div id='footerContainer'>
      <img loading='lazy' src={logo} alt="Open club complejo turístico" className='logoFooter' />
      
      <div className='infoFooterContainer'>

        <p>Bravard 276 <br />Paraná - Entre Ríos <br />Argentina</p>

        <div>
          <p>+54 9 343 512-1551</p>
          <p>openclub@costanera241.tur.ar</p>
        </div>

        <div>
          <p>Copyright © 2024 Open Club</p>
          <p>Powered by Boosting Marketing</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
import React from 'react'
import './Contact.css'
import GoogleMap from './GoogleMap'
import logo from '../../assets/logoblanco.png'

function Contact() {
  return (
    <div>
      <div className='contactContainer'>
        <img loading='lazy' src={logo} alt="Open Club - Complejo turístico" className='logoHero' />
      </div>
      <div className='boxCookies eventsBoxCookiesSeparator'>
        <p>
          Somos el Complejo Turístico Open Club, ubicados en Paraná, E.R. más precisamente en el Complejo Playas del Thompson. 
          En un entorno de belleza natural y arquitectura cuidada ofrecemos una serie de productos y servicios únicos en la ciudad. 
          Entre ellos destacamos, apartamentos premium, eventos exclusivos, nuestra propia agencia de viajes, vinoteca de vinos 
          entrerrianos, temporada de verano con bar y piscinas, y otros.
        </p>
        
        <button>Contactanos</button>
      </div>

      <div className='contactContainer2'>
        <p className='contactDirection'>Nos encontramos en Bravard 276</p>

        <GoogleMap />

        <div className='contactContainer3'>
          <p className='contactTitle'>CONTACTO</p>
          <div>
            {/* icons */}
            {/* https://booking.bebetterhotels.com/reservation/openclub */}
          </div>

          <p className='mailContact'>openclub@costanera241.tur.ar</p>
          <p className='mailContactDescription'>*También podes encontrarnos en Booking o Airbnb</p>

          <button className='reservarButton'>Contactános</button>
        </div>

      </div>

      
    </div>
  )
}
// IMÁGENES Y VIDEOS DE PRESENTACIÓN. 
// Nos encontramos en Bravard 276, (link de google maps) 
// Contáctanos a través de: 
// WhatsApp: 3434052762 
// Instagram: openclubparana
// Mail: openclub@costanera241.tur.ar
// Reservas de Alojamiento (https://booking.bebetterhotels.com/reservation/openclub)
// También podes encontrarnos en Booking o Airbnb


export default Contact
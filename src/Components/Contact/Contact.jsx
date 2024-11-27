import React from 'react'
import './Contact.css'
import GoogleMap from './GoogleMap'

function Contact() {
  return (
    <div>
      <div className='contactContainer'>
      </div>
      <div className='boxCookies eventsBoxCookiesSeparator'>
        Somos el Complejo Turístico Open Club, ubicados en Paraná, E.R. más precisamente en el Complejo Playas del Thompson. 
        En un entorno de belleza natural y arquitectura cuidada ofrecemos una serie de productos y servicios únicos en la ciudad. 
        Entre ellos destacamos, apartamentos premium, eventos exclusivos, nuestra propia agencia de viajes, vinoteca de vinos 
        entrerrianos, temporada de verano con bar y piscinas, y otros.
        
        <button>Contactanos</button>
      </div>

      <div className='contactContainer2'>
        <p className='contactDirection'>Nos encontramos en Bravard 276</p>

        <GoogleMap />

        <div>
          <p className='contactTitle'>CONTACTO</p>
          <div>
            {/* icons */}
          </div>

          <p className='mailContact'>openclub@costanera241.tur.ar</p>
          <p className='mailContactDescription'>*También podes encontrarnos en Booking o Airbnb</p>
        </div>

      </div>

      
    </div>
  )
}

export default Contact
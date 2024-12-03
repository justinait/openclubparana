import React from 'react'
import './Contact.css'
import GoogleMap from './GoogleMap'
import logo from '../../assets/logoblanco.png'
import airbnb from '../../assets/icons/airbnb.png'
import booking from '../../assets/icons/booking.png'
import instagram from '../../assets/icons/instagram.png'
import wsp from '../../assets/icons/wsp.png'
import { Link } from 'react-router-dom'

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
          <div className='contactSocialContainer'>
            <p className='contactTitle'>CONTACTO</p>
            <div className='contactIconsSocialContainer'>
              <a className='contactCircleIcons' target="_blank" rel="noopener noreferrer" href='https://api.whatsapp.com/send?phone=5493434052762'> <img  className='contactLinksIcons' src={wsp} alt="Whatsapp" /></a>
              <a className='contactCircleIcons' target="_blank" rel="noopener noreferrer" href='https://es.airbnb.com/rooms/1233462678402373833?_set_bev_on_new_domain=1733261624_EAODUxNTk0MGJkN2&source_impression_id=p3_1733261628_P3ZukGqyhGoCmWl9'> <img  className='contactLinksIcons' src={airbnb} alt="Airbnb" /></a>
              <a className='contactCircleIcons' target="_blank" rel="noopener noreferrer" href='https://www.booking.com/hotel/ar/open-club.es.html?label=Spanish_Argentina_ES_AR_20153587225-6h15TH8LvM25bNckrW9zZwS217247257083%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-162435869305%3Alp1000078%3Ali%3Adec%3Adm&sid=68b6d2ebddba48b4b64612057f6a9553&gclid=CjwKCAiA9bq6BhAKEiwAH6bqoPsjvbfdANjGahW7wMzBxpGeDO_2iHVxftHf983mSP27zg54dBJaNRoCJ-0QAvD_BwE&aid=318615&ucfs=1&arphpl=1&dest_id=-1006942&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=bd409819425400b4&srepoch=1733261882&from_sustainable_property_sr=1&from=searchresults'> <img  className='contactLinksIcons' src={booking} alt="booking" /></a>
              <a className='contactCircleIcons' target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/openclubparana/?hl=es'> <img  className='contactLinksIcons' src={instagram} alt="instagram" /></a>
            </div>
          </div>

          <p className='mailContact'>openclub@costanera241.tur.ar</p>
          <p className='mailContactDescription'>*También podes encontrarnos en Booking o Airbnb</p>

          <button className='reservarButton'>Contactanos</button>
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
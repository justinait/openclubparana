import React from 'react'
import './Season.css'
import gerva from '../../assets/summerhome.jpg'
import season2 from '../../assets/season2.png'
import season3 from '../../assets/season3.png'
import season4 from '../../assets/season4.png'
import season5 from '../../assets/season5.jpg'
import season6 from '../../assets/season6.png'
import { Link } from 'react-router-dom'

function Season() {

  const season = [
    {  image: gerva},
    {  image: season2},
    {  image: season3 },
    {  image: season5},
    {  image: season4},
    {  image: season6 }
  ];

  return (
    <div>
      <div className='seasonContainer'></div>

      <div>
        <div className='boxContainer boxContainerAgency'>
          <div className='box'>
            <h4>Temporada de Verano</h4>
            <p>
              Brindamos la posibilidad de visitar y disfrutar de Open Club a través de nuestro pase por el día. <br />
              Incluye el ingreso a todas las piscinas y el uso de nuestras instalaciones. <br />
              Dentro del complejo contamos con un bar de tragos y comidas rápidas, reservas de canchas de pádel, alquiler de reposeras,
              fogoneros y parrillas, como también posibilidad de reservar excursiones náuticas o terrestres en la ciudad.
              <br /><br />
              Tenemos convenios con distintos alojamientos de Paraná que incluyen en su estadía la visita a nuestro complejo.
              <br /> <strong>¡Consultanos cuales!</strong>
            </p>
          </div>
        </div>

        <div className='seasonContainer2'>

          <div className='seasonImagesContainer'>
            {
              season.map((e, i)=> (
                <img loading='lazy' src={e.image} className='seasonImages' alt="" width={100 }key={i}/>
              ))
            }
          </div>

          <div className='seasonInfoAndContactContainer'>
            <div className='seasonInfoContainer'>
              <div className='box'>
                <h4>Info</h4>
                <p>
                  <strong>Ingresos</strong>
                  <br />
                  - Pases Individuales por el día<br />
                  - Pack por diez (10) pases.
                </p>
              </div>
              <p className='aclarationSeason'>*No es necesario reservar la visita por el día, se abona al ingresar.</p>
            </div>

            <div className='seasonContactDiv'>
              <p className='contactTitle'>CONTACTO</p>

              <Link className='contactLinkButton'>Whatsapp</Link>
              <Link className='contactLinkButton'>Intagram</Link>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Season
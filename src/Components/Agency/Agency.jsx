import React from 'react'
import './Agency.css'
import nautico from '../../assets/agencyrio.jpg'
import wines from '../../assets/agencywines.jpg'
import costanera from '../../assets/logoCostanera.png'
import { Link } from 'react-router-dom'

function Agency() {
  
  const agency = [
    { name: 'ATARDECER CON BRINDIS', image: nautico },
    { name: 'ISLA CURUPÍ', image: nautico},
    { name: 'VISITA A VIÑEDOS', image: wines},
  ];
  return (
    <div>
      <div className='agencyContainer'>
        <video autoPlay muted loop playsInline className='videoHeroAgency'>
          <source src="" type="video/mp4" /> 
          Tu navegador no soporta videos HTML5.
        </video>
        <img loading='lazy' className='costaneraAgency' src={costanera} alt="Costanera 241" />
      </div>

      <div className='boxContainer boxContainerAgency'>
        <div className='box'>
          
          <div className='agencyTitle'>
            <h4>Costanera 241</h4>
            <p id='agencySubtitle'>Empresa de viajes y turismo</p>
          </div>
          <p>
            La Mayor Organización de Turismo en la Región.
            Con una experiencia de más de 30 años, la empresa cuenta con 10 áreas de distintos productos turísticos, entre ellas destacamos:
            Paraná Tu Río y Vinos de Ríos. las cuales te invitan a disfrutar distintas excursiones en la ciudad.
          </p>
        </div>
      </div>

      <div className='agencyContainer2'>
        <div className='agencyItemsContainer'>
          {
            agency.map((e, i)=> (
              <div key={i} className='touristHomeItem'>
                <img loading='lazy' src={e.image} alt="" width={100}/>
                <p className='touristTitlesHome'>{e.name}</p>
              </div>
            ))
          }
        </div>

        <div className='agencyContactDiv'>
          <p className='contactTitle'>CONTACTO</p>
          <Link className='contactLinkButton'>Costanera 241</Link>
          <Link className='contactLinkButton'>Paraná tu rio</Link>
          <Link className='contactLinkButton'>Vinos de ríos</Link>
        </div>
      </div>
    </div>
  )
}

export default Agency
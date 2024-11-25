import React from 'react'
import './Agency.css'
import nautico from '../../assets/agencyrio.jpg'
import wines from '../../assets/agencywines.jpg'
import costanera from '../../assets/logoCostanera.png'

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
          <source src="https://res.cloudinary.com/dsgxxcikg/video/upload/v1732548439/caiventures/openclub/gtssxqmrhr5hrauq71gr.mp4" type="video/mp4" /> 
          Tu navegador no soporta videos HTML5.
        </video>
        <img className='costaneraAgency' src={costanera} alt="Costanera 241" />
      </div>

      <div className='boxContainer'>
        <div className='box'>
          
          <div className='agencyTitle'>
            <h4>Costanera 241</h4>
            <p>Empresa de viajes y turismo</p>
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
                <img src={e.image} alt="" width={100}/>
                <p className='touristTitlesHome'>{e.name}</p>
              </div>
            ))
          }
        </div>

        <div>
          <p className='contactTitle'>CONTACTO</p>
          <p>Costanera 241</p>
          <p>Paraná tu rio</p>
          <p>Vinos de ríos</p>
        </div>
      </div>
    </div>
  )
}

export default Agency
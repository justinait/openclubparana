import React from 'react'
import './Agency.css'
import nautico from '../../assets/agencyrio.jpg'
import wines from '../../assets/agencywines.jpg'
import brindis from '../../assets/agencybrindiss.jpg'
import costanera from '../../assets/logoCostanera.png'
import video from '/agency.mp4'
import wsp from '../../assets/icons/wsp.png'

function Agency() {
  
  const agency = [
    { name: 'ATARDECER CON BRINDIS', image: brindis },
    { name: 'ISLA CURUPÍ', image: nautico},
    { name: 'VISITA A VIÑEDOS', image: wines},
  ];
  return (
    <div>
      <div className='agencyContainer'>
      <video
        src={video}
        preload="metadata"
        autoPlay
        muted
        loop
        playsInline
        className='videoHeroAgency'
        onLoadedMetadata={() => console.log('Video cargado correctamente')}
        onError={(e) => console.error('Error al cargar el video:', e)}
      >
        <p>Tu navegador no soporta este formato de video.</p>
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
            La Mayor Organización de Turismo en la Región. <br />
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
          <div className='agencyContactLinksDiv'>

            <a target='_blank' rel="noopener noreferrer" href='https://api.whatsapp.com/send?phone=5493435241636' className='contactLinkButtonContainer'>
              <div className='contactCircleIcons'> <img  className='contactLinksIcons' src={wsp} alt="Whatsapp" /></div>
              <p className='contactLinkButton'>Costanera 241</p>
            </a>
            <a target='_blank' rel="noopener noreferrer"  href='https://api.whatsapp.com/send?phone=5493434762040' className='contactLinkButtonContainer'>
              <div className='contactCircleIcons'> <img  className='contactLinksIcons' src={wsp} alt="Whatsapp" /></div>
              <p className='contactLinkButton'>Paraná tu Río</p>
            </a>
            <a target="_blank" rel="noopener noreferrer" href='https://api.whatsapp.com/send?phone=5493434718404' className='contactLinkButtonContainer'>
              <div className='contactCircleIcons'> <img  className='contactLinksIcons' src={wsp} alt="Whatsapp" /></div>
              <p className='contactLinkButton'>Vinos de Ríos</p>
            </a>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Agency
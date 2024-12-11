import React, { useState } from 'react'
import './Events.css'
import item from '../../assets/icons/itemO.png'
import prev from '../../assets/icons/arrowPrev.png'
import next from '../../assets/icons/arrowNext.png'

import image1 from '../../assets/events/events1.jpg'
import image2 from '../../assets/events/events2.jpg'
import image3 from '../../assets/events/events3.jpg'
import image4 from '../../assets/events/events4.jpg'
import image5 from '../../assets/events/events5.jpg'
import image6 from '../../assets/events/6.jpg'
import image7 from '../../assets/events/7.jpg'
import image8 from '../../assets/events/8.jpg'
import image9 from '../../assets/events/9.jpg'
import image10 from '../../assets/events/events10.jpg'
import image11 from '../../assets/events/events11.jpg'
import image12 from '../../assets/events/events12.jpg'

function Events() {
  const items = [
    { name: 'Servicios de Gastronomía'},
    { name: 'Conectividad WIFI'},
    { name: 'Servicio de Bebidas'},
    { name: 'Mobiliario, mantelería y enseres'},
    { name: 'Vinoteca de vinos entrerrianos' },
    { name: 'Cuatro (4) piscinas'},
    { name: 'Dos Salones de usos múltiples'},
    { name: 'Bar de Temporada'},
    { name: 'Amplios espacios al aire libre'},
    { name: 'Dos (2) Canchas de Padel'}
  ];
  const [showPopup, setShowPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const openPopup = (index) => {
    setCurrentIndex(index);
    setShowPopup(true);
    setImagesLoaded(false);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const getPrevIndex = (index) => (index === 0 ? events.length - 1 : index - 1);
  const getNextIndex = (index) => (index + 1) % events.length;

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };
  const events = [    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12  ];
  
  return (
    <div>
      <div className='eventsContainer'>
      </div>
      
      <div className='boxCookies eventsBoxCookiesSeparator'>
        <p>Llevamos a cabo distintos eventos a lo largo del año, tantos propios como privados. 
          Por ello ofrecemos las mejores instalaciones para desarrollar tu evento a medida. 
          Disponemos de dos salones de usos múltiples y grandes espacios al aire libre con piscinas, 
          lo cual nos brindan distintas alternativas para brindar una experiencia completa. 
          De la mano de nuestro equipo listo para garantizar un momento especial. 
        </p>
        <a href='https://api.whatsapp.com/send?phone=5493434052762' rel="noopener noreferrer" target='_blank'>Reservar</a>
      </div>

      <div className='boxContainer eventsBoxContainer'>
        <div className='eventsImagesContainer'>
          <img
            src={events[0]} 
            alt="Eventos en el Open Club de Paraná"
            className='eventsImagePopUpTrigger'
            onClick={() => openPopup(0)} // Abre el popup para la primera imagen
          />
        </div>

        {showPopup && (
        <div className="popupOverlay" onClick={closePopup}>
          <div className="popupContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeButton" onClick={closePopup}>
              X
            </button>
            <div className="carousel">
              <button>
                <img
                  src={prev} // Reemplaza con la ruta del ícono de "prev"
                  className="prev"
                  alt="Imagen anterior"
                  onClick={handlePrev}
                  loading="lazy"
                />
              </button>

              <img
                src={events[getPrevIndex(currentIndex)]}
                alt="Previa"
                loading="lazy"
                className={`carouselImage prevImage ${imagesLoaded ? 'visibleImageAccommodation' : 'hiddenImageAcommodation'}`}
                onLoad={handleImageLoad}
              />
              <img
                src={events[currentIndex]}
                alt="Evento actual"
                className="carouselImage"
                loading="lazy"
              />
              <img
                src={events[getNextIndex(currentIndex)]}
                alt="Siguiente"
                loading="lazy"
                className={`carouselImage nextImage ${imagesLoaded ? 'visibleImageAccommodation' : 'hiddenImageAcommodation'}`}
                onLoad={handleImageLoad}
              />

              <button>
                <img
                  src={next} // Reemplaza con la ruta del ícono de "next"
                  className="next"
                  alt="Imagen siguiente"
                  onClick={handleNext}
                  loading="lazy"
                />
              </button>
            </div>
          </div>
        </div>
      )}
        <div className='itemsEventsContainer'>
        <div className='box eventsH4Title'>
          <h4>Nuestras instalaciones y servicios pensados para el éxito de tu evento</h4>
        </div>
          {
            items.map((e, i)=> (
              <div key={i} className="itemsEvents">
                <img loading='lazy' src={item} alt="-" className='itemImg'/>
                <p>{e.name}</p>
              </div>
            ))
          }
          <a href='https://api.whatsapp.com/send?phone=5493434052762' target='_blank' rel="noopener noreferrer"  className='reservarButton tabletOff'>Reservar</a>
        </div>
      </div>
    </div>
  )
}

export default Events
import React, { useState } from 'react'
import './Accommodations.css'
import duplex from '../../assets/duplex.png'
import mono from '../../assets/mono.jpg'
import mono1 from '../../assets/mono1.png'
import mono2 from '../../assets/mono2.png'

import wifi from '../../assets/icons/wifi.png'
import parking from '../../assets/icons/parking.png'
import pool from '../../assets/icons/pool.png'
import bath from '../../assets/icons/bath.png'
import resto from '../../assets/icons/resto.png'
import parrilla from '../../assets/icons/parrilla.png'
import tv from '../../assets/icons/tv.png'


function Accommodations() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const icons = [
    { name: 'wifi', image: wifi},
    { name: 'estacionamiento', image: parking},
    { name: 'pileta', image: pool},
    { name: 'Vestuarios', image: bath },
    { name: 'resto', image: resto},
    { name: 'parrilla', image: parrilla},
    { name: 'tv', image: tv},
    // faltan 3
  ];

  const alojamiento = [
    { name: 'DUPLEX', image: duplex, images: [duplex, mono, mono1]},
    { name: 'MONO STD', image: mono, images: [duplex]},
    { name: 'MONO SUP. I', image: mono1, images: [duplex]},
    { name: 'MONO SUP. II', image: mono2, images: [duplex] }
  ];
  const openPopup = (images) => {
    setCurrentImages(images);
    setCurrentIndex(0);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + currentImages.length) % currentImages.length
    );
  };
  return (
    <div>
      <div className='accommodationsContainer'>
      </div>
      <div className='accomodationsContainer2'>
        <p className='boxCookies'>Nuestro complejo ofrece una alternativa distinta de alojamiento, ubicado a trescientos metros del Río Paraná. 
          Esta opción única no solo te brinda acceso a las instalaciones mencionadas, sino también una cercanía privilegiada 
          a todos los servicios y amenidades que ofrecemos a través del paquete de beneficios “Nuestro Turista”
        </p>

      <div className='accommodationsItemsContainer'>
        {
          alojamiento.map((e, i)=> (
            <div key={i} className='alojamientoItem' onClick={() => openPopup(e.images)}>
              <p className='alojamientoP' >{e.name}</p>
              <img src={e.image} alt={e.name} className='alojamientoImage' width={100}/>
            </div>
          ))
        }
      </div>

      <div className='alojamientosInfoContainer'>
        
        <div>
          <h6>HORARIO DE INGRESOS Y EGRESOS:</h6>
          <p>
            CHECK-IN:  A PARTIR DE LAS 13:00 HS <br />
            CHECK-OUT: HASTA LAS 11:00 HS
          </p>
        </div>

        <div className='ourInstalationsBigContainer'>
          <div>
            <h6>NUESTRAS INSTALACIONES Y <br />SERVCIOS</h6>
            {
              icons.map((e, i)=> (
                <img src={e.image} alt={e.name} width='20' />
              ))
            }
          </div>

          <button className='reservarButton'>Reservar</button>
        </div>

      </div>
      </div>

      <div className='ourTouristsContainerAlojamientos'>
        <div className='box'>

          <h4>Nuestros turistas</h4>
          <p>Formando parte de Open Club, a través del programa
          <strong> “Nuestros Turistas”</strong>, entre ellos destacamos:</p>
          <br /><br />
          <p>Acceso exclusivo a nuestra Carpeta de Huéspedes, donde te mostramos todas las actividades imperdibles de Paraná.</p>
        </div>

        <div className='box'>
          <ul>
            <li><strong>30% OFF</strong> en Excursiones de Costanera 241</li>
            <li><strong>20% OFF</strong> en Excursiones Náuticas con Paraná Tu Río.</li>
            <li><strong>20% OFF</strong> en Visitas a Bodegas y Viñedos con Vinos de Ríos.</li>
            <li><strong>10% OFF</strong> en la compra de Vinos Entrerrianos, en nuestra Vinoteca.</li>
            <li><strong>10% OFF</strong> en Excursiones Exclusivas a la ciudad de Santa Fe, de la mano de Mirá Santa Fé.</li>
          </ul>
        </div>

        <p className='lastTextAccommodations'>¡Únicamente los huéspedes de Open Club forman parte de nuestro programa de beneficios!</p>
      </div>


      {showPopup && (
        <div className="popupOverlay" onClick={closePopup}>
          <div className="popupContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeButton" onClick={closePopup}>
              X
            </button>
            <div className="carousel">
              <button className="prev" onClick={handlePrev}>
                {"<"}
              </button>
              <img
                src={currentImages[currentIndex]}
                alt="Alojamiento"
                className="carouselImage"
              />
              <button className="next" onClick={handleNext}>
                {">"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Accommodations
import React, { useState } from 'react'
import './Accommodations.css'

import monostd1 from '../../assets/accommodations/monostd/PORTADA.jpg'
import monostd2 from '../../assets/accommodations/monostd/2.jpg'
import monostd3 from '../../assets/accommodations/monostd/3.jpg'
import monostd4 from '../../assets/accommodations/monostd/4.jpg'
import monostd5 from '../../assets/accommodations/monostd/5.jpg'
import monostd6 from '../../assets/accommodations/monostd/6.jpg'

import monosup11 from '../../assets/accommodations/monosup1/PORTADA.jpg'
import monosup12 from '../../assets/accommodations/monosup1/2.jpg'
import monosup13 from '../../assets/accommodations/monosup1/3.jpg'
import monosup14 from '../../assets/accommodations/monosup1/4.jpg'
import monosup15 from '../../assets/accommodations/monosup1/5.jpg'
import monosup16 from '../../assets/accommodations/monosup1/6.jpg'
import monosup17 from '../../assets/accommodations/monosup1/7.jpg'

import monosup21 from '../../assets/accommodations/monosup2/PORTADA.jpg'
import monosup22 from '../../assets/accommodations/monosup2/2.jpg'
import monosup23 from '../../assets/accommodations/monosup2/3.jpg'
import monosup24 from '../../assets/accommodations/monosup2/4.jpg'
import monosup25 from '../../assets/accommodations/monosup2/5.jpg'
import monosup26 from '../../assets/accommodations/monosup2/6.jpeg'
import monosup27 from '../../assets/accommodations/monosup2/7.jpeg'

import duplex1 from '../../assets/accommodations/duplex/PORTADA.jpg'
import duplex2 from '../../assets/accommodations/duplex/2.jpg'
import duplex3 from '../../assets/accommodations/duplex/3.jpg'
import duplex4 from '../../assets/accommodations/duplex/4.jpg'
import duplex5 from '../../assets/accommodations/duplex/5.jpg'
import duplex6 from '../../assets/accommodations/duplex/6.jpg'
import duplex7 from '../../assets/accommodations/duplex/7.jpg'
import duplex8 from '../../assets/accommodations/duplex/8.jpg'
import duplex9 from '../../assets/accommodations/duplex/9.jpg'
import duplex10 from '../../assets/accommodations/duplex/10.jpg'

import wifi from '../../assets/icons/wifi.png'
import parking from '../../assets/icons/parking.png'
import pool from '../../assets/icons/pool.png'
import bath from '../../assets/icons/bath.png'
import resto from '../../assets/icons/resto.png'
import parrilla from '../../assets/icons/parrilla.png'
import tv from '../../assets/icons/tv.png'

import prev from '../../assets/icons/arrowPrev.png'
import next from '../../assets/icons/arrowNext.png'


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
    { name: 'DUPLEX', image: duplex1, images: [duplex1, duplex2, duplex3,duplex4, duplex5, duplex6, duplex7, duplex8, duplex9, duplex10]},
    { name: 'MONO STD', image: monostd1, images: [monostd1, monostd2, monostd3, monostd4, monostd5, monostd6]},
    { name: 'MONO SUP. I', image: monosup11, images: [monosup11, monosup12, monosup13, monosup14, monosup15, monosup16, monosup17]},
    { name: 'MONO SUP. II', image: monosup21, images: [monosup21, monosup22, monosup23, monosup24, monosup25, monosup26, monosup27] }
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
            <div className='accommodationsIconsDiv'>
            {
              icons.map((e, i)=> (
                <img src={e.image} alt={e.name} width='20' />
              ))
            }
            </div>
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
              <img src={prev} className="prev" onClick={handlePrev} />
              <img
                src={currentImages[currentIndex]}
                alt="Alojamiento"
                className="carouselImage"
              />
              <img src={next} className="next" onClick={handleNext} />

            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Accommodations
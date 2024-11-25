import React from 'react'
import './Events.css'

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
        <button>Reservar</button>
      </div>

      <div className='boxContainer eventsBoxContainer'>
        <div className='box eventsH4Title'>
          <h4>Nuestras instalaciones y servicios pensados para el éxito de tu evento</h4>
        </div>
        <div className='itemsEventsContainer'>
          {
            items.map((e, i)=> (
              <div key={i} className={`itemsEvents ${i < 4 ? "group1" : "group2"}`}>
                <img src="" alt="-" />
                <p>{e.name}</p>
              </div>
            ))
          }
          <button className='reservarButton'>Reservar</button>
        </div>
      </div>
    </div>
  )
}

export default Events
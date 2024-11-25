import React from 'react'
import './Wines.css'
import logoWines from '../../assets/logoVinos.png'
import { Link } from 'react-router-dom';

function Wines() {
  
  const items = [
    { name: 'Excursiones temáticas'},
    { name: 'Visitas a las bodegas y viñedos'},
    { name: 'Maridajes especiales', description: 'y gastronomía con identidad'},
    { name: 'Paquetes turísticos', description: 'que vinculan viñedos y bodegas de Entre Ríos' },
    { name: 'Viajes de incentivo'},
    { name: 'Eventos especiales sociales y corporativos'}
  ];
  
  return (
    <div>
      <div className='winesContainer'>
        <img loading='lazy' src={logoWines} className='winesLogoImage' alt="VINOS DE RIOS" width={100}/>
      </div>
      

      <div className='boxContainer'>
        <div className='box'>
          <h4>Vinoteca</h4>
          <p>
            Vinos de Ríos es la primera y única vinoteca dedicada 100% a etiquetas entrerrianas. 
            Además de brindar la posibilidad de degustar y comprar vinos de muchas bodegas y viñedos entrerrianos, la vinoteca articula una muy buena propuesta de enoturismo con la posibilidad de conocer la historia de la vitivinicultura de la provincia, a través de
          </p>
        </div>

        <div className='itemsEventsContainer'>
          {
            items.map((e, i)=> (
              <div key={i} className={`itemsEvents itemsWines ${i < 3 ? "group1" : "group2"}`}>
                <img loading='lazy' src="" alt="-" />
                <div>
                  <p>{e.name}</p>
                  <p>{e.description}</p>
                </div>
              </div>

            ))
          }
        </div>

        <div>
          <p className='contactTitle'>CONTACTO</p>
          <Link>Vinos de Ríos</Link>
        </div>

      </div>
    </div>
  )
}

export default Wines
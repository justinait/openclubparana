import React from 'react'
import './Wines.css'
import logoWines from '../../assets/logoVinos.png'
import item from '../../assets/icons/itemO.png'
import wsp from '../../assets/icons/wsp.png'
import video from '/Vinotecahb.mp4'

function Wines() {
  
  const items = [
    { name: 'Excursiones temáticas'},
    { name: 'Paquetes turísticos', description: 'que vinculan viñedos y bodegas de Entre Ríos' },
    { name: 'Visitas a las bodegas y viñedos'},
    { name: 'Viajes de incentivo'},
    { name: 'Maridajes especiales', description: 'y gastronomía con identidad'},
    { name: 'Eventos especiales', description: 'sociales y corporativos'}
  ];
  
  return (
    <div>
      <div className='winesContainer'>
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className='videoHeroAgency'
        >
          <p>Tu navegador no soporta este formato de video.</p>
        </video>
        <img loading='lazy' src={logoWines} className='winesLogoImage' alt="VINOS DE RIOS" width={100}/>
      </div>
      

      <div className='boxContainer boxContainerWines'>
        <div className='box'>
          <h4>Vinoteca</h4>
          <p>
            Vinos de Ríos es la primera y única vinoteca dedicada 100% a etiquetas entrerrianas. <br />
            Además de brindar la posibilidad de degustar y comprar vinos de muchas bodegas y viñedos entrerrianos, la vinoteca articula una muy buena propuesta de enoturismo con la posibilidad de conocer la historia de la vitivinicultura de la provincia, a través de
          </p>
        </div>

        <div className='itemsEventsContainer winesEventsContainer'>
          {
            items.map((e, i)=> (
              <div key={i} className={`itemsEvents itemsWines ${i < 3 ? "group1" : "group2"}`}>
                <img loading='lazy' src={item} alt="-" className='itemImg'/>
                <div>
                  <p>{e.name}</p>
                  <p className='descriptionItemText'>{e.description}</p>
                </div>
              </div>

            ))
          }
        </div>

        <div className='contactBoxWine'>
          <p className='contactTitle'>CONTACTO</p>

          <a target="_blank" rel="noopener noreferrer" href='https://api.whatsapp.com/send?phone=5493434718404' className='contactLinkButtonContainer'>
            <div className='contactCircleIcons'> <img  className='contactLinksIcons' src={wsp} alt="Whatsapp" /></div>
            <p className='contactLinkButton'>Vinos de Ríos</p>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Wines
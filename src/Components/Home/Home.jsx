import React, { useEffect } from 'react'
import './Home.css'
import logo from '../../assets/logoblanco.png'
import gerva from '../../assets/summerhome.jpg'
import alojamiento from '../../assets/alojamientohome.jpg'
import events from '../../assets/eventshome.jpg'
import Reviews from './Reviews'
import { Link } from 'react-router-dom'

function Home() {
  // useEffect(() => {
  //   // Cargar el script de Trustmary cuando se monta el componente
  //   const script = document.createElement("script");
  //   script.src = "https://widget.trustmary.com/JjWyoHXGL";
  //   script.async = true; // Hace que se cargue de forma asíncrona
  //   document.body.appendChild(script);

  //   // Limpiar el script cuando el componente se desmonta
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://trustmary.com/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);
  const home = [
    { name: 'TEMPORADA DE VERANO', image: gerva, id: '/temporada'},
    { name: 'ALOJAMIENTOS', image: alojamiento, id: '/alojamientos'},
    { name: 'EVENTOS', image: events, id: '/eventos' }
  ];

  return (
    <div>

      <div className='homeContainer'>
        <video autoPlay muted loop playsInline className='videoHero'>
          <source src="https://res.cloudinary.com/dsgxxcikg/video/upload/v1732548439/caiventures/openclub/gtssxqmrhr5hrauq71gr.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        <img loading='lazy' src={logo} alt="Open Club - Complejo turístico" className='logoHero' />
      </div>
      <div className='aboutUsHomeContainer'>
        <div className='box'>
          <h4>Sobre nosotros</h4>
          <p>
            Somos Complejo Turístico Open Club, ubicados en Paraná, E.R. más precisamente en el Complejo Playas del Thompson.
            En un entorno de belleza natural y cuidada arquitectura ofrecemos una serie de productos y servicios únicos en la ciudad.
            Entre ellos destacamos, apartamentos equipados, eventos exclusivos, nuestra propia agencia de viajes, única vinoteca de vinos
            entrerrianos y temporada de verano con bar y piscinas.
            <br /><br />
            Aquí nos enorgullece mencionar que, somos certificados con nivel bronce por el programa Hoteles Más Verdes, demostrando nuestro aporte con el medioambiente. 
            <br />También haber sido declarados como complejo de interés turístico por la Municipalidad de Paraná.
          </p>
        </div>
      </div>

      <div className='homeContainer2'>
        <div className='box'>
          <h4>Complejo turisitico</h4>
          <p>
            En Open Club, nos dedicamos a brindar una atención cálida y personalizada para que cada visitante se sienta bienvenido y cuidado.
          </p>
        </div>

        <div className='touristImagesHomeContainer'>
          {
            home.map((e, i)=> (
              <Link to={e.id} key={i} className='touristHomeItem'>
                <img loading='lazy' src={e.image} alt=""/>
                <p className='touristTitlesHome'>{e.name}</p>
              </Link>
            ))
          }
        </div>
      </div>

      <Reviews/>

    </div>
  )
}

export default Home
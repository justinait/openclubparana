import React, { useEffect, useState } from 'react'
import './Links.css'
import star from '../../assets/icons/star.png'
import wsp from '../../assets/icons/wspblanco.png'
import { Link, useLocation } from 'react-router-dom'

function Links() {
    const [showText, setShowText] = useState(false);
    const [hideText, setHideText] = useState(false); 
    const [isHidden, setIsHidden] = useState(false); 
    
    const getTopPosition = () => {
      switch (location.pathname) {
        case '/':
        case '/agencia':
        case '/temporada':
        case '/vinoteca':
          return 'top75'; // top: 75vh
        case '/alojamientos':
        case '/eventos':
          return 'top50'; // top: 50vh
        case '/contacto':
          return 'opacity0'; // opacity: 0
        default:
          return '';
      }
    };

    useEffect(() => {
      const showTimeout = setTimeout(() => {
        setShowText(true);
  
          const hideTimeout = setTimeout(() => {
              setHideText(true);
          }, 3000);
  
          return () => clearTimeout(hideTimeout);

        }, 1000);
  
        return () => clearTimeout(showTimeout);
    }, [location]);
    
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const footerPosition = document.querySelector('#footerContainer')?.offsetTop;
  
        if (location.pathname === '/' && window.innerWidth >= 1200) {
          if (footerPosition && scrollPosition + window.innerHeight >= footerPosition - 300) {
            setIsHidden(true);  // Ocultar el componente cuando esté a 200px del footer
          }
        } else {
          if (footerPosition && scrollPosition + window.innerHeight >= footerPosition + 50) {
            setIsHidden(true);  // Ocultar el componente cuando esté a 200px del footer
          } else {
            setIsHidden(false);  // Mostrar el componente si no estamos cerca del footer
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      
      return () => window.removeEventListener('scroll', handleScroll);  // Limpieza al desmontar
    }, [location]);

    const topClass = getTopPosition();
    
  return (
    <div className={`linksContainer ${topClass} ${isHidden ? 'hidden' : ''}`}>
      <Link to='/alojamientos' className='linkStar'>
        <img src={star} alt="Destacados" />
        <p className={`linkStarP ${showText ? "show" : ""} ${hideText ? "hide" : ""}`}>Accede a los beneficios exclusivos</p>
      </Link>

      <div className='linkWsp'>
        <img src={wsp} alt="WhatsApp" />
      </div>
      {/* +54 9 3434 05-2762 */}
    </div>
  )
}

export default (props) => {
  const location = useLocation();
  return <Links key={location.pathname} {...props} />;
};
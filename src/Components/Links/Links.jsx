import React, { useEffect, useState } from 'react'
import './Links.css'
import star from '../../assets/icons/star.png'
import wsp from '../../assets/icons/wspblanco.png'
import { Link, useLocation } from 'react-router-dom'

function Links() {
    const [showText, setShowText] = useState(false);
    const [hideText, setHideText] = useState(false); 
    const [isHidden, setIsHidden] = useState(false); 
    const [fixed, setFixed] = useState(false);
  
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
  
        console.log(footerPosition);
        
        if (footerPosition && scrollPosition + window.innerHeight >= footerPosition) {
          setIsHidden(true);  // Ocultar el componente cuando esté a 200px del footer
        } else {
          setIsHidden(false);  // Mostrar el componente si no estamos cerca del footer
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      
      return () => window.removeEventListener('scroll', handleScroll);  // Limpieza al desmontar
    }, [location]);

  return (
    <div className={`linksContainer ${isHidden ? 'hidden' : ''}`}>
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
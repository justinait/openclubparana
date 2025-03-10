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
    
        if (footerPosition) {
          if (location.pathname === '/' && window.innerWidth >= 1200) {
            
            if (scrollPosition + window.innerHeight >= footerPosition - 300) {
              setIsHidden(true); 
            } else {
              setIsHidden(false); 
            }
          } else {
            
            if (scrollPosition + window.innerHeight >= footerPosition - 50) {
              setIsHidden(true); 
            } else {
              setIsHidden(false); 
            }
          }
        }
      };
    
      window.addEventListener('scroll', handleScroll);
    
      handleScroll();
    
      return () => window.removeEventListener('scroll', handleScroll);
    }, [location]);    

    const topClass = getTopPosition();
    
  return (
    <div className={`linksContainer ${topClass} ${isHidden ? 'hidden' : ''}`}>
      <Link to='/alojamientos' className='linkStar'>
        <img src={star} alt="Destacados" className='linkStarIcon'/>
        <p className={`linkStarP ${showText ? "show" : ""} ${hideText ? "hide" : ""}`}>Accede a los beneficios exclusivos</p>
      </Link>

      <a href='https://api.whatsapp.com/send?phone=5493434052762' rel="noopener noreferrer" target='_blank' className='linkWsp'>
        <img src={wsp} alt="WhatsApp" />
      </a>

    </div>
  )
}

export default (props) => {
  const location = useLocation();
  return <Links key={location.pathname} {...props} />;
};
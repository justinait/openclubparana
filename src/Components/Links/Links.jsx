import React, { useEffect, useState } from 'react'
import './Links.css'
import star from '../../assets/icons/star.png'
import wsp from '../../assets/icons/wspblanco.png'
import { Link } from 'react-router-dom'

function Links() {
    const [showText, setShowText] = useState(false);
    const [hideText, setHideText] = useState(false);
  
    useEffect(() => {
      const showTimeout = setTimeout(() => {
        setShowText(true);
  
            const hideTimeout = setTimeout(() => {
                setHideText(true);
            }, 4000);
    
            return () => clearTimeout(hideTimeout);

        }, 2000);
  
        return () => clearTimeout(showTimeout);
    }, [showText]);

  return (
    <div className='linksContainer'>
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

export default Links
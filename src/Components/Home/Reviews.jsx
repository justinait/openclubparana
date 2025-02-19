import React, { useEffect, useState } from "react";
import './Reviews2.css'
import dibia from '../../assets/reviews/dibla.png'
import mariaN from '../../assets/reviews/mariaN.png'
import andre from '../../assets/reviews/andre.png'
import hernan from '../../assets/reviews/hernan.png'
import gaston from '../../assets/reviews/gaston.png'
import roxana from '../../assets/reviews/roxana.png'
import clementina from '../../assets/reviews/clementinaS.png'
import daniel from '../../assets/reviews/daniel.png'

const TrustindexWidget = () => {
  
  const reviews = [
    {
      text: "Excelente lugar para pasar en familia",
      image: gaston,
      author: "Gastón S.",
    },
    {
      text: "Excelente lugar para pasar todo el día. Buena atención, comida y tragos a precios accesibles",
      image: daniel,
      author: "Daniel G.",
    },
    {
      text: "Excelente lugar, para disfrutar",
      image: roxana,
      author: "Roxana S.",
    },
    {
      text: "Hermoso lugar, las piletas nuevas, el parquizado, todo divino. La comida riquísima ❤️",
      image: clementina,
      author: "Clementina S.",
    },
    {
      text: "Excelente lugar para pasar una tarde amena. Súper atento todo el staff",
      image: andre,
      author: "Andre",
    },
    {
      text: "Excelente lugar para disfrutar en familia de una tarde en las piscinas",
      author: "Dibia L.",
      image: dibia,
    },
    {
      text: "Excelente espacio!! Ningún desperdicio!!! Muy conforme!! Para volver siempre!",
      image: hernan,
      author: "Hernán S.",
    },
    {
      text: "Excelente experiencia, muy buena cata de vinos",
      image: mariaN,
      author: "María N.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 7000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="reviews-container">
      <div className="review-card">
        <p className="review-text">{reviews[currentIndex].text}</p>
        <div className="review-footer">
          <img src={reviews[currentIndex].image} className="review-avatar" />
          <p className="review-author">{reviews[currentIndex].author}</p>
        </div>
      </div>
    </div>
  );
};

export default TrustindexWidget;
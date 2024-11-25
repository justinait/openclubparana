import React, { useEffect } from "react";
import './Home.css'

const Reviews = () => {
  useEffect(() => {
    // Cargar el script de Trustmary cuando se monta el componente
    const script = document.createElement("script");
    script.src = "https://widget.trustmary.com/JjWyoHXGL";
    script.async = true; // Hace que se cargue de forma asíncrona
    document.body.appendChild(script);

    // Limpiar el script cuando el componente se desmonta
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="reviewsContainerYellow">
      <div id="trustmary-widget"></div>
    </div>
  );
};

export default Reviews;
import React, { useEffect, useState } from "react";
import './Reviews2.css'

const TrustindexWidget = () => {
  const [hideWidget, setHideWidget] = useState(location.pathname === "/");
  // useEffect(() => {
  //   if (!document.querySelector("script[src='https://cdn.trustindex.io/loader.js?dadd222419c83487ff364e14be7']")) {
  //     const script = document.createElement("script");
  //     script.src = "https://cdn.trustindex.io/loader.js?dadd222419c83487ff364e14be7";
  //     script.async = true;
  //     document.body.appendChild(script);
  //   }
  // }, []);
  useEffect(() => {

    if (!document.querySelector("script[src='https://cdn.trustindex.io/loader.js?dadd222419c83487ff364e14be7']")) {
      const script = document.createElement("script");
      script.src = "https://cdn.trustindex.io/loader.js?dadd222419c83487ff364e14be7";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      const tiWidget = document.querySelector(".ti-widget");
      if (tiWidget) {
        tiWidget.remove(); 
      }
    };
  }, []);

  return (
    <div id="reviewsContainerYellow" >
      <div className={`trustindex-widget displayNone }`}>
      {/* Aquí es donde el widget se renderiza automáticamente */}
      </div>
    </div>
  );
};

export default TrustindexWidget;
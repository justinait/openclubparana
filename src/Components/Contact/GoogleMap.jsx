import React from "react";
import './Contact.css'

const GoogleMap = () => {
    return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.944954398915!2d-60.51145912466914!3d-31.71739861086694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b45213a4f2eedf%3A0x9e1c2b9647c99041!2sOpen%20Club!5e0!3m2!1ses-419!2sar!4v1732031628245!5m2!1ses-419!2sar&z=10"
        width="99%"
        height="180"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Open Club Paraná - Google Maps"
        className="googleMapIframe"
      ></iframe>
    );
  };
  
export default GoogleMap;  
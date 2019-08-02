import React, { useRef } from 'react';
import Travel from './Travel';
import Accomodations from './Accomodations';
import srcImg from '../photo1.jpg';

export const windowTitle = 'Viaje y alojamiento | Albert <3 Rachel';
export const image = srcImg;
export function Content() {

  const travelRef = useRef(null);
  const accomodationsRef = useRef(null);
  const goTo = (ref) => window.scrollTo({
    top:  ref.current.offsetTop,
    left: 0,
    behavior: 'smooth'
  });

  return (<div>
    <h1>
      Viaje y alojamiento
    </h1>
    <div className="content-page">
      <p>
        Disfruta Boston por el fin de semana. La información de <button
          className="link"
          onClick={() => goTo(travelRef)}
        >
        viaje
        </button> y <button
          className="link"
          onClick={() => goTo(accomodationsRef)}
        >
         alojamiento
        </button>
        está disponible a continuación.
        Por favor contáctenos si tiene más
        preguntas sobre transporte o
        donde quedarse.
      </p>
      <div ref={travelRef} >
        <Travel />
      </div>
      <div ref={accomodationsRef} >
        <Accomodations />
      </div>
    </div>
  </div>);
}
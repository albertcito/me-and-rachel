import React from 'react';

export default function TravelAccomodations({...things}) {

  return (<div {...things}>
    <h1>
    Alojamiento
    </h1>
    <div>
      <h2>
      Wylie Inn y centro de conferencias
      </h2>
      <p>
        Tenemos un bloque de habitaciones disponibles la noche.
        antes de la boda y la noche de la boda.
        Llame al 978-867-1800 y mencione el Tjornehoj / Barrientos
        boda para reservar una habitación.
      </p>
    </div>
  </div>);
}
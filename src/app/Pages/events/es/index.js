import React from 'react';
import srcImg from '../photo4.jpg';
import '../index.css';

export const windowTitle = 'Events | Albert <3 Rachel';
export const image = srcImg;
export function Content() {
  return (<div>
    <h1>
      Eventos
    </h1>

    <div className="content-page">

      <h2>
        Cena de Bienvenida
      </h2>
      <h3 className="date-event">
        Sábado 18 de Enero, 2020 a las 18:00 hrs.
      </h3>
      <p>
        <a
          href="http://sealeveloysterbar.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sea Level
        </a>
        <br/>
        <a
          href="https://www.google.com/maps/place/Sea+Level+Oyster+Bar/@42.5203086,-70.8899139,17z/data=!4m13!1m7!3m6!1s0x89e3146689e0db8b:0x3ab48d024a22e061!2s94+Wharf+St,+Salem,+MA+01970,+USA!3b1!8m2!3d42.5203047!4d-70.8877252!3m4!1s0x89e314665d74421b:0xb7e4aea5473e7d60!8m2!3d42.5203047!4d-70.8877252"
          target="_blank"
          rel="noopener noreferrer"
        >
          94 Wharf St, Salem, MA 01970
        </a>
      </p>

      <h2>
        Ceremonia y Recepción
      </h2>
      <h3 className="date-event">
        Domingo 19 de Enero, 2020 a las 16:30 hrs.
      </h3>
      <p>
        <a
          href="https://www.tuppermanor.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tupper Manor
        </a>
        <br />
        <a
          href="https://www.google.com/maps/place/Tupper+Manor/@42.5531929,-70.8497517,17z/data=!4m13!1m7!3m6!1s0x89e316651f654c73:0xf91f6772378b439c!2s295+Hale+St,+Beverly,+MA+01915,+USA!3b1!8m2!3d42.553189!4d-70.847563!3m4!1s0x89e3167aafcd0143:0x46687fc93ee60443!8m2!3d42.5527954!4d-70.8492566"
          target="_blank"
          rel="noopener noreferrer"
        >
          295 Hale Street, Beverly, MA 01915
        </a>
      </p>

    </div>
  </div>);
}
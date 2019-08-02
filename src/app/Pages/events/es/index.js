import React from 'react';
import srcImg from '../photo4.jpg';

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
      <p>
        Todos están invitados a unirse a nosotros el sábado 18 de enero para una cena.
        Pronto publicaremos más información.
      </p>

      <h2>
        Ceremonia y Recepción
      </h2>
      <p>
        La ceremonia empieza a las 4:30pm
        <br/>
        <a href="https://www.tuppermanor.com">Tupper Manor</a>, Beverly, MA
        <br />
        295 Hale Street, Beverly, MA 01915
      </p>

    </div>
  </div>);
}
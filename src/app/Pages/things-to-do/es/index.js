import React from 'react';
import srcImg from '../photo5.jpg';

export const windowTitle = 'Cosas para hacer | Albert <3 Rachel';
export const image = srcImg;
export function Content() {
  return (<div>
    <h1>
    Cosas para hacer
    </h1>
    <div className="content-page">
      <Beverly />
      <Salem />
      <Rockport />
      <WoodmanEssex />
      <Newburyport />
      <BostonCambridge />
    </div>
  </div>);
}

const Beverly = () => {
  return (<React.Fragment>
    <h2>Beverly</h2>
    <ul>
      <li>
        <a target='_blank' rel="noopener noreferrer" href="http://www.marikasrestaurantbeverly.com/">
        Marika’s
        </a>: Este es un lugar divertido para el desayuno.
        Sus panqueques al estilo alemán son deliciosos.
        Solo recibe en efectivo.
      </li>
      <li>
        <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/omelettefactory1">
        The Omelette Factory
        </a>: Es el favorito de la familia Tjornehoj para el desayuno.
      </li>
      <li>
        <a target='_blank' rel="noopener noreferrer" href="https://www.thecastlebeverly.com/">
        Castle
        </a>: Comida, bebidas y juegos ... ¡siempre una buena combinación!
      </li>
    </ul>
  </React.Fragment>);
}

const Salem = () => {
  return (<React.Fragment>
    <h2>Salem</h2>
    <ul>
      <li>
        <a target='_blank' rel="noopener noreferrer" href="http://www.bagelworld.net/">
        Bagel World
        </a>: Siempre hay una cola, pero vale la pena esperar
        los bagels y los sándwiches de bagel.
      </li>
      <li>
        <a target='_blank' rel="noopener noreferrer" href="http://www.farfromthetreecider.com/">
        Far From The Tree
        </a>: Prueba la sidra en Far From the Tree.
        No ofrecen comida, pero puedes traer la tuya
      </li>
    </ul>
  </React.Fragment>);
}

const Rockport = () => {
  return (<React.Fragment>
    <h2>Rockport</h2>
    <ul>
      <li>
        Asegúrate de conseguir un dulce de azúcar en el <a
          target='_blank'
          rel="noopener noreferrer"
          href="https://rockportfudgery.com/"
        >
          Rockport Fudgery!
        </a>
      </li>
    </ul>
  </React.Fragment>);
}

const WoodmanEssex = () => {
  return (<React.Fragment>
    <h2>Woodman’s of Essex</h2>
    <ul>
      <li>
        ¡Todos los mariscos fritos que puedas desear!
      </li>
    </ul>
  </React.Fragment>);
}
const Newburyport = () => {
  return (<React.Fragment>
    <h2>Newburyport</h2>
    <ul>
      <li>
        Un gran lugar para visitar con tiendas y restaurantes.
      </li>
    </ul>
  </React.Fragment>);
}

const BostonCambridge = () => {
  return (<React.Fragment>
    <h2>Boston/Cambridge</h2>
    <p>
      Tome el tren de cercanías hacia la estación norte y explore.
    </p>
    <ul>
      <li>
      <a target='_blank' rel="noopener noreferrer" href="https://rockportfudgery.com/">
        Freedom Trail
      </a>: Visite los sitios históricos en Boston.
      </li>
      <li>
        <a target='_blank' rel="noopener noreferrer" href="https://www.mikespastry.com/">
          Mike’s Pastries
        </a>
      </li>
      <li>
        <a target='_blank' rel="noopener noreferrer" href="https://www.bpl.org/locations/3/">
          Boston Public Library
        </a> es la bilioteca municipal, muy bella.
      </li>
      <li>
        <a target='_blank' rel="noopener noreferrer" href="https://www.harvard.edu/on-campus/visit-harvard/tours">
          Harvard
        </a>
      </li>
      <li>
        <a target='_blank' rel="noopener noreferrer" href="https://mobi.mit.edu/tourindex/index">
          MIT
        </a>
      </li>
    </ul>
  </React.Fragment>);
}
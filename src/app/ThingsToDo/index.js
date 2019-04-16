import React from 'react';

export default function ThingsToDo() {

  return (<div>
    <img
      src="/img/photo5.jpg"
      className="img-cover"
    />
    <h1>
      ThingsToDo
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
        </a>: This is a fun place for breakfast.
        Their German-style pancakes are delicious.
        It is cash only.
      </li>
      <li>
        <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/omelettefactory1">
        The Omelette Factory
        </a>: It’s a Tjornehoj family favorite for breakfast.
      </li>
      <li>
        <a target='_blank' rel="noopener noreferrer" href="https://www.thecastlebeverly.com/">
        Castle
        </a>: Food, drinks, and games….always a good combination!
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
        </a>: There is always a line, but the bagels and
        the bagel sandwiches are worth the wait.
      </li>
      <li>
        <a target='_blank' rel="noopener noreferrer" href="http://www.farfromthetreecider.com/">
        Far From The Tree
        </a>: Try some cider at Far From the Tree.
        They don't offer food, but you can bring your own
      </li>
    </ul>
  </React.Fragment>);
}

const Rockport = () => {
  return (<React.Fragment>
    <h2>Salem</h2>
    <ul>
      <li>
        Be sure to get fudge at
        the <a target='_blank' rel="noopener noreferrer" href="https://rockportfudgery.com/">
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
        All the fried seafood you could want!
      </li>
    </ul>
  </React.Fragment>);
}
const Newburyport = () => {
  return (<React.Fragment>
    <h2>Newburyport</h2>
    <ul>
      <li>
       I nice place to go
      </li>
    </ul>
  </React.Fragment>);
}

const BostonCambridge = () => {
  return (<React.Fragment>
    <h2>Boston/Cambridge</h2>
    <p>Take the commuter rail into North Station and explore.</p>
    <ul>
      <li>
      <a target='_blank' rel="noopener noreferrer" href="https://rockportfudgery.com/">
        Freedom Trail
      </a>: Visit the historical sites in Boston.
      </li>
      <li>
        <a target='_blank' rel="noopener noreferrer" href="https://www.mikespastry.com/">
          Mike’s Pastries
        </a>
      </li>
      <li>
        <a target='_blank' rel="noopener noreferrer" href="https://www.bpl.org/locations/3/">
          Boston Public Library
        </a>
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
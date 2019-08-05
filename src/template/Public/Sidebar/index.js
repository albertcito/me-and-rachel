import React, { useEffect, useRef, useContext } from 'react';
import { PublicContext } from 'template/index.js';
import { Link } from 'react-router-dom';
import './index.css';

export default function Sidebar({menu, setMenu}) {
  const closeX = {
    x1: "1",
    y1: "15",
    x2: "15",
    y2: "1",
  };
  const closeY = {
    x1: "1",
    y1: "1",
    x2: "15",
    y2: "15",
  };

  const ref = useRef(null);
  const global = useContext(PublicContext);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
        document.removeEventListener('click', handleClickOutside, true);
    };
  });

  const menuOptions = (global.lang === 'en') ? menuEN : menuES;

  return (<React.Fragment>
    <nav ref={ref} className={menu ? 'menu-visible': ''}>
      <button
        className="menu-close"
        onClick={() => setMenu(false)}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line {...closeX} />
          <line {...closeY} />
        </svg>
      </button>
      <ul>
      {
        menuOptions.map(({url, text}) => <li key={url}>
        <Link to={url} onClick={() => setMenu(false)}>
          {text}
        </Link>
      </li>)
      }
      <li>
        <a
          href="https://www.myregistry.com/wedding-registry/Rachel-Tjornehoj-and-Albert-Barrientos-Beverly-MA/"
          onClick={() => setMenu(false)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Registry
        </a>
      </li>)
      <li>
        <button onClick={() => {
          global.setEN();
          setMenu(false);
        }}>
          EN
        </button>
        {' '}
        <button onClick={() => {
          global.setES();
          setMenu(false);
        }}>
          ES
        </button>
      </li>
      </ul>
    </nav>
  </React.Fragment>);
}

const menuEN = [
  {
    url: '/',
    text: 'Home'
  },
  {
    url: '/events',
    text: 'Events'
  },
  {
    url: '/travel-accommodations',
    text: 'Travel & Accommodations'
  },
  {
    url: '/things-to-do',
    text: 'Things to do'
  },
  /*
  {
    url: '/rsvp',
    text: 'RSVP'
  },
  */
];

const menuES = [
  {
    url: '/',
    text: 'Inicio'
  },
  {
    url: '/events',
    text: 'Eventos'
  },
  {
    url: '/travel-accommodations',
    text: 'Viaje y alojamiento'
  },
  {
    url: '/things-to-do',
    text: 'Cosas que hacer'
  },
  /*
  {
    url: '/rsvp',
    text: 'Confirme su presencia'
  },
  */
];
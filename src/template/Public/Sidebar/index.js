import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const menuOptions = [
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
];

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
  return (<React.Fragment>
    <nav className={menu ? 'menu-visible': ''}>
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
        <Link to={url}>
          {text}
        </Link>
      </li>)
      }
      </ul>
    </nav>
  </React.Fragment>);
}
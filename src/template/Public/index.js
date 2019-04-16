import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import './index.css';

export default function Public({Component}) {
  const [menu, setMenu] = useState(false);
  return (<div className="wrapper">
    <Sidebar menu={menu} setMenu={setMenu} />
    <section className={menu? 'menu-visible' : ''}>
      <button
        onClick= {() => {setMenu(true)}}
        htmlFor="navigation"
        className={`menu-button ${menu ? 'hide': ''}`}
      >
          Menu
      </button>
      <Component />
    </section>
  </div>);
}

Public.propTypes = {
  Component: PropTypes.elementType.isRequired
};
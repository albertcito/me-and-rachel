import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import bg from './bg.jpg';

export default function Index({lang}) {

  const title = (lang === 'en') ?
    'Beverly, MA | January 19, 2020' :
    'Beverly, MA | 19 de Enero, 2020';

  useEffect(() => {
    document.title = 'Albert & Rachel';
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (<div className="index">
    <div
      className="bg-img"
      style={{backgroundImage: `url(${bg})`}}
    >
      <div className="center-box">
          <h1>Albert <span>&</span> Rachel</h1>
          <h3>{title}</h3>
      </div>
      <div className="shadow-box"></div>
    </div>
  </div>);
}

Index.propTypes = {
  lang: PropTypes.string.isRequired,
};
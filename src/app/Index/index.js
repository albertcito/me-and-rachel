import React from 'react';
import './index.css';
import bg from './bg.jpg';

export default function Index() {

  return (<div className="index">
    <div
      className="bg-img"
      style={{backgroundImage: `url(${bg})`}}
    >
      <div className="center-box">
          <h1>Albert <span>&</span> Rachel</h1>
          <h3>Beverly, MA | January 19, 2020</h3>
      </div>
      <div className="shadow-box"></div>
    </div>
  </div>);
}
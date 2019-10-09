import React from 'react';
import config from './config';
import './index.scss';
export default function Exception({type, title, desc, actions}) {
  return (
    <div className="exception-page" type="flex" justify="center">
      <div className="exception-page-content" xs={24} sm={12} md={12} lg={9} xl={9} >
        <h1>{title || config[type].title}</h1>
        <img
          src={config[type].img}
          alt={config[type].title}
        />
        <div className="exception-page-desc">{desc || config[type].desc}</div>
        <div>
          {actions}
        </div>
      </div>
    </div>
  );
}
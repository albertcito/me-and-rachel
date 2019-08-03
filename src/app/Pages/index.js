import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { PublicContext } from 'template/index.js';
import Index from 'app/Index';
import RSVP from 'app/RSVP';
import './index.scss';

export default function Page({route}) {
  const global = useContext(PublicContext);
  const pathName = route.location.pathname;
  const page = tryRequire(pathName, global.lang);
  switch(pathName) {
    case '/': return <Index route={route}  lang={global.lang} />;
    case '/rsvp': return <RSVP route={route} lang={global.lang} />;
    default: return (page) ? <DisplayPage {...page} pathName={pathName} /> : "404";
  }
}
Page.propTypes = { route: PropTypes.object.isRequired };

const DisplayPage = ({windowTitle, Content, image, pathName}) => {
  const className = pathName.substr(1);
  useEffect(() => {
    document.title = windowTitle;
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [windowTitle]);
  return (<div className={`container ${className}`}>
    <div className="image-left">
      <div className="image-fix" style={{backgroundImage: `url(${image})`}}></div>
    </div>
    <div className="form-right">
      <Content />
    </div>
  </div>);
};

DisplayPage.propTypes = {
  windowTitle: PropTypes.string.isRequired,
  Content: PropTypes.elementType.isRequired,
  image: PropTypes.string.isRequired,
  pathName: PropTypes.string.isRequired,
};

const tryRequire = (pathName, language) => {
  try {
    return require(`.${pathName}/${language}`);
  } catch (err) {
   return null;
  }
};
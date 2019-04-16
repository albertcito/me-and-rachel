import React, { useEffect } from 'react';
import srcImg from './photo4.jpg';

export default function Events() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (<div>
    <img
      src={srcImg}
      className="img-cover"
    />
    <h1>
      Events
    </h1>
    <div className="content-page">


      <h2>Ceremony and Reception</h2>
      <p>
      Ceremony begins at 4:30pm
      <br/>
      Tupper Manor, Beverly, MA
      <br/>
      Join us after the ceremony for cocktails,
      dinner, and dancing.
      </p>

    </div>
  </div>);
}
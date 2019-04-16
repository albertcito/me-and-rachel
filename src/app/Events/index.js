import React from 'react';
import srcImg from './photo4.jpg';

export default function Events() {

  return (<div>
    <img
      src={srcImg}
      className="img-cover"
    />
    <h1>
      Events
    </h1>
    <div className="content-page">
      <h2>Welcome Dinner</h2>
      <p>
      Everyone is invited to join us on Saturday,
      January 18 for a dinner and xyz.
      </p>

      <h2>Ceremony and Reception</h2>
      <p>
      Ceremony begins at 4:30pm
      Tupper Manor, Beverly, MA

      Join us after the ceremony for cocktails,
      dinner, and dancing.

      RSVP

      </p>

    </div>
  </div>);
}
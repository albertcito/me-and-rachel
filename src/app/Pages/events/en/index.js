import React from 'react';
import srcImg from '../photo4.jpg';

export const windowTitle = 'Events | Albert <3 Rachel';
export const image = srcImg;
export function Content() {
  return (<div>
    <h1>
      Events
    </h1>
    <div className="content-page">

      <h2>Welcome Dinner</h2>
      <p>
      Everyone is invited to join us on Saturday, January 18 for a dinner.
      More information is coming.
      </p>

      <h2>Ceremony and Reception</h2>
      <p>
      Ceremony begins at 4:30pm
      <br/>
      <a href="https://www.tuppermanor.com">Tupper Manor</a>, Beverly, MA
      <br />
      295 Hale Street, Beverly, MA 01915
      <br />
      Join us after the ceremony for cocktails,
      dinner, and dancing.
      </p>
    </div>
  </div>);
}
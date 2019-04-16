import React from 'react';
import Travel from './Travel';
import Accomodations from './Accomodations';
import srcImg from './photo1.png';

export default function TravelAccomodations() {

  return (<div>
    <img
      src={srcImg}
      className="img-cover"
    />
    <h1>
      Travel and Accomodations
    </h1>
    <div className="content-page">
      <p>
        Enjoy the Boston area for the
        weekend.
          Travel
        and
          accommodation
        information
        is available below.
        Please contact us if you have more
        questions about transportation or
        where to stay.
      </p>

      <Travel />
      <Accomodations />
    </div>
  </div>);
}
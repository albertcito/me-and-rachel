import React, { useEffect, useRef } from 'react';
import Travel from './Travel';
import Accomodations from './Accomodations';
import srcImg from './photo1.png';

export default function TravelAccomodations() {

  const travelRef = useRef(null);
  const accomodationsRef = useRef(null);

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const goTo = (ref) => window.scrollTo({
    top:  ref.current.offsetTop,
    left: 0,
    behavior: 'smooth'
  });

  return (<div>
    <img
      src={srcImg}
      className="img-cover"
    />
    <h1>
      Travel and Accommodations
    </h1>
    <div className="content-page">
      <p>
        Enjoy the Boston area for the
        weekend. <a
        onClick={() => goTo(travelRef)}
        >
         Travel
        </a> and <a
        onClick={() => goTo(accomodationsRef)}
        >
         accommodation
        </a> information
        is available below.
        Please contact us if you have more
        questions about transportation or
        where to stay.
      </p>
      <div ref={travelRef} >
        <Travel />
      </div>
      <div ref={accomodationsRef} >
        <Accomodations />
      </div>
    </div>
  </div>);
}
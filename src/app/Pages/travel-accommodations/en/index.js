import React, { useRef } from 'react';
import Travel from './Travel';
import Accomodations from './Accomodations';
import srcImg from '../photo1.jpg';

export const windowTitle = 'Travel and Accommodations | Albert <3 Rachel';
export const image = srcImg;
export function Content() {

  const travelRef = useRef(null);
  const accomodationsRef = useRef(null);
  const goTo = (ref) => window.scrollTo({
    top:  ref.current.offsetTop,
    left: 0,
    behavior: 'smooth'
  });

  return (<div>
    <h1>
      Travel and Accommodations
    </h1>
    <div className="content-page">
      <p>
        Enjoy the Boston area for the
        weekend. <button
          className="link"
          onClick={() => goTo(travelRef)}
        >
         Travel
        </button> and <button
          className="link"
          onClick={() => goTo(accomodationsRef)}
        >
         accommodation
        </button> information
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
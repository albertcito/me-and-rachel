import React from 'react';

export default function TravelAccomodations({...things}) {

  return (<div {...things}>
    <h1>
      Accomodations
    </h1>
    <div>
      <h2>
        Wylie Inn and Conference Center
      </h2>
      <p>
        We have a block of rooms available the night
        before the wedding and the night of the wedding.
        Call 978-867-1800 and mention the Tjornehoj/Barrientos
        wedding to reserve a room.
      </p>
    </div>
  </div>);
}
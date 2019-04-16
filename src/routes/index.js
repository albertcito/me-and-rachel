import Index from 'app/Index';
import Events from 'app/Events';
import TravelAccomodations from 'app/TravelAccomodations';
import ThingsToDo from 'app/ThingsToDo';

export default [
  {
    Component: Index,
    path: '/',
  },
  {
    Component: Events,
    path: '/events'
  },
  {
    Component: TravelAccomodations,
    path: '/travel-accomodations'
  },
  {
    Component: ThingsToDo,
    path: '/things-to-do'
  },
];

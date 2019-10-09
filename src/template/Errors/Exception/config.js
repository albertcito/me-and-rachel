import error500 from './error500.svg';
import error404 from './error404.svg';

const config = {
  404: {
    img: error404,
    title: '404',
    desc: 'Not Found',
  },
  500: {
    img: error500,
    title: '500',
    desc: 'Error',
  },
};

export default config;
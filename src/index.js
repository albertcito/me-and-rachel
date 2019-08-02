import React from 'react';
import ReactDOM from 'react-dom';
import Template from './template';
import * as serviceWorker from 'serviceWorker';

ReactDOM.render(<Template />, document.getElementById('root'));
serviceWorker.unregister();
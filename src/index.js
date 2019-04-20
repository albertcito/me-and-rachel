import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Template from './template';
import * as serviceWorker from 'serviceWorker';

ReactDOM.render(<Template />, document.getElementById('root'));
serviceWorker.unregister();
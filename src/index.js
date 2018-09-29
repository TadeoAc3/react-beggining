import React from 'react';
import ReactDOM from 'react-dom';

//ESCMA 6
import App from './App';
//JavaScript
//const App = require('./App');

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; 

//My CSS
import './style.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<h1> React Js</h1> , document.getElementById('root'));
registerServiceWorker();

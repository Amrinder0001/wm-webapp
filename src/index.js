import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

/* Main index file which loads the App component */
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

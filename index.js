import React from 'react';
import ReactDOM from 'react-dom';
import './index1.css';
import './index.css';
import App from './App';
import Nav from './Nav';
import Main from './Main';
import Introduce from './Introduce';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('headpic'));
ReactDOM.render(<Nav />, document.getElementById('navigation'));
ReactDOM.render(<Introduce />, document.getElementById('introduce'));
ReactDOM.render(<Main />, document.getElementById('main'));
registerServiceWorker();

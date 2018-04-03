import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import store1 from './store01.js'

ReactDOM.render(<Provider store={store1} >
    <App/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();

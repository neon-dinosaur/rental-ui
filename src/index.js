import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import './index.css';

registerServiceWorker();

const Root = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

render(<Root />, document.getElementById('root'));
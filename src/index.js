import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match } from 'react-router';

import registerServiceWorker from './registerServiceWorker';

import App from './components/App';

registerServiceWorker();

const Root = () => {
    return (
    <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={App} />
        </div>
      </BrowserRouter>
    )
}

render(<Root />, document.getElementById('root'));
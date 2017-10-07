import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import App from './components/App';

registerServiceWorker();

const Root = () => {
  return (
    <BrowserRouter>
        <App />
    </BrowserRouter>
  )
}

render(<Root />, document.getElementById('root'));
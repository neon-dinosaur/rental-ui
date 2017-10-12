import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './Navigation';
import HomeView from './HomeView';
import ProductView from './ProductView';
import Footer from './Footer';

const App = () => (
    <div className="app">
        <Navigation activePage='Home' />
        <Switch>
            <Route exact path='/' component={HomeView} />
            <Route path='/product/:productId' component={ProductView} />
        </Switch>
        <Footer />
    </div>
);

export default App;
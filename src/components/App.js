import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './Navigation'
import HomeView from './HomeView'
import ProductView from './ProductView'

const App = () => (
    <div className="app">
        <Navigation />
        <Switch>
            <Route exact path='/' component={HomeView} />
            <Route path='/product/:productId' component={ProductView} />
        </Switch>
    </div>
)

export default App;
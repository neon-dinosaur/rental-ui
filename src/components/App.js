import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeView from './HomeView'
import ProductView from './ProductView'

const App = () => (
    <Switch>
      <Route exact path='/' component={HomeView}/>
      <Route path='/product/:productId' component={ProductView}/>
    </Switch>
)

export default App;

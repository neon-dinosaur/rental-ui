import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './Navigation';
import HomeView from './HomeView';
import ProductView from './ProductView';
import Footer from './Footer';

class App extends React.Component {
    constructor() {
        super();
        this.state = { isLoading: true };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ isLoading: false }), 1000);
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className="loading loading-lg"></div>
            );
        }

        return (
            <div className="app">
                <div className="container grid-xl">
                    <Navigation activePage='Home' />
                    <Switch>
                        <Route exact path='/' component={HomeView} />
                        <Route path='/product/:productId' component={ProductView} />
                    </Switch>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
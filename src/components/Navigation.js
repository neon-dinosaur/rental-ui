import React, { Component } from 'react';
import PropTypes from 'prop-types';

const menuItems = [
    'Home',
    'About',
    'Rentals',
    'Lessons',
    'Beach Cam',
    'Cart'
];

class Navigation extends Component {
    static propTypes = {
        activePage: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            activePage: props.activePage
        }
    }

    isActive(menuItem) {
        return (menuItem === this.state.activePage) ? 'active' : '';
    }

    onClick = (e) => (
        this.setState({ activePage: e.currentTarget.text })
    )

    render() {
        return (
            <header className="navigation navbar">
                <section className="navbar-section">
                    <h2 className="logo">
                        <i className="icon icon-photo"></i>
                        Ocean Rentals
                    </h2>
                </section>
                <section className="navbar-section">
                    <ul>
                        {
                            menuItems.map(
                                (menuItem, index) => <a key={index}
                                    className={`menu-item btn btn-link ${this.isActive(menuItem)}`}
                                    onClick={this.onClick}
                                >
                                    {menuItem}
                                </a>
                            )
                        }
                    </ul>
                </section>
            </header>
        );
    }
}

export default Navigation;
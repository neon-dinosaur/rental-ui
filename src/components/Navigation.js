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
    isActive(menuItem) {
        return (menuItem === this.props.activePage) ? 'active' : '';
    }

    render() {
        return (
            <div className="navigation">
                <ul>
                    {
                        menuItems.map(
                            (menuItem, index) => <li className={`menu-item ${this.isActive(menuItem)}`} key={index}>{menuItem}</li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

Navigation.PropTypes = {
    activePage: PropTypes.number
};

export default Navigation;
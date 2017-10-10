import React from 'react';

const Navigation = () => {
    const menuItems = [
        'Home',
        'About',
        'Rentals',
        'Lessons',
        'Beach Cam',
        'Cart'
    ];
    return (
        <div className="mainNavigation" >
            <ul className="navUL">
                {
                    menuItems.map(
                        (menuItem, index) => <li key={index}>{menuItem}</li>
                    )
                }
            </ul>
        </div>
    );
};

export default Navigation;
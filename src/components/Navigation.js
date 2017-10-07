import React from 'react';

class Navigation extends React.Component{
    reder(){
        return(
            <div class="mainNavigation">
                <ul class="navUL">
                    <li class="navItem">Home</li>
                    <li class="navItem">About</li>
                    <li class="navItem">Rentals</li>
                    <li class="navItem">Lessons</li>
                    <li class="navItem">Beach Cam</li>
                    <li class="navItem">Cart</li>
                </ul>
            </div>
        )
    }

}

export default Navigation;
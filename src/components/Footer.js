import React from 'react';

const contactInfo = [
    "2017 Ocean Rentals Ltd",
    "577 Sandbridge Road, Virginia Beach, VA 23456",
    "757.721.6210",
    "SurfAndAdventure@gmail.com"
];

const Footer = () => (
    <div className="footer">
        <ul>
            {
                contactInfo.map(
                    (content, index) => (<li className="footer-content" key={index}>{content}</li>)
                )
            }
        </ul>
    </div>
);

export default Footer;
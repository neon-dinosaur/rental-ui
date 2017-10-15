import React from 'react';

const contactInfo = [
    {value: "2017 Ocean Rentals Ltd", width: "col-3"},
    {value: "577 Sandbridge Road, Virginia Beach, VA 23456", width: "col-4"},
    {value: "757.721.6210", width: "col-2"},
    {value: "SurfAndAdventure@gmail.com", width: "col-3"}
];

const Footer = () => (
    <div className="footer">
        <div className="columns col-oneline">
            {
                contactInfo.map(
                    (content, index) => (<p key={index} className={`footer-content column ${content.width}`}>{content.value}</p>)
                )
            }
        </div>
    </div>
);

export default Footer;
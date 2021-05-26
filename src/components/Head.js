import React from 'react';
import '../styles/head.css';
import { Envelope, Instagram, MapMarker, Snapchat } from '../assets/icons';

function Head() {
    return (
        <header>
            <div className="ikoner">
                <a href="https://www.instagram.com/">
                    <Instagram />
                </a>
                <a href="https://www.instagram.com/">
                    <Snapchat />
                </a>
                <a href="https://www.instagram.com/">
                    <Envelope />
                </a>
            </div>
            <div className="lokasjon">
                <p>
                    Ønsker du å være med på festivalen? Kom til <MapMarker /> <a href="https://goo.gl/maps/P2bteWbUkNDrCYMf6"> Ringgata 235, 2315 Hamar </a>
                </p>
            </div>
        </header>
    )
}

export default Head

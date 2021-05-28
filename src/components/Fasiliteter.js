import React from 'react'
import '../styles/fasiliteter.css'
import tre_d_printer from '../assets/images/Fasiliteter/3d_printer.svg';
import Code from '../assets/images/Fasiliteter/Code.svg';
import Laptop from '../assets/images/Fasiliteter/Laptop.svg';
import VR from '../assets/images/Fasiliteter/VR.svg';

function Fasiliteter() {
    return (
        <div className="fasiliteter">
            <div className="overskrifter">
                <h1>
                    Fasiliteter
                </h1>
                <h2>
                    Dette er det vi har å tilby av workshops.
                </h2>
            </div>
            <div className="grid">
                <div className="fasiliteter-inner">
                    <img src={VR} alt="Portrett av Adam Shimler" />
                    <h2>
                        VR
                    </h2>
                </div>
                <div className="fasiliteter-inner">
                    <img src={tre_d_printer} alt="Portrett av Aud Ane Ying" />
                    <h2>
                        3D printing
                    </h2>
                </div>
                <div className="fasiliteter-inner">
                    <img src={Code} alt="Portrett av Hong Fjong" />
                    <h2>
                        Koding
                    </h2>
                </div>
                <div className="fasiliteter-inner">
                    <img src={Laptop} alt="Portrett av Lindsey Robertson" />
                    <h2>
                        Sterke pcer for koding av spill og spilling.
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Fasiliteter

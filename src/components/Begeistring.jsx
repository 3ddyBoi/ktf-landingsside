import React from "react";
import "../styles/begeistring.css";
import ikt_elev from "../assets/images/ikt_elev.jpg";
import tre_d_printer from "../assets/images/3d_printer.jpg";

function Begeistring() {
  return (
    <div className="begeistring">
      <div className="overskrifter">
        <h1 className="overskrifter-h1">Begeistring for teknologi.</h1>
        <h2 className="overskrifter-h2">Vår målsetting</h2>
      </div>
      <div className="outer-grid">
        <div className="row-1">
          <div className="ikt_elev">
            <img src={ikt_elev} alt="elev som jobber med ikt." />
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              vestibulum turpis urna, id maximus elit sagittis ut. Morbi in
              hendrerit nisl. Ut tempus mi ligula.
            </p>
            <p className="paragraph">
              Proin iaculis, sem vel molestie dictum, quam nulla ultrices
              ligula, eget hendrerit mauris felis non ex. Nulla finibus ut
              mauris a posuere. Morbi dapibus, tortor.
            </p>
          </div>
        </div>
        <div className="row-2">
          <img src={tre_d_printer} alt="elev som bruker 3d-printer" />
          <p className="paragraph">
            Maecenas eget feugiat felis. Fusce pulvinar tortor erat, luctus
            porta ipsum lacinia vel. Praesent imperdiet augue fermentum erat
            aliquam laoreet. Nulla mollis pretium enim, id luctus augue
            vulputate vel. Fusce lorem mi, tincidunt non magna at, efficitur
            tempor ex. Phasellus.
          </p>
          <p className="paragraph">
            Vestibulum euismod congue commodo. Ut auctor scelerisque suscipit.
            Vestibulum sodales, nisi sed ullamcorper faucibus, ante ipsum
            malesuada justo, at facilisis massa sem ac diam. Nulla gravida,
            lacus at suscipit congue, massa sem interdum velit, a iaculis tortor
            nisl et mauris. Donec dignissim suscipit odio ut.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Begeistring;

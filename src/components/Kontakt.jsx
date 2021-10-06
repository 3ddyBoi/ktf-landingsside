import React from "react";
import "../styles/kontakt.css";

function Kontakt() {
  return (
    <div className="Kontakt">
      <div className="overskrifter">
        <h1 className="overskrifter-h1">Her kan du kotakte oss</h1>
        <h2 className="overskrifter-h2">Hvordan du kan finne oss</h2>
      </div>
      <div className="outer-grid">
        <div className="row-1">
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vestibulum turpis urna, id maximus elit sagittis ut. Morbi in
            hendrerit nisl. Ut tempus mi ligula. Proin iaculis, sem vel molestie
            dictum, quam nulla ultrices ligula, eget hendrerit mauris felis non
            ex. Nulla finibus ut mauris a posuere. Morbi dapibus, tortor.
          </p>
          <p className="paragraph">Festivalens tider: 10. Juni 9:00-15:15</p>
          <div className="paragraph-section">
            <p className="paragraph-b">Hamar:</p>
            <p className="paragraph-s">2315, Ringgata 235.</p>
          </div>
          <div className="paragraph-section">
            <p className="paragraph-b">Tlf:</p>
            <a href="tel:+62544200">
              <p className="paragraph-s">62 54 42 00.</p>
            </a>
          </div>
          <div className="paragraph-section">
            <p className="paragraph-b">E-Post:</p>
            <a href="mailto:ktf@hedmark.org">
              <p className="paragraph-s">Epost: ktf@hedmark.org</p>
            </a>
          </div>
        </div>
        <div className="row-2">
          <iframe
            title="Google Maps Hamar Katedralskole. Ringgata 235, 2315 Hamar"
            className="IFrame_maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.4181599267121!2d11.053791033375632!3d60.80634455276191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x21fd22fc8f467603!2sHamar%20Cathedral%20School!5e0!3m2!1sen!2sno!4v1622204471337!5m2!1sen!2sno"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;

import React, { useState } from "react";
import '../styles/pamelding.css'
import VR from "../assets/images/design-element-eivind.png";

function Pamelding() {
  const [value, setValue] = useState('')
  const changeHandler = ({ target }) => {
    setValue(target.value.toUpperCase())
  }

  return (
    <div className="Pamelding-side" id="Pamelding">
      <div className="Art-Pamelding">
        <img src={VR} alt="Portrett av Adam Shimler" />
      </div>
      <div className="overskrifter-form">
        <div className="overskrifter">
          <h1>Meld deg på festivalen</h1>
          <h2>Fyll inn følgende informasjon for å delta.</h2>
        </div>
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSetce8hUo7ZLBK-m7eHbqldRQC3Xe14F31f3oi5KXzDat55iA/formResponse">
          <div className="Email">
            <input
              type="email"
              name="emailAddress"
              required
              placeholder="E-Post"
            />
          </div>
          <div className="Fornavn">
            <input
              type="text"
              name="entry.213683012"
              required
              placeholder="Fornavn"
            />
          </div>
          <div className="Etternavn">
            <input
              type="text"
              name="entry.474953985"
              required
              placeholder="Etternavn"
            />
          </div>
          <div className="Klasse">
            <input
              type="text"
              name="entry.437377524"
              required
              placeholder="Klasse (1STA)"
              maxlength="4"
              value={value}
              onChange={changeHandler}
            />
          </div>
          <div className="meld-pa">
            <button type="submit">SEND</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Pamelding;

import React from "react";

function Pamelding() {
  return (
    <div>
      <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSetce8hUo7ZLBK-m7eHbqldRQC3Xe14F31f3oi5KXzDat55iA/formResponse">
        <div>
          <label>Your Email</label>
          <input
            type="email"
            name="emailAddress"
            required
            placeholder="OlaNordmann@hedmark.org"
          />
        </div>
        <div>
          <label>Fornavn</label>
          <input
            type="text"
            name="entry.213683012"
            required
            placeholder="Ola"
          />
        </div>
        <div>
          <label>Etternavn</label>
          <input
            type="text"
            name="entry.474953985"
            required
            placeholder="Nordmann"
          />
        </div>
        <div>
          <select name="entry.1403831812" id="options" required>
            <option value="select" selected disabled>
              Velg
            </option>
            <option value="Option 1">Velg</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Pamelding;

import React from "react";
import "../styles/team.css";
import Adam_Shimler from "../assets/images/Team/Adam Shimler.jpg";
import Aud_Ane_Ying from "../assets/images/Team/Aud Ane Ying.jpg";
import Hong_Fjong from "../assets/images/Team/Hong Fjong.jpg";
import Lindsey_Robertson from "../assets/images/Team/Lindsey Robertson.jpg";
import Robert_Cubiza from "../assets/images/Team/Robert Cubiza.jpg";
import Siw_Jacobsen from "../assets/images/Team/Siw Jacobsen.jpg";
import Tuva_Halvorsen from "../assets/images/Team/Tuva Halvorsen.jpg";
import William_Lundhø from "../assets/images/Team/William Lundhø.jpg";

function Team() {
  return (
    <div className="team">
      <div className="overskrifter">
        <h1>Vårt lag</h1>
        <h2>
          Dette er våre eksperter som vil være på festivalen til en hver tid.
        </h2>
      </div>
      <div className="grid">
        <div className="team-inner row-top">
          <img src={Adam_Shimler} alt="Portrett av Adam Shimler" />
          <h2>Adam Shimler</h2>
          <p>Lærer IKT og MP</p>
        </div>
        <div className="team-inner row-top">
          <img src={Aud_Ane_Ying} alt="Portrett av Aud Ane Ying" />
          <h2>Aud Ane Ying</h2>
          <p>Lærer IKT og MP</p>
        </div>
        <div className="team-inner row-top">
          <img src={Hong_Fjong} alt="Portrett av Hong Fjong" />
          <h2>Hong Fjong</h2>
          <p>Lærer IKT</p>
        </div>
        <div className="team-inner row-top">
          <img src={Lindsey_Robertson} alt="Portrett av Lindsey Robertson" />
          <h2>Lindsey Robertson</h2>
          <p>Elev IKT</p>
        </div>
        <div className="team-inner row-bottom">
          <img src={Robert_Cubiza} alt="Portrett av Robert Cubiza" />
          <h2>Robert Cubiza</h2>
          <p>Elev IKT</p>
        </div>
        <div className="team-inner row-bottom">
          <img src={Siw_Jacobsen} alt="Portrett av Siw Jacobsen" />
          <h2>Siw Jacobsen</h2>
          <p>Lærer IKT og MP</p>
        </div>
        <div className="team-inner row-bottom">
          <img src={Tuva_Halvorsen} alt="Portrett av Tuva Halvorsen" />
          <h2>Tuva Halvorsen</h2>
          <p>Ansatt IKT</p>
        </div>
        <div className="team-inner row-bottom">
          <img src={William_Lundhø} alt="Portrett av William Lundhø" />
          <h2>William Lundhø</h2>
          <p>Ansatt IKT</p>
        </div>
      </div>
    </div>
  );
}

export default Team;

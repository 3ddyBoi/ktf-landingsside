import React from "react";
import logo_lang from "../assets/images/logo_lang.svg";
import "../styles/nav.css";

function Nav() {
  return (
    <nav id="nav">
      <a className="logo" href="#nav">
        <img src={logo_lang} alt="Logo Kattas Teknologiske Festival" />
      </a>
      <a className="Kattas-Teknologiske-Festival" href="#fasiliteter">
        Festivalen
      </a>
      <a className="Pamelding" href="#Pamelding">
        Påmelding
      </a>
      <a className="Hamar-Katedralskole" href="https://www.hamar-katedral.vgs.no/hovedmeny/om-skolen/om-hamar-katedralskole/" target="blank">
        Hamar Katedralskole
      </a>
    </nav>
  );
}

export default Nav;

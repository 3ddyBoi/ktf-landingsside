import React from 'react'
import logo_lang from '../assets/images/logo_lang.svg'
import '../styles/nav.css'

function Nav() {
    return (
        <nav>
            <a className="logo" href="vg.no">
                <img src={logo_lang} alt="Logo Kattas Teknologiske Festival" />
            </a>
            <a className="Kattas-Teknologiske-Festival" href="vg.no">
                Festivalen
            </a>
            <a className="Pamelding" href="vg.no">
                Påmelding
            </a>
            <a className="Hamar-Katedralskole" href="vg.no">
                Hamar Katedralskole
            </a>
        </nav>
    )
}

export default Nav

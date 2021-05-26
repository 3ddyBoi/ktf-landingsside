import React from 'react'
import '../styles/nav.css'

function Nav() {
    return (
        <nav>
            <a className="Logo" href="vg.no">
                LOGO
            </a>
            <a className="Kattas-Teknologiske-Festival" href="vg.no">
                Kattas Teknologiske Festival
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

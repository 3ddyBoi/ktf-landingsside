import React from 'react'
import '../styles/footer.css'
import { Envelope, Instagram, Snapchat } from '../assets/icons'

function Footer() {
    return (
<div className="Footer">
      <div className="sosiale-medier">
        <a href="https://www.instagram.com/ktf/" target="blank">
          <Instagram className="icon" />
        </a>
        <a href="https://www.snapchat.com/add/ktf" target="blank">
          <Snapchat className="icon" />
        </a>
        <a href="mailto:ktf@gmail.com">
          <Envelope className="icon" />
        </a>
      </div>
      <div className="contact">
        <p className="phone">
          <a href="tel:+62544200">Telefon: 62 54 42 00</a>
        </p>
        <p className="mail">
          <a href="mailto:ktf@hedmark.org">
            Epost: ktf@hedmark.org
          </a>
        </p>
        <p className="location">2315 Hamar</p>
        <p className="copyright_tekst">© Edvard Høiby</p>
      </div>
    </div>
    )
}

export default Footer

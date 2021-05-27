import React from 'react'
import '../styles/footer.css'
import { Envelope, Instagram, Snapchat } from '../assets/icons'

function Footer() {
    return (
<div className="Footer">
      <div className="sosiale-medier">
        <a href="https://github.com/3ddyBoi" target="blank">
          <Instagram className="Github-icon icon" />
        </a>
        <a href="https://www.snapchat.com/add/ktf" target="blank">
          <Snapchat className="Snapchat-icon icon" />
        </a>
        <a href="mailto:ktf@gmail.com">
          <Envelope className="Instagram-icon icon" />
        </a>
      </div>
      <div className="contact">
        <p className="phone">
          <a href="tel:+4794799702">Telefon: 947 99 702</a>
        </p>
        <p className="mail">
          <a href="mailto:edvardhoiby@outlook.com">
            Epost: edvardhoiby@outlook.com
          </a>
        </p>
        <p className="location">2380 Brumunddal</p>
        <p className="copyright_tekst">© Edvard Høiby</p>
      </div>
    </div>
    )
}

export default Footer


'use client'
//import './info.css'
import { FaInstagram, FaTwitter, FaFacebook,} from 'react-icons/fa';
import './footer.css'
const Footer = () => {
    return (

        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer-columns">
                    <div className="footer-column">
                        <div className="footer-title">Élégance Capillaire</div>
                        <p>
                        Venez vivre une expérience capillaire exceptionnelle chez Elegance Capillaire, là où la perfection rencontre l'élégance.                        </p>
                    </div>
                    <div className="footer-column">
                        <div className="footer-title">Contact info</div>
                        <p>
                        31 Rue Jonh Doe 94200, Ivry-Sur-Seine <br />
                        01.68.32.58.16<br />
                            <a href="mailto:contact@elegancecapillaire.com">contact@elegancecapillaire.com</a>
                            <p className='footer_network'> <a><FaInstagram size={25} /> </a>
                                <a><FaTwitter size={25} /></a>
                                <a><FaFacebook size={25} /></a>
                            </p>
                        </p>
                    </div>
                    <div className="footer-column">
                        <div className="footer-title">Horaires</div>
                        <ul>
                            <li>Du Lundi au Samedi | 10h - 21h30</li>
                            <li> Le Dimanche | 11h - 20h30 </li>
                            <li>Jour Férier | 11h - 19h</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-credits">
                    <span>2024 Élégance Capillaire</span>. Tous droits réservés.
                </div>
            </div>
        </footer>
    )
}

export default Footer
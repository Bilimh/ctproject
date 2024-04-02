
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
                        <div className="footer-title">Aluna Beauty Salon</div>
                        <p>
                        Venez vivre une expérience capillaire exceptionnelle chez Aluna Beauty Salon, là où la perfection rencontre l'élégance.                        </p>
                    </div>
                    <div className="footer-column">
                        <div className="footer-title">Contact info</div>
                        <p>
                        Brest Place de Siam <br />
                        01.68.32.58.16<br />
                            <a href="mailto:contact@elegancecapillaire.com">alunabeautysalon@gmail.com</a>
                            <p className='footer_network'> <a><FaInstagram size={25} /> </a>
                                <a><FaTwitter size={25} /></a>
                                <a><FaFacebook size={25} /></a>
                            </p>
                        </p>
                    </div>
                    <div className="footer-column">
                        <div className="footer-title">Horaires</div>
                        <ul>
                            <li>Du Lundi au Vendredi | 9h - 12h </li>
                            
                            <li>Après midi | 13h30 - 17h </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-credits">
                    <span>2024 Aluna Beauty Salon</span>. Tous droits réservés.
                </div>
            </div>
        </footer>
    )
}

export default Footer
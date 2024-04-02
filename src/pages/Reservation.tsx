//reservation.tsx
import './reservation.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

interface ConfirmationMessageProps {
    service: string;
    date: string;
    horaires: string;
    fullname: string;
    email: string;
    phone: string;
    //onClose: () => void;
}

const ConfirmationMessage: React.FC<ConfirmationMessageProps> = ({ service, date, horaires, fullname, email, phone}) => {
    const navigate = useNavigate(); // Utiliser useNavigate pour accéder à la fonction de navigation

    // Fonction pour gérer la redirection vers la page d'accueil
    const handleClose = () => {
        navigate('/'); // Rediriger vers la page d'accueil
    };
    
    return (
        <div className="confirmation-modal">
            <div className="confirmation-content">
                <h3 className='title_recup'>Récapitulatif de la réservation</h3>
                <p>Merci pour votre réservation chez Aluna Beauty Salon!</p>
                <p>Service : {service}</p>
                <p>Date : {date}</p>
                <p>Horaires : {horaires}</p>
                <p>Nom : {fullname}</p>
                <p>Email : {email}</p>
                <p>Téléphone : {phone}</p>
                <p>Vous allez recevoir un e-mail de confirmation avec les détails de votre réservation.</p>
                <button onClick={handleClose}>Fermer</button>
            </div>
        </div>
    );
};

const Reservation = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [reservationInfo, setReservationInfo] = useState({
        service: '',
        date: '',
        horaires: '',
        fullname: '',
        email: '',
        phone: ''
    });

    // Fonction pour gérer le clic sur le bouton "Réserver"
    const handleReservation = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault(); // Empêche le formulaire de se soumettre

        // Récupérer les valeurs des champs du formulaire
        const service = (document.querySelector('select[name="service"]') as HTMLSelectElement).value;
        const date = (document.querySelector('input[name="date"]') as HTMLInputElement).value;
        const horaires = (document.querySelector('select[name="horaires"]') as HTMLSelectElement).value;
        const fullname = (document.querySelector('input[name="fullname"]') as HTMLInputElement).value;
        const email = (document.querySelector('input[name="email"]') as HTMLInputElement).value;
        const phone = (document.querySelector('input[name="phone"]') as HTMLInputElement).value;

        // Mettre à jour l'état de la réservation
        setReservationInfo({ service, date, horaires, fullname, email, phone });
        setShowConfirmation(true);
    };

    return (
        <section className="reservation" id="reservation">
            <div className="container">
                <div className={`block block-centered block-last ${showConfirmation ? 'hidden' : ''}`}>
                    <div className="block-body">
                        <h2 className="title"><span>Prendre RDV</span></h2>
                        <p className='white'>
                            Réservez votre prochain rendez-vous chez Aluna Beauty Salon! Remplissez le formulaire ci-dessous pour une expérience de coiffure exceptionnelle. Merci de nous faire confiance!
                        </p>
                        <form action="#" className="reservation-form">
                            <div className="reservation-form-row">
                                <select name="service">
                                    <option value="coupe">Coupe de cheveux</option>
                                    <option value="coloration">Coloration</option>
                                    <option value="brushing">Brushing</option>
                                    <option value="soin">Soin capillaire</option>
                                    <option value="coiffure">Coiffure événementielle</option>
                                    <option value="domicile">Service à domicile</option>
                                    <optgroup label="Services pour hommes">
                                        <option value="taille-de-barbe">Taille de barbe</option>
                                        <option value="rasage">Rasage traditionnel</option>
                                        <option value="coiffure-homme">Coiffure homme</option>
                                    </optgroup>
                                    <optgroup label="Services pour enfants">
                                        <option value="coupe-enfant">Coupe enfant</option>
                                        <option value="coiffure-enfant">Coiffure enfant</option>
                                    </optgroup>
                                    <optgroup label="Services pour femmes">
                                        <option value="manucure">Manucure</option>
                                        <option value="pédicure">Pédicure</option>
                                        <option value="épilation">Épilation</option>
                                        <option value="maquillage">Maquillage</option>
                                        <option value="mèches">Mèches</option>
                                    </optgroup>
                                </select>

                                <input type="date" name="date" />
                                <select name="horaires">
                                    <option value="hh:mns">hh:mns</option>
                                    <option value="11:30">11:30</option>
                                    <option value="13:45">13:45</option>
                                    <option value="15:45">15:45</option>
                                </select>
                            </div>
                            <div className="reservation-form-row">
                                <input type="text" name="fullname" placeholder="Nom *" required />
                                <input type="email" name="email" placeholder="Email *" required />
                                <input type="tel" name="phone" placeholder="Téléphone" />
                            </div>

                            <button className="button" onClick={handleReservation}>Réserver</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* Affichage de la confirmation */}
            {showConfirmation &&
                <ConfirmationMessage
                    service={reservationInfo.service}
                    date={reservationInfo.date}
                    horaires={reservationInfo.horaires}
                    fullname={reservationInfo.fullname}
                    email={reservationInfo.email}
                    phone={reservationInfo.phone}
                />
            }
        </section>
    )
}

export default Reservation
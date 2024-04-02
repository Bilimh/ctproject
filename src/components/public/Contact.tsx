import React, { useState } from 'react';
import './contact.css'; // Assurez-vous d'importer votre fichier CSS

const Contact: React.FC = () => {
  // State pour stocker les valeurs des champs du formulaire
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Gérer le soumission du formulaire
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Vous pouvez envoyer les données du formulaire à votre serveur ou effectuer toute autre logique de votre choix ici
    alert('Message envoyé avec succès! Nous vous répondrons dès que possible. Merci!');
    // Réinitialiser les champs du formulaire après la soumission
    setNom('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="section4">
    
      <div className="contact_text">
      Contactez-nous pour prendre rendez-vous ou pour toute question.
      </div>
      <form onSubmit={handleSubmit} className="contact_form">
        <div className="contact_item">
          <div className="name">
            <span className="name_item">Prénom</span>
            <input
              type="text"
              name="name"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
            />
          </div>
          <div className="email">
            <span className="email_item">Email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="textarea">
          <textarea
            placeholder="Entrez votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="submit_button">
          <input type="submit" value="Envoyer" />
        </div>
      </form>
    </section>
  );
};

export default Contact;

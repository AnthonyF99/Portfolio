import styles from '../../styles/contact.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Chrome from '../../../public/assets/chromecontact.jpg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(''); // Réinitialiser le message de statut

    try {
      await emailjs.send(
        'service_t91hv8g', // ID du service
        'template_39o3nuj', // ID du template
        formData,
        'dWM9C5n7598LcQ8AT', // Clé publique de l'utilisateur
      );
      setStatusMessage('Message sent successfully!');
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      setStatusMessage('Failed to send message.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.asidecontainer}>
        <Image src={Chrome} width={545} height={1024} alt="Photo" />
      </div>
      <div className={styles.contactcontainer}>
        <form onSubmit={handleSubmit} className={styles.contactform}>
          <p className={styles.title}>Contactez moi !</p>
          <div className={styles.namecontainer}>
            <label htmlFor="name">Votre nom</label>
            <input
              className={styles.input}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.mailcontainer}>
            <label htmlFor="email">Votre email</label>
            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.objectcontainer}>
            <label htmlFor="subject">Objet</label>
            <input
              className={styles.input}
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.messagecontainer}>
            <label htmlFor="message">Message</label>
            <textarea
              className={styles.textarea}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.submitbtn}>
            Envoyez
          </button>
          {statusMessage && <p>{statusMessage}</p>}
        </form>
      </div>
    </div>
  );
}

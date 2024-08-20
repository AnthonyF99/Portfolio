import styles from '../../styles/contact.module.scss'
import Image from 'next/image'
import { useState } from 'react';
import Chrome from '../../../public/assets/chromecontact.jpg'


export default function Contact() {
        const [formData, setFormData] = useState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value
          });
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          // Ici, tu peux gérer l'envoi du formulaire, par exemple avec un appel API.
          console.log(formData);
          // Réinitialiser le formulaire après l'envoi
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        };
    return (
        <div className={styles.container}>
            <div className={styles.asidecontainer}>
                <Image
                    src={Chrome}
                    width={545}
                    height={1024}
                    alt="Photo"
                />
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
            </form>
        </div>
    </div>
    );
  };
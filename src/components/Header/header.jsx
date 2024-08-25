import styles from '../../styles/header.module.scss';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Header({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // Ajoute ou retire la classe pour bloquer le défilement du corps
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';

    // Nettoyage lors de la démonstration du composant
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <header>
      <div className={styles.header}>
        <ul className={menuOpen ? `${styles.links} ${styles.open}` : styles.links}>
          <li className={activeSection === 'accueil' ? styles.active : ''}>
            <Link href='/#accueil'>Accueil</Link>
          </li>
          <li className={activeSection === 'a-propos' ? styles.active : ''}>
            <Link href='/#a-propos'>À propos</Link>
          </li>
          <li className={activeSection === 'skills' ? styles.active : ''}>
            <Link href='/#skills'>Skills</Link>
          </li>
          <li className={activeSection === 'projets' ? styles.active : ''}>
            <Link href='/#projets'>Projets</Link>
          </li>
          <li className={activeSection === 'cv' ? styles.active : ''}>
            <Link href='/#cv'>CV</Link>
          </li>
          <li className={activeSection === 'veille-technologique' ? styles.active : ''}>
            <Link href='/#veille-technologique'>Veille Technologique/Blog</Link>
          </li>
          <li className={activeSection === 'contact' ? styles.active : ''}>
            <Link href='/#contact'>Contact</Link>
          </li>
        </ul>
        <div className={styles.icon} onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </header>
  );
}

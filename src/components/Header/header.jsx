import styles from '../../styles/header.module.scss';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { CiGlobe } from 'react-icons/ci';

export default function Header({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    // Ferme le menu uniquement si la largeur de l'écran est inférieure à 576px (mobile)
    if (window.innerWidth <= 576) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    // Ajoute ou retire la classe pour bloquer le défilement du corps
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <header>
      <div className={styles.header}>
        <ul
          className={menuOpen ? `${styles.links} ${styles.open}` : styles.links}
        >
          <li
            className={activeSection === 'accueil' ? styles.active : ''}
            onClick={handleLinkClick}
          >
            <Link href="/#accueil">Accueil</Link>
          </li>
          <li
            className={activeSection === 'a-propos' ? styles.active : ''}
            onClick={handleLinkClick}
          >
            <Link href="/#a-propos">À propos</Link>
          </li>
          <li
            className={activeSection === 'skills' ? styles.active : ''}
            onClick={handleLinkClick}
          >
            <Link href="/#skills">Skills</Link>
          </li>
          <li
            className={activeSection === 'projets' ? styles.active : ''}
            onClick={handleLinkClick}
          >
            <Link href="/#projets">Projets</Link>
          </li>
          <li
            className={activeSection === 'cv' ? styles.active : ''}
            onClick={handleLinkClick}
          >
            <Link href="/#cv">CV</Link>
          </li>
          <li
            className={
              activeSection === 'veille-technologique' ? styles.active : ''
            }
            onClick={handleLinkClick}
          >
            <Link href="/#veille-technologique">Veille Technologique/Blog</Link>
          </li>
          <li
            className={activeSection === 'contact' ? styles.active : ''}
            onClick={handleLinkClick}
          >
            <Link href="/#contact">Contact</Link>
          </li>
          <li
            className={activeSection === 'contact' ? styles.active : ''}
            onClick={handleLinkClick}
          >
            <Link href="/hobbies">Hobbies</Link>
          </li>
          <li
            className={activeSection === 'lang' ? styles.active : ''}
            onClick={handleLinkClick}
          >
            <button>
              <CiGlobe />
            </button>
          </li>
        </ul>
        <div className={styles.icon} onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </header>
  );
}

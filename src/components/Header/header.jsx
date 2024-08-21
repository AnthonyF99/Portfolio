import styles from '../../styles/header.module.scss';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Header() {
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
          <li><Link href='/#accueil'>Accueil</Link></li>
          <li><Link href='/#a-propos'>A propos</Link></li>
          <li><Link href='/#skills'>Skills</Link></li>
          <li><Link href='/#projets'>Projets</Link></li>
          <li><Link href='/#cv'>CV</Link></li>
          <li><Link href='/#veille-technologique'>Veille Technologique/Blog</Link></li>
          <li><Link href='/#contact'>Contact</Link></li>
        </ul>
        <div className={styles.icon} onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </header>
  );
}

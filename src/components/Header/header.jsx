import styles from '../../styles/header.module.scss'
import Link from 'next/link'
import { FaBars } from "react-icons/fa6";

export default function Header() {
    return (
      <header>
        <div className={styles.header}>
            <ul className={styles.links}>
                <li><Link href='/#accueil'>Accueil</Link></li>
                <li><Link href='/#a-propos'>A propos</Link></li>
                <li><Link href='/#skills'>Skills</Link></li>
                <li><Link href='/#projets'>Projets</Link></li>
                <li><Link href='/#cv'>CV</Link></li>
                <li><Link href='/#veille-technologique'>Veille Technologique/Blog</Link></li>
                <li><Link href='/#contact'>Contact</Link></li>
                <li className={styles.icon}><FaBars/></li>
            </ul>
        </div>
      </header>
    );
  }
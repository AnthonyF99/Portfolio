import styles from '../../styles/footer.module.scss';
import Link from 'next/link';

export default function Header() {
  return (
    <div className={styles.footerContent}>
      <div className={styles.footerMiddle}>
        <div className={styles.name}>
          <h3>Fontaine Anthony</h3>
          <p>Développeur Web | Passionné de technologie</p>
        </div>

        <ul className={styles.links}>
          <li>
            <Link href="/#a-propos">À propos</Link>
          </li>
          <li>
            <Link href="/#projets">Projets</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
        <ul className={styles.socials}>
          <li>
            <Link href="https://github.com/AnthonyF99">GitHub</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/anthony-fontaine-75b959187/">
              LinkedIn
            </Link>
          </li>
          <li>
            <Link href="mailto:anthony.fontaine454@gmail.com">Email</Link>
          </li>
        </ul>
      </div>
      <div className={styles.separator}>
        <hr className={styles.line} />
        <span className={styles.separatorText}>KAIZEN</span>
        <hr className={styles.line} />
      </div>
      <div className={styles.footerBottom}>
        <p>© 2024 Fontaine Anthony. Tous droits réservés.</p>
        <p>Basé à La Réunion | Disponible à distance</p>
      </div>
    </div>
  );
}

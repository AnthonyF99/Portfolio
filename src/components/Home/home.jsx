import styles from '../../styles/home.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className={styles.presentation}>
      <h1>Mon nom est, </h1>
      <h2>Je suis, Développeur web</h2>
      <div className={styles.cta}>
        <Link href="/#contact">
          <button>Contactez moi</button>
        </Link>
        <Link href="/#contact">
          <button>Allez voir mes projets</button>
        </Link>
      </div>
    </div>
  );
}

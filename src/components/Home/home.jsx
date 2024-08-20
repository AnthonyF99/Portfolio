import styles from '../../styles/home.module.scss'

export default function Header() {
    return (
        <div className={styles.presentation}>
            <h1>Fontaine Anthony</h1>
            <h2>Développeur web junior</h2>
            <p>Diplomé niveau 5 bac+2</p>
        </div>
    );
  }
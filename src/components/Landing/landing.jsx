import styles from '../../styles/landing.module.scss'
import Link from 'next/link'
import { FaChevronDown } from "react-icons/fa6";

export default function Landing() {
    return (
        <div className={styles.container}>
            <div className={styles.scrollcontainer}>
                <ul className={styles.link}>
                    <li><Link href='#accueil'>Scroll</Link></li>
                    <li className={styles.icon}><Link href='/'><FaChevronDown /></Link></li>
                </ul>
            </div>
        </div>
    );
  }
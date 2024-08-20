import styles from '../../styles/blogveille.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Redhair from '../../../public/assets/redhair.jpg'
import Horns from '../../../public/assets/horns.jpg'


export default function Blogveille({image, title, description, category}) {
    return (
        <div className={styles.container}>
          <div className={styles.cards}>
            <div className={styles.card}>
            <Image
                src={Redhair}
                width={277}
                height={200}
                alt="Photo"
              />
              <div className={styles.cardinfo}>
                <p>{title}</p>
                <p>{description}</p>
              </div>
                <div className={styles.category}><p>{category}</p></div>
            </div>
            <div className={styles.card}>
            <Image
                src={Horns}
                width={277}
                height={200}
                alt="Photo"
                />
              <div className={styles.cardinfo}>
                <p>Tout sur les flexbox en 5 minutes</p>
                <p>Sipnosis de l'article en question</p>
              </div>
                <div className={styles.category}><p>{category}</p></div>
            </div>
            <div className={styles.card}>
            <Image
                src={Horns}
                width={277}
                height={200}
                alt="Photo"
                />
              <div className={styles.cardinfo}>
                <p>Tout sur les flexbox en 5 minutes</p>
                <p>Sipnosis de l'article en question</p>
              </div>
                <div className={styles.category}><p>{category}</p></div>
            </div>
          </div>
        </div>
    );
  }
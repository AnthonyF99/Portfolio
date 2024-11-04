import styles from '../../styles/gallery.module.scss';
import Image from 'next/image';


export default function Gallery() {
  return (
      <div className={styles.galleryContainer}>
        <div className={styles.galleryWrap}>
            <div className={styles.galleryCard}>
            <Image src={'/#'} width={100} height={100} alt={'#3d viewer'} />
            <div className={styles.galleryCardContent}>
                    <p className={styles.cardTitle}>Title</p>
                    <p className={styles.cardInfo}>Information</p>
                </div>
            </div>
            <div className={styles.galleryCard}>
            <Image src={'/#'} width={100} height={100} alt={'#3d viewer'} />
            <div className={styles.cardContent}>
                    <p className={styles.cardTitle}>Title</p>
                    <p className={styles.cardInfo}>Information</p>
                </div>
            </div>
            <div className={styles.galleryCard}>
            <Image src={'/#'} width={100} height={100} alt={'#3d viewer'} />
            <div className={styles.cardContent}>
                    <p className={styles.cardTitle}>Title</p>
                    <p className={styles.cardInfo}>Information</p>
                </div>
            </div>
            <div className={styles.galleryCard}>
            <Image src={'/#'} width={100} height={100} alt={'#3d viewer'} />
            <div className={styles.cardContent}>
                    <p className={styles.cardTitle}>Title</p>
                    <p className={styles.cardInfo}>Information</p>
                </div>
            </div>
            <div className={styles.galleryCard}>
            <Image src={'/#'} width={100} height={100} alt={'#3d viewer'} />
            <div className={styles.cardContent}>
                    <p className={styles.cardTitle}>Title</p>
                    <p className={styles.cardInfo}>Information</p>
                </div>
            </div>
            <div className={styles.galleryCard}>
            <Image src={'/#'} width={100} height={100} alt={'#3d viewer'} />
            <div className={styles.cardContent}>
                    <p className={styles.cardTitle}>Title</p>
                    <p className={styles.cardInfo}>Information</p>
                </div>
            </div>
        </div>
        </div>
  );
}

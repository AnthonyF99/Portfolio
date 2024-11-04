import styles from '../../styles/gallery.module.scss';
import Image from 'next/image';
import useModularFetch from '../../hooks/modularFetch.js';


export default function Gallery() {
    const { entities: galleryData, loading, error } = useModularFetch('/api/galleries3d');

  return (
      <div className={styles.galleryContainer}>
        <div className={styles.galleryWrap}>
        {galleryData.map((item) => (
                 <div key={item._id} className={styles.galleryCard}>
                 <Image src={item.galleryImageurl} width={300} height={200} alt={'#3d viewer'} />
                 <div className={styles.galleryCardContent}>
                         <p className={styles.cardTitle}>{item.galleryTitle}</p>
                         <p className={styles.cardInfo}>{item.galleryDescription}</p>
                     </div>
                 </div>
        ))}
        </div>
        </div>
  );
}

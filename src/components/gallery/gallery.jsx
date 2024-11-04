import styles from '../../styles/gallery.module.scss';
import Image from 'next/image';
import useModularFetch from '../../hooks/modularFetch.js';


export default function Gallery() {
    const { entities: galleryData, loading, error } = useModularFetch('/api/gallery3d');

  return (
      <div className={styles.galleryContainer}>
        <div className={styles.galleryWrap}>
        {galleryData.map((item) => (
                 <div key={item._id} className={styles.galleryCard}>
                 <Image src={item.imageurl} width={300} height={200} alt={'#3d viewer'} />
                 <div className={styles.galleryCardContent}>
                         <p className={styles.cardTitle}>{item.title}</p>
                         <p className={styles.cardInfo}>{item.description}</p>
                     </div>
                 </div>
        ))}
        </div>
        </div>
  );
}

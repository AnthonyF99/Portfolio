import styles from '../../styles/gallery.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import useModularFetch from '../../hooks/modularFetch.js';

export default function Gallery() {
  const { entities: galleryData, loading, error } = useModularFetch('/api/galleries3d');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading 3D projects: {error.message}</p>;

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryWrap}>
        {galleryData.map((project) => (
          <Link key={project._id} href={`/viewer/${project._id}`}>
            <div className={styles.galleryCard}>
              <Image src={project.galleryImageurl} width={300} height={200} alt={'#3d viewer'} />
              <div className={styles.galleryCardContent}>
                <p className={styles.cardTitle}>{project.galleryTitle}</p>
                <p className={styles.cardInfo}>{project.galleryDescription}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

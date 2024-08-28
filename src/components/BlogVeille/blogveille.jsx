import styles from '../../styles/blogveille.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'

export default function Blogveille() {
  const [article, setArticle] = useState([])

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch('/api/article', {
          method: 'GET'
        });  // Utilise votre endpoint API
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        console.error('Erreur lors du chargement des données des articles :', error);
      }
    };

    fetchArticle();
  }, []);

    return (
        <div className={styles.container}>
          <div className={styles.cards}>
          {article.map((article, index) => (
            <div className={styles.card}
            key={article._id}>
            <Image
                src={article.url}
                width={277}
                height={200}
                alt={article.title}
              />
              <div className={styles.cardinfo}>
                <p>{article.title}</p>
                <p>{article.description}</p>
              </div>
                <div className={styles.category}>
                  <p>{article.category}</p>
                  </div>
            </div>
          ))}
          </div>
        </div>
    );
  }
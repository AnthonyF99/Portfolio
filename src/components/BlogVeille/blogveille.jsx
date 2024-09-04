import styles from '../../styles/blogveille.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import useModularFetch from '../../hooks/modularFetch.js';


export default function Blogveille() {
  const { entities: article, loading, error } = useModularFetch('/api/articles');
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading projects: {error.message}</p>;
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
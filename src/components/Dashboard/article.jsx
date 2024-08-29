import React, { useState, useEffect } from 'react';
import styles from '../../styles/dashboard.module.scss';

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Appel API pour récupérer les articles
        fetch('/api/article')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('Error fetching articles:', error));
    }, []); // Le tableau vide [] signifie que ce useEffect ne se déclenche qu'une fois au montage du composant

    return (
        <div className={styles.article}>
            <h2 className={styles.articletitle}>Articles</h2>
            <button className={styles.addButton}>Ajouter un article</button>
            <table>
                <thead>
                    <tr>
                        <th>Nom du article</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((article) => (
                        <tr key={article._id}>
                            <td>{article.title}</td>
                            <td>{article.description}</td>
                            <td><button className={styles.modifyButton}>Modifier article</button></td>
                            <td><button className={styles.deleteButton}>Supprimer article</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Articles;

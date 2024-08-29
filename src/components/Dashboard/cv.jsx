import React, { useState, useEffect } from 'react';
import styles from '../../styles/dashboard.module.scss';

const Cvs = () => {
    const [cvs, setCvs] = useState([]);

    useEffect(() => {
        // Appel API pour récupérer les projets
        fetch('/api/cvs')
            .then(response => response.json())
            .then(data => setCvs(data))
            .catch(error => console.error('Error fetching cvs:', error));
    }, []); // Le tableau vide [] signifie que ce useEffect ne se déclenche qu'une fois au montage du composant

    return (
        <div className={styles.cv}>
            <h2 className={styles.cvtitle}>CV</h2>
            <button className={styles.addButton}>Ajouter une education ou experience pro</button>
            <table>
                <thead>
                    <tr>
                        <th>Nom exp/educ</th>
                        <th>Description</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {cvs.map((cv) => (
                        <tr key={cv._id}>
                            <td>{cv.title}</td>
                            <td>{cv.description}</td>
                            <td>{cv.category}</td>
                            <td><button className={styles.modifyButton}>Modifier cv</button></td>
                            <td><button className={styles.deleteButton}>Supprimer cv</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cvs;

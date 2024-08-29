import React, { useState, useEffect } from 'react';
import styles from '../../styles/dashboard.module.scss';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Appel API pour récupérer les projets
        fetch('/api/projects')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []); // Le tableau vide [] signifie que ce useEffect ne se déclenche qu'une fois au montage du composant

    return (
        <div className={styles.project}>
            <h2 className={styles.projecttitle}>Projets</h2>
            <button className={styles.addButton}>Ajouter un projet</button>
            <table>
                <thead>
                    <tr>
                        <th>Nom du projet</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr key={project._id}>
                            <td>{project.title}</td>
                            <td>{project.description}</td>
                            <td><button className={styles.modifyButton}>Modifier projet</button></td>
                            <td><button className={styles.deleteButton}>Supprimer projet</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Projects;

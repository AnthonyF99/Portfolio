import React, { useState, useEffect } from 'react';
import styles from '../../styles/dashboard.module.scss';
import Round from '../Rounds/rounds.jsx'

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        // Appel API pour récupérer les skills
        fetch('/api/skills')
            .then(response => response.json())
            .then(data => setSkills(data))
            .catch(error => console.error('Error fetching skills:', error));
    }, []); // Le tableau vide [] signifie que ce useEffect ne se déclenche qu'une fois au montage du composant

    return (
        <div className={styles.skill}>
            <h2 className={styles.skilltitle}>Skills</h2>
            <button className={styles.addButton}>Ajouter un skill</button>
            <table>
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Skill</th>
                    </tr>
                </thead>
                <tbody>
                    {skills.map((skill, index) => (
                        <tr key={skill._id}>
                            <td>{index + 1}</td>
                            <td><Round title={skill.title} url={skill.url}/></td>
                            <td><button className={styles.modifyButton}>Modifier skill</button></td>
                            <td><button className={styles.deleteButton}>Supprimer skill</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Skills;

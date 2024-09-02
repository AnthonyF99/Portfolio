import React, { useState, useEffect } from 'react';
import styles from '../../styles/dashboard.module.scss';
import Round from '../Rounds/rounds.jsx'
import DynamicForm from '../Modal/dynamicform.jsx';
import useEntityManager from '../../hooks/useEntityManager.js';


const Skills = () => {
    const {
        entities: skills,
        isFormOpen,
        formType,
        selectedEntity,
        handleAddEntity,
        handleEditEntity,
        handleSubmit,
        handleDeleteEntity,
        handleCloseForm,
      } = useEntityManager('skill', '/api/skills');

      const handleToggleForm = () => {
        if (isFormOpen) {
          handleCloseForm(); // Fermer le formulaire si ouvert
        } else {
          handleAddEntity(); // Ouvrir le formulaire pour ajouter
        }
      };

    return (
        <div className={styles.skill}>
            <h2 className={styles.skilltitle}>Skills</h2>
            <button className={styles.addButton} onClick={handleToggleForm}>
                {isFormOpen ? 'Annuler' : 'Ajouter un skill'}
            </button>

            
            {isFormOpen && (
                <div>
                    <h3>{formType === 'add' ? 'Ajouter un Skill' : 'Modifier le Skill'}</h3>
                    <DynamicForm 
                        type="skill" 
                        onSubmit={handleSubmit} 
                        initialData={selectedEntity || {}}
                    />
                    {/* Le bouton "Annuler" est maintenant inclus dans le bouton principal */}
                </div>
               )}     
               
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
                            <td>
                                <button className={styles.modifyButton} onClick={() => handleEditEntity(skill)}>Modifier skll</button>
                                <button className={styles.deleteButton} onClick={() => handleDeleteEntity(skill._id)}>Supprimer skill</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Skills;

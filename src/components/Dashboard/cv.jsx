import React, { useState, useEffect } from 'react';
import styles from '../../styles/dashboard.module.scss';
import DynamicForm from '../Modal/dynamicform.jsx';
import useEntityManager from '../../hooks/useEntityManager.js';

const Cvs = () => {
    const {
        entities: cvs,
        isFormOpen,
        formType,
        selectedEntity,
        handleAddEntity,
        handleEditEntity,
        handleSubmit,
        handleDeleteEntity,
        handleCloseForm,
      } = useEntityManager('cv', '/api/cvs');

      const handleToggleForm = () => {
        if (isFormOpen) {
          handleCloseForm(); // Fermer le formulaire si ouvert
        } else {
          handleAddEntity(); // Ouvrir le formulaire pour ajouter
        }
      };

    return (
        <div className={styles.cv}>
            <h2 className={styles.cvtitle}>CV</h2>
            <button className={styles.addButton} onClick={handleToggleForm}>
                {isFormOpen ? 'Annuler' : 'Ajouter un cv'}
            </button>

            
            {isFormOpen && (
                <div>
                    <h3>{formType === 'add' ? 'Ajouter un cv' : 'Modifier le cv'}</h3>
                    <DynamicForm 
                        type="cv" 
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
                        <th>Nom exp/educ</th>
                        <th>Description</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {cvs.map((cv, index) => (
                        <tr key={cv._id}>
                            <td>{index + 1}</td>
                            <td>{cv.title}</td>
                            <td>{cv.description}</td>
                            <td>{cv.category}</td>
                            <td>
                                <button className={styles.modifyButton} onClick={() => handleEditEntity(cv)}>Modifier skll</button>
                                <button className={styles.deleteButton} onClick={() => handleDeleteEntity(cv._id)}>Supprimer cv</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cvs;

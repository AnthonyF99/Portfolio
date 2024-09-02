import React, { useState, useEffect } from 'react';
import styles from '../../styles/dashboard.module.scss';
import DynamicForm from '../Modal/dynamicform.jsx';
import useEntityManager from '../../hooks/useEntityManager.js';

const Articles = () => {
    const {
        entities: articles,
        isFormOpen,
        formType,
        selectedEntity,
        handleAddEntity,
        handleEditEntity,
        handleSubmit,
        handleDeleteEntity,
        handleCloseForm,
      } = useEntityManager('article', '/api/articles');

      const handleToggleForm = () => {
        if (isFormOpen) {
          handleCloseForm(); // Fermer le formulaire si ouvert
        } else {
          handleAddEntity(); // Ouvrir le formulaire pour ajouter
        }
      };

    return (
        <div className={styles.article}>
            <h2 className={styles.articletitle}>Articles</h2>
            <button className={styles.addButton} onClick={handleToggleForm}>
                {isFormOpen ? 'Annuler' : 'Ajouter un article'}
            </button>

            
            {isFormOpen && (
                <div>
                    <h3>{formType === 'add' ? 'Ajouter un article' : 'Modifier le article'}</h3>
                    <DynamicForm 
                        type="article" 
                        onSubmit={handleSubmit} 
                        initialData={selectedEntity || {}}
                    />
                    {/* Le bouton "Annuler" est maintenant inclus dans le bouton principal */}
                </div>
               )}               <table>
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Nom du article</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((article, index) => (
                        <tr key={article._id}>
                            <td>{index + 1}</td>
                            <td>{article.title}</td>
                            <td>{article.description}</td>
                            <td>
                                <button className={styles.modifyButton} onClick={() => handleEditEntity(article)}>Modifier skll</button>
                                <button className={styles.deleteButton} onClick={() => handleDeleteEntity(article._id)}>Supprimer article</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Articles;

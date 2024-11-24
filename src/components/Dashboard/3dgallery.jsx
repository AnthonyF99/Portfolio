import React from 'react';
import styles from '../../styles/dashboard.module.scss';
import DynamicForm from '../Modal/dynamicform.jsx';
import useEntityManager from '../../hooks/useEntityManager.js';

const Galleries = () => {
  const {
    entities: galleries,
    isFormOpen,
    formType,
    selectedEntity,
    handleAddEntity,
    handleEditEntity,
    handleSubmit,
    handleDeleteEntity,
    handleCloseForm,
  } = useEntityManager('gallery', '/api/galleries3d');

  const handleToggleForm = () => {
    if (isFormOpen) {
      handleCloseForm(); // Fermer le formulaire si ouvert
    } else {
      handleAddEntity(); // Ouvrir le formulaire pour ajouter
    }
  };

  return (
    <div className={styles.gallery}>
      <h2 className={styles.projecttitle}>Gallerie 3D</h2>
      <button className={styles.addButton} onClick={handleToggleForm}>
        {isFormOpen ? 'Annuler' : 'Ajouter un projet 3D'}
      </button>

      {isFormOpen && (
        <div>
          <h3>
            {formType === 'add'
              ? 'Ajouter un Projet 3D'
              : 'Modifier le Projet 3D'}
          </h3>
          <DynamicForm
            type="gallery"
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
            <th>Nom du projet</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {galleries.map((gallery, index) => (
            <tr key={gallery._id}>
              <td>{index + 1}</td>
              <td>{gallery.galleryTitle}</td>
              <td>{gallery.galleryDescription}</td>
              <td>
                <button
                  className={styles.modifyButton}
                  onClick={() => handleEditEntity(gallery)}
                >
                  Modifier projet
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDeleteEntity(gallery._id)}
                >
                  Supprimer projet
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Galleries;

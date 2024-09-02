import React from 'react';
import styles from '../../styles/dashboard.module.scss';
import DynamicForm from '../Modal/dynamicform.jsx';
import useEntityManager from '../../hooks/useEntityManager.js';

const Projects = () => {
  const {
    entities: projects,
    isFormOpen,
    formType,
    selectedEntity,
    handleAddEntity,
    handleEditEntity,
    handleSubmit,
    handleDeleteEntity,
    handleCloseForm,
  } = useEntityManager('project', '/api/projects');

  const handleToggleForm = () => {
    if (isFormOpen) {
      handleCloseForm(); // Fermer le formulaire si ouvert
    } else {
      handleAddEntity(); // Ouvrir le formulaire pour ajouter
    }
  };

  return (
    <div className={styles.project}>
      <h2 className={styles.projecttitle}>Projets</h2>
      <button className={styles.addButton} onClick={handleToggleForm}>
        {isFormOpen ? 'Annuler' : 'Ajouter un projet'}
      </button>

      {isFormOpen && (
        <div>
          <h3>{formType === 'add' ? 'Ajouter un Projet' : 'Modifier le Projet'}</h3>
          <DynamicForm 
            type="project" 
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
          {projects.map((project, index) => (
            <tr key={project._id}>
              <td>{index + 1}</td>
              <td>{project.title}</td>
              <td>{project.description}</td>
              <td>
                <button className={styles.modifyButton} onClick={() => handleEditEntity(project)}>Modifier projet</button>
                <button className={styles.deleteButton} onClick={() => handleDeleteEntity(project._id)}>Supprimer projet</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;

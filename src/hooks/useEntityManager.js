import { useState, useEffect } from 'react';

const useEntityManager = (entityType, apiEndpoint) => {
  const [entities, setEntities] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState('add'); // 'add' ou 'edit'
  const [selectedEntity, setSelectedEntity] = useState(null); // Entité sélectionnée pour la modification

  useEffect(() => {
    // Appel API pour récupérer les entités
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => setEntities(data))
      .catch(error => console.error(`Error fetching ${entityType}:`, error));
  }, [apiEndpoint, entityType]);

  // Fonction pour gérer l'ouverture du formulaire pour ajouter une entité
  const handleAddEntity = () => {
    setFormType('add');
    setSelectedEntity(null);
    setIsFormOpen(true);
  };

  // Fonction pour gérer l'ouverture du formulaire pour modifier une entité
  const handleEditEntity = (entity) => {
    setFormType('edit');
    setSelectedEntity(entity);
    setIsFormOpen(true);
  };

   // Fonction pour fermer le formulaire
   const handleCloseForm = () => {
    setIsFormOpen(false);
    setSelectedEntity(null);
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (data) => {
    const method = formType === 'add' ? 'POST' : 'PUT';
    const url = formType === 'add' ? apiEndpoint : `${apiEndpoint}/${selectedEntity._id}`;
    
    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
      if (formType === 'add') {
        setEntities([...entities, result]); // Ajouter la nouvelle entité à la liste
      } else {
        setEntities(entities.map(ent => ent._id === result._id ? result : ent)); // Mettre à jour l'entité modifiée
      }
      setIsFormOpen(false); // Fermer le formulaire
    })
    .catch(error => console.error('Error submitting form:', error));
  };

  // Fonction pour gérer la suppression d'une entité
  const handleDeleteEntity = (entityId) => {
    fetch(`${apiEndpoint}/${entityId}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(() => {
      setEntities(entities.filter(ent => ent._id !== entityId)); // Mettre à jour la liste des entités
    })
    .catch(error => console.error('Error deleting entity:', error));
  };

  return {
    entities,
    isFormOpen,
    formType,
    selectedEntity,
    handleAddEntity,
    handleEditEntity,
    handleSubmit,
    handleDeleteEntity,
    setIsFormOpen,
    handleCloseForm,
  };
};

export default useEntityManager;

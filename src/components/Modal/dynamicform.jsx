import { useState } from 'react';
import { schemas } from '../../../public/data/adaptiveform.js';
import * as Icons from 'react-icons/fa'; // Importer toutes les icônes Fa (ou une autre collection)
import React from 'react'; // Assurez-vous d'importer React pour utiliser React.createElement

const DynamicForm = ({ type, onSubmit, initialData }) => {
  // Initialiser l'état avec les données initiales ou un objet vide
  const [formData, setFormData] = useState(initialData || { skills: [] });

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Gérer les champs de manière distincte, sauf pour 'skills'
    if (name === 'skills') {
      setFormData({
        ...formData,
        skills: value.split(',').map((skill) => skill.trim()), // Si tu veux gérer les skills en tant que chaîne
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Fonction spécifique pour ajouter un skill
  const handleAddSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, ''], // Ajouter un nouveau champ de compétence vide
    });
  };


  // Fonction pour gérer la modification d'un skill
  const handleSkillChange = (index, value) => {
    const newSkills = [...formData.skills];
    newSkills[index] = value;
    setFormData({
      ...formData,
      skills: newSkills,
    });
  };

  // Fonction pour supprimer un skill
  const handleRemoveSkill = (index) => {
    const newSkills = formData.skills.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      skills: newSkills,
    });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Obtenir le schéma correspondant au type d'entité
  const schema = schemas[type];

  // Vérifier que le schéma existe pour le type d'entité
  if (!schema) {
    return <p>Invalid form type.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      {schema.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>
          {type === 'skill' && field.name === 'url' ? (
            <select
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
            >
              <option value="">Select an icon</option>
              {Object.keys(Icons).map((iconKey) => (
                <option key={iconKey} value={iconKey}>
                  {iconKey.replace('Fa', '')}
                </option>
              ))}
            </select>
          ):
            field.name === 'skills' ? (
            <div>
              {formData.skills && formData.skills.map((skill, index) => (
                <div key={index}>
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                  />
                  <button type="button" onClick={() => handleRemoveSkill(index)}>Remove</button>
                </div>
              ))}
              <button type="button" onClick={handleAddSkill}>Add Skill</button>
            </div>
          ) : field.type === 'textarea' ? (
            <textarea
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
            />
          )}
        </div>
      ))}
       {type === 'skill' && formData.url && (
        <div>
          <p>Selected Icon:</p>
          {/* Utiliser directement l'icône choisie */}
          {Icons[formData.url] && React.createElement(Icons[formData.url])}
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;

import { useState } from 'react';
import { schemas } from '../../../public/data/adaptiveform.js';
import Image from 'next/image';
import * as Icons from 'react-icons/fa'; // Importer toutes les icônes Fa (ou une autre collection)
import React from 'react';

const DynamicForm = ({ type, onSubmit, initialData }) => {
  // Initialiser l'état avec les données initiales ou un objet vide
  const [formData, setFormData] = useState(initialData || { skills: [] });
  const [imageUrl, setImageUrl] = useState(null);

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Gérer les champs de manière distincte, sauf pour 'skills'
    if (name === 'skills') {
      setFormData({
        ...formData,
        skills: value.split(',').map((skill) => skill.trim()), // Division de la châine à chaque virgule. puis suppression des espaces
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Image téléchargée avec succès :', data);

        // Assumer que l'URL de l'image retournée par l'API est dans data.imageUrl
        setFormData({
          ...formData,
          imageurl: data.imageUrl, // Mettre l'URL de l'image dans le state
        });
      } else {
        console.error('Erreur lors du téléchargement :', await response.text());
      }
    } catch (err) {
      console.error('Erreur lors de la requête :', err);
    }
  };

  // Fonction spécifique pour ajouter un skill
  const handleAddSkill = () => {
    setFormData({
      ...formData,
      skills: Array.isArray(formData.skills) ? [...formData.skills, ''] : [''], // Vérifie que skills est bien un tableau
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
    console.log('Form Data:', formData);
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
          ) : field.name === 'skills' ? (
            <div>
              {formData.skills &&
                formData.skills.map((skill, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) => handleSkillChange(index, e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              <button type="button" onClick={handleAddSkill}>
                Add Skill
              </button>
            </div>
          ) : field.type === 'textarea' ? (
            <textarea
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
            />
          ) : field.type === 'file' ? (
            <div>
              <label>Image</label>
              <input type="file" onChange={handleFileChange} />
              {imageUrl && (
                <div>
                  <p>Image téléchargée :</p>
                  <Image
                    src={imageUrl}
                    alt="Uploaded"
                    width={100}
                    height={100}
                  />
                </div>
              )}
            </div>
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

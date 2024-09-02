import { useState } from 'react';
import { schemas } from '../../../public/data/adaptiveform.js';

const DynamicForm = ({ type, onSubmit, initialData }) => {
  // Initialiser l'état avec les données initiales ou un objet vide
  const [formData, setFormData] = useState(initialData || {});

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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
          {field.type === 'textarea' ? (
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;

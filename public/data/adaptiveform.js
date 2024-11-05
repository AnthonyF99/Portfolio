export const schemas = {
  project: [
    { name: 'title', type: 'text', label: 'Title' },
    { name: 'description', type: 'textarea', label: 'Description' },
    { name: 'imageurl', type: 'text', label: 'Image URL' },
    { name: 'more', type: 'text', label: 'More Info' },
    { name: 'skills', type: 'text', label: 'Mes skills' },
    { name: 'link', type: 'text', label: 'Lien github' },
    { name: 'websitelink', type: 'text', label: 'Lien du site' },
  ],
  article: [
    { name: 'title', type: 'text', label: 'Title' },
    { name: 'description', type: 'textarea', label: 'Description' },
    { name: 'url', type: 'text', label: 'Image URL' },
    { name: 'category', type: 'text', label: 'Category' },
  ],
  skill: [
    { name: 'title', type: 'text', label: 'Title' },
    { name: 'url', type: 'select', label: 'Skill icon' },
    { name: 'category', type: 'text', label: 'Category' },
  ],
  cv: [
    { name: 'title', type: 'text', label: 'Title' },
    { name: 'date', type: 'text', label: 'Date' },
    { name: 'description', type: 'textarea', label: 'Description' },
    { name: 'category', type: 'text', label: 'Category' },
  ],
  // Ajouter d'autres types ici...
};

import mongoose from 'mongoose';

const CvSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for the Cv.'],
    maxlength: [60, 'Title cannot be more than 60 characters'],
  },
  date: {
    type: Date,
    required: [true, 'Please provide a date for the experience or education.'],
    get: (date) => {
      // Cette fonction "get" est utilisée pour formater la date lorsqu'elle est récupérée
      // Ici, on extrait le mois et l'année de la date
      return date ? `${date.getMonth() + 1}/${date.getFullYear()}` : '';
    },
    set: (value) => {
      // Cette fonction "set" permet de convertir une chaîne de caractères
      // (format: "mois/année") en un objet Date lors de l'enregistrement
      const [month, year] = value.split('/'); // Sépare le mois et l'année
      return new Date(year, month - 1); // Crée un objet Date avec le mois et l'année
    }
  },
  description: {
    type: String,
    required: [true, 'Please provide an description for the Cv.'],
  },
  category: {
    type: String,
    required: [true, 'Please provide a category for the Cv.'],
  }
});

export default mongoose.models.Cv || mongoose.model('Cv', CvSchema);

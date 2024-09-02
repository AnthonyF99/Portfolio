import mongoose from 'mongoose';

const CvSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for the Cv.'],
    maxlength: [60, 'Title cannot be more than 60 characters'],
  },
  date: {
    type: String,
    required: [true, 'Please provide a date for the Cv.'],
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

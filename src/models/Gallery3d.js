import mongoose from 'mongoose';

const Gallery3dSchema = new mongoose.Schema({
   galleryImageurl: {
    type: String,
    required: [true, 'Please provide an image for the project.'],
      },
  galleryTitle: {
    type: String,
    required: [true, 'Please provide a title for the project.'],
    maxlength: [60, 'Title cannot be more than 60 characters'],
  },
  galleryDescription: {
    type: String,
    required: [true, 'Please provide a description for the project.'],
  },
  galleryLink: {
    type: String,
    required: [true, 'Please provide a link to the project.'],
  },
});

export default mongoose.models.Gallery3d || mongoose.model('Gallery3d', Gallery3dSchema);

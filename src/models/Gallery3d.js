import mongoose from 'mongoose';

const Gallery3dSchema = new mongoose.Schema({
   imageurl: {
    type: String,
    required: [true, 'Please provide an image for the project.'],
      },
  title: {
    type: String,
    required: [true, 'Please provide a title for the project.'],
    maxlength: [60, 'Title cannot be more than 60 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for the project.'],
  },
  link: {
    type: String,
    required: [true, 'Please provide a link to the project.'],
  },
});

export default mongoose.models.Project || mongoose.model('Gallery3d', Gallery3dSchema);

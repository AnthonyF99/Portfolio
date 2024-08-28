import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for the project.'],
    maxlength: [60, 'Title cannot be more than 60 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for the project.'],
  },
  imageurl: {
    type: String,
    required: [true, 'Please provide an image for the project.'],
  },
  more: {
    type: String,
    required: [true, 'Please provide a more detailed description for the project.'],
  },
  skills: {
    type: [String],
    required: [true, 'Please provide skills for the project.'],
  },
  link: {
    type: String,
    required: [true, 'Please provide a link to the project.'],
  },
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);

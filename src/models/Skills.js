import mongoose from 'mongoose';

const SkillSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for the skill.'],
    maxlength: [60, 'Title cannot be more than 60 characters'],
  },
  url: {
    type: String,
    required: [true, 'Please provide an image for the skill.'],
  },
  category: {
    type: String,
    required: [true, 'Please provide a category for the skill.'],
  }
});

export default mongoose.models.Skill || mongoose.model('Skill', SkillSchema);

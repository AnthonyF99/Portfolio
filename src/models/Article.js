import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for the Article.'],
    maxlength: [60, 'Title cannot be more than 60 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for the Article.'],
    maxlength: [60, 'Title cannot be more than 60 characters'],
  },
  url: {
    type: String,
    required: [true, 'Please provide an image for the Article.'],
  },
  category: {
    type: String,
    required: [true, 'Please provide a category for the Article.'],
  }
});

export default mongoose.models.Article || mongoose.model('Article', ArticleSchema);

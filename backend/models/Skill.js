const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a skill name'],
    trim: true,
    minlength: [2, 'Skill name must be at least 2 characters'],
    maxlength: [50, 'Skill name cannot exceed 50 characters'],
  },
  category: {
    type: String,
    required: [true, 'Please add a skill category'],
    trim: true,
    enum: ['Frontend', 'Backend', 'Fullstack', 'DevOps', 'Design', 'Tools'],
  },
  proficiency: {
    type: Number,
    required: [true, 'Please add a proficiency percentage'],
    min: [1, 'Proficiency must be between 1 and 100'],
    max: [100, 'Proficiency must be between 0 and 100'],
  },
  icon: {
    type: String,
    required: [true, 'Please add a skill icon'],
    trim: true,
  },
}, {
  timestamps: true,
});

skillSchema.index({ category: 1 });

module.exports = mongoose.model('Skill', skillSchema);

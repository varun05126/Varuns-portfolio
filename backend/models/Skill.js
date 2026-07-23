const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a skill name'],
    trim: true,
    maxlength: [50, 'Skill name cannot exceed 50 characters'],
  },
  category: {
    type: String,
    required: [true, 'Please add a skill category'],
    trim: true,
  },
  proficiency: {
    type: Number,
    required: [true, 'Please add a proficiency percentage'],
    min: [0, 'Proficiency must be between 0 and 100'],
    max: [100, 'Proficiency must be between 0 and 100'],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Skill', skillSchema);

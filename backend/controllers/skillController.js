const asyncHandler = require('express-async-handler');
const Skill = require('../models/Skill');

// @desc    Get all skills grouped by category
// @route   GET /api/skills
// @access  Public
const getSkills = asyncHandler(async (req, res) => {
  const skills = await Skill.find({});

  // Group skills by category
  const grouped = {};
  skills.forEach(skill => {
    if (!grouped[skill.category]) {
      grouped[skill.category] = [];
    }
    grouped[skill.category].push(skill.name);
  });

  res.status(200).json({
    success: true,
    data: grouped,
  });
});

// @desc    Get all skills (flat list)
// @route   GET /api/skills/all
// @access  Public
const getAllSkills = asyncHandler(async (req, res) => {
  const skills = await Skill.find({}).sort({ category: 1, name: 1 });
  res.status(200).json({
    success: true,
    count: skills.length,
    data: skills,
  });
});

// @desc    Create skill
// @route   POST /api/skills
// @access  Private
const createSkill = asyncHandler(async (req, res) => {
  const { name, category, proficiency, icon } = req.body;

  const skillExists = await Skill.findOne({ name, category });

  if (skillExists) {
    res.status(400);
    throw new Error('Skill already exists');
  }

  const skill = await Skill.create({
    name,
    category,
    proficiency,
    icon,
  });

  res.status(201).json({
    success: true,
    data: skill,
  });
});

// @desc    Update skill
// @route   PUT /api/skills/:id
// @access  Private
const updateSkill = asyncHandler(async (req, res) => {
  const skill = await Skill.findById(req.params.id);

  if (skill) {
    skill.name = req.body.name || skill.name;
    skill.category = req.body.category || skill.category;
    skill.proficiency = req.body.proficiency !== undefined ? req.body.proficiency : skill.proficiency;
    skill.icon = req.body.icon || skill.icon;

    const updatedSkill = await skill.save();
    res.status(200).json({
      success: true,
      data: updatedSkill,
    });
  } else {
    res.status(404);
    throw new Error('Skill not found');
  }
});

// @desc    Delete skill
// @route   DELETE /api/skills/:id
// @access  Private
const deleteSkill = asyncHandler(async (req, res) => {
  const skill = await Skill.findById(req.params.id);

  if (skill) {
    await skill.deleteOne();
    res.status(200).json({
      success: true,
      message: 'Skill removed',
    });
  } else {
    res.status(404);
    throw new Error('Skill not found');
  }
});

module.exports = {
  getSkills,
  getAllSkills,
  createSkill,
  updateSkill,
  deleteSkill,
};

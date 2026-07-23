const asyncHandler = require('express-async-handler');
const Project = require('../models/Project');

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({}).sort({ createdAt: -1 });
  res.status(200).json({
    success: true,
    count: projects.length,
    data: projects,
  });
});

// @desc    Get single project
// @route   GET /api/projects/:id
// @access  Public
const getProjectById = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (project) {
    res.status(200).json({
      success: true,
      data: project,
    });
  } else {
    res.status(404);
    throw new Error('Project not found');
  }
});

// @desc    Create project
// @route   POST /api/projects
// @access  Private (could be made public if needed)
const createProject = asyncHandler(async (req, res) => {
  const { title, description, technologies, demoUrl, repoUrl, imageUrl, featured } = req.body;

  const project = await Project.create({
    title,
    description,
    technologies,
    demoUrl: demoUrl || '',
    repoUrl: repoUrl || '',
    imageUrl,
    featured: !!featured,
  });

  res.status(201).json({
    success: true,
    data: project,
  });
});

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private
const updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (project) {
    project.title = req.body.title || project.title;
    project.description = req.body.description || project.description;
    project.technologies = req.body.technologies || project.technologies;
    project.demoUrl = req.body.demoUrl !== undefined ? req.body.demoUrl : project.demoUrl;
    project.repoUrl = req.body.repoUrl !== undefined ? req.body.repoUrl : project.repoUrl;
    project.imageUrl = req.body.imageUrl !== undefined ? req.body.imageUrl : project.imageUrl;
    project.featured = req.body.featured !== undefined ? !!req.body.featured : project.featured;

    const updatedProject = await project.save();
    res.status(200).json({
      success: true,
      data: updatedProject,
    });
  } else {
    res.status(404);
    throw new Error('Project not found');
  }
});

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Private
const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (project) {
    await project.deleteOne();
    res.status(200).json({
      success: true,
      message: 'Project removed',
    });
  } else {
    res.status(404);
    throw new Error('Project not found');
  }
});

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};

const express = require('express');
const router = express.Router();
const {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} = require('../controllers/projectController');
const { projectRules, projectUpdateRules } = require('../validators');

router
  .route('/')
  .get(getProjects)
  .post(projectRules, createProject);

router
  .route('/:id')
  .get(getProjectById)
  .put(projectUpdateRules, updateProject)
  .delete(deleteProject);

module.exports = router;

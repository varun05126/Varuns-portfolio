const express = require('express');
const router = express.Router();
const { getSkills, getAllSkills, createSkill, updateSkill, deleteSkill } = require('../controllers/skillController');
const { skillRules, skillUpdateRules } = require('../validators');

router
  .route('/')
  .get(getSkills) // GET /api/skills returns grouped skills
  .post(skillRules, createSkill); // POST /api/skills

router
  .route('/all')
  .get(getAllSkills); // GET /api/skills/all returns flat list

router
  .route('/:id')
  .put(skillUpdateRules, updateSkill) // PUT /api/skills/:id
  .delete(deleteSkill); // DELETE /api/skills/:id

module.exports = router;

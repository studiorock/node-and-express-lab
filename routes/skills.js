var express = require('express');
var router = express.Router();
// var Skill = require('../models/skill');

const skillsCtrl = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillsCtrl.index);

router.get('/:id', skillsCtrl.show);

// app.get('/skills', function(req, res) {
//   res.render('todos/index', {
//     skills: skillDb.getAll()
//   });
// });

module.exports = router;

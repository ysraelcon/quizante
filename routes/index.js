var express = require('express');
var router = express.Router();
var quizController=require('../controllers/quiz24_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Bienvenido a Quiz---24' });
});

//ruta que lo manda al controller
router.get("/quizes/question",quizController.question);
router.get("/quizes/answer",quizController.answer);

module.exports = router;

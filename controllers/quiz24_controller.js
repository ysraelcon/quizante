var models=require('../models/models.js');

//get /quizes/question
exports.question=function(req,res){
  models.Quiz.findAll().success(function(quiz){
   res.render("quizes/question",
    {pregunta: "quiz[0].pregunta"});
  );//models quiz
};//f question

//get /quizes/answer
exports.answer=function(req,res){
 models.Quiz.findAll().success(function(quiz){
  if(req.query.respuesta==quiz[0].respuesta){ //== o === , igual toma las mayusculas
    res.render("quizes/answer",
    {respuesta:"correctisimo"});
  }//if
  else{
   res.render("quizes/answer",
    {respuesta:"mal mal"});
  }//else
 };//models quiz
};//f answer
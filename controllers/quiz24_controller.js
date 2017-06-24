//get /quizes/question
exports.question=function(req,res){
  res.render("quizes/question",
    {pregunta: "capital de Carabobo"});
  
};//f question

//get /quizes/answer
exports.answer=function(req,res){
  if(req.query.respuesta=="Valencia"){ //== o === , igual toma las mayusculas
    res.render("quizes/answer",
    {respuesta:"correctisimo"});
  }//if
  else{
   res.render("quizes/answer",
    {respuesta:"mal mal"});
    }//else
};//f answer
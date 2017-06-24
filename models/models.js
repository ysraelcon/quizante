var path=require('path');

//cargar modelo ORM
var Sequelize=require('sequelize');

//usar BBDO SQlite:
var sequelize=new Sewuelize(null,null,null,
    {dialect:"sqlite",storage:"quiz.sqlite"}
  );

//importar la definición de la tabla Quiz en quiz.js
var Quiz= sequelize.import(path.join(__dirname,'quiz'));

exports.Quiz=Quiz; //exportar definición de  la tabla Quiz

//sequelize.sync() crea e inicializa tabla de preguntas en DB
sequelize.sync().success(function(){
   //success(..) ejecuta el manejador una vez creada la tabla
   //se puede hacer por promesa de javascript, la nueva forma
   Quiz.count().success(function(count){
     if(count===0){//la tabla se incializa sola si esta vacia
         Quiz.create({
             pregunta:  'Pregunta de incializa',
             respuesta: 'respuesta de inicializa'
         })
        .success(function(){console.log("Base de datos inicializadada")});//quiz create
     }//if

   });//quiz success
});//sequelize success

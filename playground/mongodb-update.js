const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
  if(err){
    return console.log('Unable to connect mongodb ', err);
  }
  console.log('Connected to mongodb server');


  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("58eb39f52b476e13791659ed")
  },{
    text: 'Go to the restaurant',
    completed: true,
  }).then((result) =>{
    console.log(result);
  })
  // db.close();
});

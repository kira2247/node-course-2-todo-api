const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/model/todo');
const {User} = require('./../server/model/user');

// Todo.remove({}).then((result) =>{
//   console.log(result);
// });

Todo.findOneAndRemove({
  _id: '58ec9e069094bcc5d7acce74'
}).then((todo) =>{
  console.log(todo);
});

Todo.findByIdAndRemove('58ec9e069094bcc5d7acce74').then((todo)=>{
  console.log(todo);
});

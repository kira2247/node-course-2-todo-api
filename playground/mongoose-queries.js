const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/model/todo');
const {User} = require('./../server/model/user');

var id = '58ec49099094bcc5d7accc8d';

if(!ObjectID.isValid(id)){
  return console.log('ID not valid');
}

User.find({
  _id: id
}).then((Users) =>{
  console.log('Users', Users);
});

User.findOne({
  _id:id
}).then((user) =>{
  console.log('User', user);
})

User.findById(id).then((user)=>{
  if(!user){
    return console.log('User not found');
  }
  console.log('User', user);
}).catch((e) =>{
  console.log(e);
})

// if(!ObjectID.isValid(id)){
//   return console.log('ID not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo) =>{
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) =>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => {
//   console.log(e);
// });

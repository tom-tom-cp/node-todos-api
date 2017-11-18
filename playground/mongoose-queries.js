const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');



// var id = '6a0dedc6a6142b1f88844eb6';
//
// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos: ', todos);
// });
//
// //********+++++++++++++++++++++++++
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos: ', todo);
// });
//
// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo: ', todo);
// }).catch((e) => {
//     console.log(e);
// });

var id = '5a0d3faba9ead60ca6fcf630';

if (!ObjectID.isValid(id)) {
    console.log('id not valid');
}

User.findById(id).then((user) => {
    if (!user) {
        return console.log('id not found');
    }

    console.log('User: ', user);
}).catch((e) => {
    console.log(e);
});

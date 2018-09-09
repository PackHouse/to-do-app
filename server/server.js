const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
    text: {
        type: String
    },
    completed: {
        type: Boolean

    }, 
    completedAt:{
        type: Number

    }
});

var todo1 = new Todo({
    text: "Cook Dinner"
})
var todo2 = new Todo({
    text:'second todo for the list',
    completed: false,
    completedAt: 123
})

todo1.save().then((doc)=>{
    console.log('saved todo',doc)
}, (e) => {
    console.log ('Unable to save')
});
todo2.save().then((doc)=>{
    console.log('saved todo',doc)
}, (e)=>{
    console.log('Saved error',e)
})
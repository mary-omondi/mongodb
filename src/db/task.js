const mongoose = require("mongoose");

mongoose.connect(
    'mongodb+srv://marrie:design123@cluster0.hmf6un7.mongodb.net/task-manager-api'
);

const Task = mongoose.model('Task',{
    descripton: {
        type:String,
    },
    completed:{
        type:Boolean,
    },
});

const task = new Task({
    name:"victor",
    age:17,
});

task.save().then(() => {
    console.log(task);
})
.catch((error) => {
    console.log(error);
});
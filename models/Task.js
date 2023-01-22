const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({ //only the properties that we set in our scheme will be pass on the DB :)
    name:{
        type: String,
        required : [true, 'Most provide name'],
        trim: true,
        maxlenght: [20, 'Name can not be more than 20 charraacters'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Task', TaskSchema)
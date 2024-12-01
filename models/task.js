const mongoose =require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [100, 'name can not be more than 100 character'],
    },
    description: {
        type:String,
        required: [true, 'must provide description'],
        trim: true,
        maxlength: [300, 'description can not be more than 300 character'],
    },
    date:{
        type:Date, 
        default: new Date(),
    },
    priority: {
        type: String,
        default: "low",
        enum: ["high", "medium", "low"],
      },
  
    completed: {
    type: Boolean,
    default: false,
    },
   /*  userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true } */


})


module.exports = mongoose.model('Task', TaskSchema)
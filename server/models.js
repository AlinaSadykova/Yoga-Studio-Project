const mongoose = require("mongoose")
const unique = require("mongoose-unique-validator");

mongoose.connect("mongodb://localhost:27017/yogastudio", {
    useNewUrlParser: true
}, (errs) => console.log(errs || 'db = gucci'));

// const ClassesSchema = new mongoose.Schema({
    

//     title: {
//         type: String,
//         required: [true, "This field is required"]
//     },
//     duration: {
//         type: Number,
//         default: 0
//     },
//     instructor: {

//     }
    
// }, {
//     timestamps: true
// })

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "This field is required"]    
    },
    lastname: {
        type: String,
        required: [true, "This field is required"]
    },
    email: {
        type: String,
        required: [true, "This field is required"],
        unique: [true, "The email already exists"]
    },
    password:{
        type: String,
        minlength: [8, "8 characters minimum"]
    },
    accessibility:{
        type: String,
        default: "user"
    },
    // class : {ClassesSchema} 
},
     {timestamps:true});

 

const Users = mongoose.model("user", UserSchema);

module.exports = Users;
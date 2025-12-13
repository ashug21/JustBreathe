const mongoose = require("mongoose");

const NewsLetterSchema = new mongoose.Schema({

        email : {
            type : String,
            required : true,
        },
       
},{timestamps : true});


const NewLetter = mongoose.model("newsletter" , NewsLetterSchema);
module.exports = NewLetter;



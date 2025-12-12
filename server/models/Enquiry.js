const mongoose = require("mongoose");

const EnquirySchema = new mongoose.Schema({

    fullname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    }
} , {timestamps : true});


const Enquiry = mongoose.model("enquiry" , EnquirySchema);
module.exports = Enquiry;
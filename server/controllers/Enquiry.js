const Enquiry = require('../models/Enquiry');


const getUserEnquiry = async(req,res) => {

    try {
        const {fullname , email , phone , message} = req.body;

        if(!fullname || !email || !phone || !message){
            return res.status(400).json({ success: false, message: "All Fields are Required" });
        }

        const enquiry = Enquiry.create({fullname , email , phone , message});
        res.json({success : true , message : "Enquiry Sent !" , data : enquiry});
        
    } catch (error) {
        return res.json({ success : false , message : error.message});
    }    
}

module.exports = {
    getUserEnquiry
}
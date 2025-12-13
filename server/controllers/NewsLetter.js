const NewsLetter = require('../models/NewsLetter');


const SubscribeUser = async(req,res) => {

    try {
        const {email} = req.body;

        if(!email){
            return res.status(400).json({ success: false, message: "Email is Required" });
        }

        const subscribe = NewsLetter.create({email});
        res.json({success : true , message : "Enquiry Sent !" , data : subscribe});
        
    } catch (error) {
        return res.json({ success : false , message : error.message});
    }    
}

module.exports = {
    SubscribeUser
}
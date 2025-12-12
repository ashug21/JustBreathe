const BookClass = require('../models/BookClass');


const BookClassforUser = async(req,res) => {
    try {

        const { name , phone , date , timings , center} = req.body;

        if (!name || !phone || !date || !timings || !center) {
            return res.status(400).json({ success: false, message: "All Fields are Required" });
        }
        

       const UserClass = await BookClass.create({ name , phone , date , timings , center});
       return res.json({ success : true , message : "Booked a class for User" , data : UserClass});

        
    } catch (error) {
        return res.json({ success : false , message : error.message});
    }
}

module.exports = {
    BookClassforUser
}
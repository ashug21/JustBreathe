const BookClass = require('../models/BookClass');
const Enquiry = require('../models/Enquiry');
const NewsLetter = require('../models/NewsLetter');



const LoginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Both fields are required",
      });
    }

    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
      return res.status(200).json({ success: true,});
    }

    return res.status(401).json({ success: false, message: "Invalid credentials",});
  }
   
  catch(error) {
    return res.status(500).json({ success: false, message: error.message,});
  }
};


const getClassBookings = async(req,res) => {
  try {
    const data = await BookClass.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
} 

const getEnquiry = async(req,res) => {
  try {
    const data = await Enquiry.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

const getNewsLetter = async(req,res) => {
  try {
    const data = await NewsLetter.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}


const deleteBookings = async(req,res) => {

  try {
    
    const {id} = req.params;

    const bookings = await BookClass.findByIdAndDelete(id);
  
    if(!bookings){
      return res.status(404).json({success: false,message: "Bookings Not Found",});
    }
  
    return res.status(200).json({success: true,message: "Booking Deleted Successfully"});

  } 
  catch (error) {
    return res.status(500).json({success: false,message: error.message,});
  }
 
}


const deleteEnquiries = async(req,res) => {

  try {
    
    const {id} = req.params;

    const enquiries = await Enquiry.findByIdAndDelete(id);
  
    if(!enquiries){
      return res.status(404).json({success: false,message: "Enquiries Not Found",});
    }
  
    return res.status(200).json({success: true,message: "Enquirie Deleted Successfully"});

  } 
  catch (error) {
    return res.status(500).json({success: false,message: error.message,});
  }
 
}


const deleteNewsLetter = async(req,res) => {

  try {
    
    const {id} = req.params;

    const newsLetter = await NewsLetter.findByIdAndDelete(id);
  
    if(!newsLetter){
      return res.status(404).json({success: false,message: "NewsLetter Not Found",});
    }
  
    return res.status(200).json({success: true,message: "NewsLetter Deleted Successfully"});

  } 
  catch (error) {
    return res.status(500).json({success: false,message: error.message,});
  }
 
}

module.exports = {
    LoginAdmin, getClassBookings , getEnquiry , getNewsLetter, deleteNewsLetter,deleteEnquiries,deleteBookings
}

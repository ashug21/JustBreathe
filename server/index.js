require('dotenv').config();
const express = require("express");
const app = express();
const BookClassRoute = require('./routes/BookClass');
const EnquiryRoute = require('./routes/Enquiry');
const NewsLetterRoute = require('./routes/NewsLetter');
const {connectDB} = require('./connect');
const cors = require("cors");

const PORT = 8000;
const allowedOrigins = [
  "http://localhost:5173",
  "https://justbreathe-4.onrender.com"
];

  

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors({
    origin: allowedOrigins,
    credentials: true
  }));

app.use('/book' , BookClassRoute);
app.use('/api' , EnquiryRoute);
app.use('/news' , NewsLetterRoute);

connectDB(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas connected successfully"))
  .catch(err => console.error("MongoDB Connection Error:", err.message));



app.get('/' , (req,res) => {
    res.json({message : "Server is Up"});
});


app.listen(PORT , () => {
    console.log("Server Started at PORT : " , PORT);
});
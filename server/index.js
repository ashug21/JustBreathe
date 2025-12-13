// require('dotenv').config();
// const express = require("express");
// const app = express();
// const BookClassRoute = require('./routes/BookClass');
// const EnquiryRoute = require('./routes/Enquiry');
// const NewsLetterRoute = require('./routes/NewsLetter');
// const {connectDB} = require('./connect');
// const cors = require("cors");

// const PORT = 8000;
// const allowedOrigins = [
//   "http://localhost:5173",
//   "https://justbreathe-4.onrender.com"
// ];

  

// app.use(express.json());
// app.use(express.urlencoded({extended : true}));
// app.use(cors({
//     origin: allowedOrigins,
//     credentials: true
//   }));

// app.use('/book' , BookClassRoute);
// app.use('/api' , EnquiryRoute);
// app.use('/news' , NewsLetterRoute);

// connectDB(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Atlas connected successfully"))
//   .catch(err => console.error("MongoDB Connection Error:", err.message));



// app.get('/' , (req,res) => {
//     res.json({message : "Server is Up"});
// });


// app.listen(PORT , () => {
//     console.log("Server Started at PORT : " , PORT);
// });



require("dotenv").config();
const express = require("express");
const cors = require("cors");

const BookClassRoute = require("./routes/BookClass");
const EnquiryRoute = require("./routes/Enquiry");
const NewsLetterRoute = require("./routes/NewsLetter");
const { connectDB } = require("./connect");

const app = express();
const PORT = process.env.PORT || 8000;

/* ----------- MIDDLEWARE ----------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (
        origin.startsWith("http://localhost") ||
        origin.endsWith(".amplifyapp.com")
      ) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

/* ----------- ROUTES ----------- */
app.use("/book", BookClassRoute);
app.use("/api", EnquiryRoute);
app.use("/news", NewsLetterRoute);

app.get("/", (req, res) => {
  res.json({ message: "Server is Up" });
});

/* ----------- DATABASE ----------- */
connectDB(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas connected successfully"))
  .catch((err) =>
    console.error("MongoDB Connection Error:", err.message)
  );

/* ----------- SERVER ----------- */
app.listen(PORT, () => {
  console.log("Server Started at PORT :", PORT);
});

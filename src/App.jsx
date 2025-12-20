import React,{useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import BookClass from "./Pages/BookClass/BookClass";
import Enquiry from "./Pages/Enquiry/Enquiry";
import Enquiry2 from "./Pages/Enquiry/Enquiry2";
import Gallery from "./Pages/Gallery/Gallery";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";
import Timings from "./Pages/Timings/Timings";
import ScrollToHash from "./components/ScrollToHash";
import Terms from "./components/Terms/Terms";
import Privacy from "./components/Privacy/Privacy";
import Admin from "./Pages/Admin/Admin";
import Dashboard from "./Pages/Admin/Dashboard";
import AdminProtectedRoute from "./Pages/Admin/AdminProtectedRoute";

const App = () => {
  useEffect(() => {
    fetch("https://justbreathe-4.onrender.com/admin/health")
      .catch(() => {});
  }, []);
  
  return (
    <div>
      <ScrollToTop />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/timings" element={<Timings />}></Route>
        <Route path="/book-class" element={<BookClass />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/enquiry" element={<Enquiry />}></Route>
        <Route path="/termsandconditions" element={<Terms />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/admin/dashboard" element={ <AdminProtectedRoute> 
          <Dashboard />
        </AdminProtectedRoute>
    }/></Routes>

    </div>
  );
};

export default App;

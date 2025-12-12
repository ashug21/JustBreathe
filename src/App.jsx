import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import BookClass from './Pages/BookClass/BookClass'
import Enquiry from './Pages/Enquiry/Enquiry'
import Enquiry2 from './Pages/Enquiry/Enquiry2'
import Gallery from './Pages/Gallery/Gallery'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <ScrollToTop/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<Home/>}></Route>
      <Route path='/book-class' element={<BookClass/>}></Route>
      <Route path='/gallery' element={<Gallery/>}></Route>
      <Route path='/enquiry' element={<Enquiry/>}></Route>
     </Routes>
   
    </div>
  )
}

export default App

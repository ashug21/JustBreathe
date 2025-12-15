import React,{useEffect , useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import WhyUs from '../../components/WhyUs/WhyUs'
import Class from '../../components/ClassOverview/Class'
import About from '../../components/About/About'
import Testimonials from '../../components/Testimonals/Testimonals'
import Gallery from '../../components/Gallery/Gallery'
import Footer from '../../components/Footer/Footer'
import Location from '../../components/Location/Location'

const Home = () => {
  
  
  return (
    <div>
      <Navbar/>
  {/* <br/> */}
      <Banner/>
      <br/>
      <Class/>
      <br/> 
      <About/>
      <br/>
      <Gallery/>
      <Testimonials/>
    <br/><br/>
      <Location/>
      <Footer/>
    </div>
  )
}

export default Home

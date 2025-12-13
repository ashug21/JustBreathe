import React, { useEffect, useState } from 'react'
import './About.css'
import preety from '../../assets/banner/preety.jpg'
import pankaj from '../../assets/banner/Pankaj.jpeg'


const instructors = [
  {
    title: "ABOUT HARPREET'S JOURNEY (Yoga Instructor)",
    img: preety,
    desc: `Harpreet Kaur is a certified yoga instructor with over three years of dedicated teaching experience. Her journey began with a personal commitment to wellness, which soon evolved into a deep passion for helping others transform their lives through mindful movement and breathwork.

With a warm, grounding presence, Harpreet specializes in creating classes that blend traditional Hatha techniques with modern alignment-based practices.

Through her classes and guidance, Harpreet continues to inspire a healthier, more mindful lifestyle.`
  },
  {
    title: "ABOUT PANKAJ'S JOURNEY (Yoga Instructor)",
    img: pankaj ,
    desc: `Pankaj is a certified yoga instructor who completed his yoga degree this year. He is trained in both traditional yoga and Aerial Yoga, with a strong focus on alignment, breath control, and safe practice.
He primarily teaches at the JustBreathe Pitampura branch, where his calm, structured approach helps students build strength, flexibility, and balance in a mindful and sustainable way.`  }
]

const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % instructors.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const current = instructors[index]

  return (
    <div className="about-harpreet-5">
    <div className="about-harpreet-content">
      <h2 className="about-harpreet-h-5">{current.title}</h2>
      <p className="about-harpreet-p-5">{current.desc}</p>
    </div>
  
    <img src={current.img} className="harpreet-img" alt="Instructor" />
  
    {/* dots INSIDE container */}
    <div className="about-dots-5">
      {instructors.map((_, i) => (
        <span
          key={i}
          className={`about-dot-5 ${index === i ? 'active' : ''}`}
        />
      ))}
    </div>
  </div>
  
  )
}

export default About


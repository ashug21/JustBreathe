import React from 'react'
import './About.css'
import preety from '../../assets/banner/preety.jpg'

const About = () => {
  return (
    <div>
     <div className="about-harpreet-5">
  <div className="about-harpreet-content">
    <h2 className="about-harpreet-h-5">ABOUT HARPREET'S JOURNEY (Yoga Instructor)</h2>
    <br/>
    <p className="about-harpreet-p-5">
      Harpreet Kaur is a certified yoga instructor with over three years of dedicated teaching experience. Her journey began with a personal commitment to wellness, which soon evolved into a deep passion for helping others transform their lives through mindful movement and breathwork.

      With a warm, grounding presence, Harpreet specializes in creating classes that blend traditional Hatha techniques with modern alignment-based practices, ensuring that students of all levels feel supported, challenged, and connected to their bodies.

      Her vision for accessible and community-centered yoga led her to establish JustBreathe Yoga Studio in Rani Bagh and Pitampura, where she has built a nurturing space for practitioners to grow physically, mentally, and emotionally. Harpreet’s teaching philosophy focuses on balance—strength with softness, discipline with ease, and effort with awareness.

      Through her classes, workshops, and personal guidance, Harpreet continues to inspire a healthier, more mindful lifestyle for everyone who walks into JustBreathe.
    </p>
  </div>

  <img src={preety} className="harpreet-img" />
</div>
    </div>
  )
}

export default About

import React, { useEffect } from 'react'
import './../styles/project.css'
import { FaBriefcase, FaCoffee, FaHandshake, FaTree } from 'react-icons/fa'
import Aos from 'aos';
import 'aos/dist/aos.css';

function Projects() {
    useEffect(() => {
            Aos.init({
              duration: 1000,  // Animation duration in milliseconds
              easing: 'ease',  // Easing function for the animation
              once: false,      // Trigger animation every time the element comes into view
            });
          }, []);
  return (
    <div className='project-main'>
     <header data-aos="fade-up" className="about-header">
        <div className='sub-header' >
        <h1 style={{marginTop:'100px'}}>our projects</h1>
        <p>we serve greate taste</p>
        </div>
      </header>
      <div className='project-unknown'>
      <h1 data-aos="fade-up">What We Do</h1>
      <div className='project-card-container' >
        <div className='project-card' data-aos="fade-right">
            <span className='project-icon-container'><FaTree className='project-icon' /></span>
            <h3>Afforestation</h3>
            <p>By incorporating trees into coffee farming practices, we achieve multiple benefits that enhance both the quality and quantity of coffee production</p>
        </div>
        <div className='project-card' data-aos="fade-bottom">
            
            <span className='project-icon-container'><FaHandshake className='project-icon' /></span>
            <h3>Job Opportunities</h3>
            <p>Our rehabilitation projects not only rejuvenate the land but also create meaningful job opportunities for local communities.</p>
        </div>
        <div className='project-card' data-aos="fade-left">
            
        <span className='project-icon-container'><FaCoffee className='project-icon' /> </span>
        <h3>Coffee & Spice Development</h3>
        <p>Our dedication to excellence ensures that every cup of coffee you enjoy is crafted with the utmost care and precision.</p>
        </div>
        
      </div>
      </div>
    </div>
  )
}

export default Projects

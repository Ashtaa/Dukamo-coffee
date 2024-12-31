import React, { useEffect } from 'react';
import './../styles/About.css';
import img from './../img/tree.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';  // Don't forget to import AOS styles


const About = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000,  // Animation duration in milliseconds
          easing: 'ease',  // Easing function for the animation
          once: false,      // Trigger animation every time the element comes into view
        });
      }, []);

  return (
    <div className="about-container">
      <header data-aos="fade-up" className="about-header">
        <div className='sub-header'>
        <h1 >About Us</h1>
        <p>Learn more about our mission and what we do</p>
        </div>
      </header>

      <section data-aos="fade-left" className="about-content">
        
          <div className="tree-contain" data-aos="fade-up">
            <img src={img} className='tree' />
          </div>
          <div className='about-detail'>
          <div >
          <h2 className='about-headers'>Our Mission</h2>
          <p className='about-ps'>
            We are a passionate team committed to creating amazing experiences for our users.
            Our mission is to deliver high-quality products and services that solve real-world
            problems with creativity and innovation.
          </p>
        </div>
     
        <div className="about-section" data-aos="fade-left">
          <h2 className='about-headers'>Our Story</h2>
          <p className='about-ps'>
            Our journey started in 2020 with a simple goal: to make technology accessible and
            intuitive for everyone. Over time, we've grown into a diverse team of talented
            individuals who are all driven by the same vision.
          </p>
        </div>

        <div className="about-section" data-aos="fade-right">
          <h2 className='about-headers'>Contact Us</h2>
          <p className='about-ps'>
            Have questions? Feel free to reach out to us at <strong>contact@ourcompany.com</strong>.
          </p>
          </div>
          </div>
        
      </section>
    </div>
  );
};

export default About;

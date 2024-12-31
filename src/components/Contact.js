import React, { useEffect } from 'react'
import { FaPhone } from 'react-icons/fa'
import { FaLocationPin, FaMessage } from 'react-icons/fa6'
import './../styles/contact.css'
import Aos from 'aos';
import 'aos/dist/aos.css'; 

function Contact() {
    useEffect(() => {
            Aos.init({
              duration: 1000,  // Animation duration in milliseconds
              easing: 'ease',  // Easing function for the animation
              once: false,      // Trigger animation every time the element comes into view
            });
          }, []);
  return (
    <div className='contact-main-container'>
       <header data-aos="fade-up" className="about-header">
        <div className='sub-header'>
        <h1 >About Us</h1>
        <p>Learn more about our mission and what we do</p>
        </div>
      </header>
    <div  className='contact-container' >
    <div className='contact-detail' data-aos="fade-right" > 
     <h1>lets talk</h1>
     <p>contact us for more inquiry</p>
     <div className='phone'>
            <FaPhone className='contact-icon' />
              <h3>+2519 xx xx xx <br />
              +2519 xx xx xx</h3>
            </div>
            <div className='mail'>
                   <FaMessage className='contact-icon' />
                     <h3>ashenafisahele@gmail.com</h3>
                   </div>
                   <div className='location'>
                   <FaLocationPin className='contact-icon' />
                     <h3>A.A ferensay legassion infront of entoto hospital </h3>
                   </div>
      </div>
      <div className='form-container' data-aos="fade-left">
        <p>get in touch</p>
        <h1>Send Us Your Message &
        Feedbacks</h1>
      <form className="form">
  <input type="text" placeholder="Name" />
  <input type="email" placeholder="Email" />
  <input type="tel" placeholder="Phone" />
  <input type="text" placeholder="Subject" />
  <textarea
    placeholder="Type your message..."
    className="message-textarea"
    rows="4"
    cols="50"
  ></textarea>
  <button className='submit'>submit</button>
</form>

      </div>
    </div>
    </div>
  )
}

export default Contact

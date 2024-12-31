import { useEffect } from 'react'
import React from 'react'
import './../styles/Home.css'
import Aos from 'aos';
import 'aos/dist/aos.css'; 


function Home() {
    useEffect(() => {
            Aos.init({
              duration: 1000,
              easing: 'ease',  
              once: false,   
            });
          }, []);
  return (
       <div className='Home-container'>
       <div className='topic' data-aos="fade-right">
        <h1 className='h1'>Dukamo <br /> <span> coffee export</span></h1>
        <p className='p'>With a keen eye for quality and a deep understanding of the coffee industry,  we have rapidly built a trusted network of premier growers and cooperatives.</p>
        <button className='button'>discover more</button>
       </div>
       <div>
        <img src='./coffee-bean-768x604.png' data-aos="fade-left" />
       </div>
    </div>
     
  )
}

export default Home

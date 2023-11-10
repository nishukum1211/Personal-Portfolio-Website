
import React, { useRef } from 'react';
import './contact.css';
import Facebookicon from '../../assets/Facebook-icon1.png';
import Twittericon from '../../assets/Twitter-icon.png';
import Youtubeicon from '../../assets/Youtube-icon.png';
import Instagramicon from '../../assets/Instagram-icon.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bg6pa4c', 'template_orm4wua', form.current, 'HteRNW-0dt4NVIGwX3wz-')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <section id='contactPage'>
      
      <div id="contact">
        <h1 className='contactPageTitle'>Contact Me</h1>
        <p className='contactDesc'>Please fill out the form below to discuss any work opportunities.</p>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
     
          <input type='text' className='name' placeholder='Your Name' name='your_name' />
          <input type='email' className='email' placeholder='Your Email' name='your_email' />
          <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
          <button type='submit' value='Send' className='submitBtn'>Submit</button> 

          <div className='Links'>
            <img src={Facebookicon} alt="Facebook" className='Link' />
            <img src={Twittericon} alt="Twitter" className='Link' />
            <img src={Youtubeicon} alt="Youtube" className='Link' />
            <img src={Instagramicon} alt="Instagram" className='Link' />
          </div>
          
       
        
        </form>
       
      </div>
    </section>
  );
}

export default Contact;

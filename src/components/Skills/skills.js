import React from 'react';
import './skills.css';
import UIDesign from '../../assets/UIDesign.jpg';
import Webdesign from '../../assets/webdesign1.jpg';
import Appdesign from '../../assets/app.jpg';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDes'>I am skilled and passionate web designer with experience in creating visually appealing and user friendly websites.I have a strong understanding of design and a keen eye for detail.I am proficient in HTML,CSS,javascript and React.js as well as design software such as amazon website and youtube.</span>
        <div className='skillBars'>
          <div className='skillBar'>
            <img src={UIDesign} alt="UIDesign" className='skillBarImg' />
            <div className='skillBarText'>
              <h2>UI Design</h2>
              <p>I excellent in UI design, where I combine creativity with usability to craft engaging and intuitive user interfaces. My experience includes designing responsive layouts, creating interactive prototypes, and ensuring a seamless user experience across different devices.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={Webdesign} alt="Webdesign" className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Website Design</h2>
              <p>Website design is a multidisciplinary field that encompasses various aspects of creating and maintaining a website.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={Appdesign} alt="Appdesign" className='skillBarImg' />
            <div className='skillBarText'>
              <h2>App Design</h2>
              <p>Designing a website application, commonly referred to as web app design, involves the creation of interfaces and experiences that users interact with through a web browser. </p>
            </div>
          </div>
        </div>
        
    </section>
  )
}

export default Skills;
import React from 'react';
import './skills.css';
import UIDesign from '../../assets/UIDesign.jpg';
import Webdesign from '../../assets/webdesign1.jpg';
import Appdesign from '../../assets/app.jpg';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDes'>I am skilled and passionate web designer with experience in creating visually appealing and user friendly websites.I have a strong understanding of design and a keen eye for detail.I am proficient in HTML,CSS and javascript as well as design software such as amazon website.</span>
        <div className='skillBars'>
          <div className='skillBar'>
            <img src={UIDesign} alt="UIDesign" className='skillBarImg' />
            <div className='skillBarText'>
              <h2>UI/UX Design</h2>
              <p>This is a demo text, you can write your own content here</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={Webdesign} alt="Webdesign" className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Website Design</h2>
              <p>This demo text can be changed while making the production ready websites.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={Appdesign} alt="Appdesign" className='skillBarImg' />
            <div className='skillBarText'>
              <h2>App Design</h2>
              <p>You can write text ralated to mobile app devlopment.</p>
            </div>
          </div>
        </div>
        
    </section>
  )
}

export default Skills;
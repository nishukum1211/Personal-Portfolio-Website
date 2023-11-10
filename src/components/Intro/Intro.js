import React from 'react';
import './Intro.css';
import Img from '../../assets/images.jpg';
import btnImg from '../../assets/Hireme.jpg';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id='Intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>
            I'm <span className='introName'>Nishu</span><br></br> Website Designer
            </span>
            <p className='introPara'>I am a skilled web designer with experience in creating <br /> visually appealing and user friendly websites. </p>
            <Link><button className='btn'><img src={btnImg} alt='Hireme' className='btn2' />Hire Me</button></Link>

        </div>
        <img src={Img} alt="Profile" className='Img' />
    </section>
  )
}

export default Intro;
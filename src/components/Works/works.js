import React from 'react';
import './works.css';
import portfolio1 from '../../assets/portfolio1.jpg';
import portfolio2 from '../../assets/portfolio2.png';
import portfolio3 from '../../assets/portfolio3.jpg';
import portfolio4 from '../../assets/portfolio4.jpg';
import portfolio5 from '../../assets/portfolio5.png';
import portfolio6 from '../../assets/portfolio6.png';

const Works = () => {
  return (
    <section id="works">
        <h2 className='worktitle'>My Portfolio</h2>
        <span className='workDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses and achieve their goals and create a strong online presence.</span>
        <div className='worksImgs'>
            <img src={portfolio1} alt="" className='worksImg' />
            <img src={portfolio2} alt="" className='worksImg' />
            <img src={portfolio3} alt="" className='worksImg' />
            <img src={portfolio4} alt="" className='worksImg' />
            <img src={portfolio5} alt="" className='worksImg' />
            <img src={portfolio6} alt="" className='worksImg' />
        </div>
        <button className='workBtn'>See More</button>
    </section>
  )
}

export default Works;
import React, { useState } from 'react';
import './projects.css';
import project1 from '../../assets/projectimg1.jpg';
import project2 from '../../assets/WhatsApp Image 2023-11-10 at 9.28.56 PM.jpeg';
import project3 from '../../assets/image-270x220.jpg';
import project4 from '../../assets/WhatsApp Image 2023-11-10 at 9.12.23 PM.jpeg';




const Projects = () => {
    const [cards] = useState([
        {
           
            title: 'Social Media Web App',
            imgsrc: project1,
            text: "Features included creating and displaying posts, comments"
        },
        {
            
            title: 'Contact-app',
            imgsrc: project2,
            text: " Features included add, delete, read contacts   "
        },
        {
        
            title: 'Personal Portfolio',
            imgsrc: project3,
            text: "This website which contain project, contact info.,about"
        },
        {
            
            title: 'Calculator',
            imgsrc: project4,
            text: " features included add, subtract, multiply etc. "
        }
       

    ]);
  return (
    
    <section className='section'>
        <div className='section-container'>
            <h1 className='title'>My Projects</h1>
            <div className='cards'>
                {
                    cards.map((card, i) => (
                    <div key={i} className='card'>
                    <h3>{card.title}</h3><br />
                    <img src={card.imgsrc} alt=""  width="300" height="250"/>
                    
                    <p>{card.text}</p>

                    </div>

                    ))
                }
                
            </div>

        </div>
        
        
    </section>
  )
}

export default Projects;
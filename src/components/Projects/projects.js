import React, { useState } from 'react';
import './projects.css';
import project1 from '../../assets/careerZone.jpeg';
import project2 from '../../assets/contact.jpeg';
import project3 from '../../assets/youtube.jpeg';
import project4 from '../../assets/WhatsApp Image 2023-11-10 at 9.12.23 PM.jpeg';




const Projects = () => {
    const [cards] = useState([
        {
           
            title: 'Career Zone Website',
            imgsrc: project1,
            text: "*The Career Zone Website is a comprehensive platform designed to assist individuals in exploring career options, finding job opportunities, and accessing resources for career development. Built with a modern stack using React.js for the front-end, JavaScript for the back-end, and Firebase for the database, it delivers a seamless and interactive experience for users seeking guidance in their professional journey.*"
        },
        {
            
            title: 'Contact-app',
            imgsrc: project2,
            text: "*I developed a dynamic contact management website using Node.js and Express.js, featuring core functionalities such as adding, deleting, and reading contacts. This project highlights my full-stack development skills, with a robust backend that efficiently handles CRUD (Create, Read, Update, Delete) operations. The application is built with clean, scalable code and offers a user-friendly interface for seamless contact management. *"
        },
        {
        
            title: 'YouTube',
            imgsrc: project3,
            text: "*I developed a fully functional YouTube clone utilizing React.js for the front-end, Redux.js for state management, and Tailwind CSS for styling. The app integrates the YouTube Data API to fetch and display real-time video content, including search results, video details, and recommended videos. Key features include dynamic routing, video playback functionality, and a responsive layout that adapts to large screens. Redux was used to efficiently manage the application state, handling video search history, user preferences, and video playback states, ensuring a seamless user experience.*"
        },
        {
            
            title: 'Calculator',
            imgsrc: project4,
            text: "*I developed a basic calculator application using HTML, CSS, and JavaScript that includes essential arithmetic operations such as addition, subtraction, multiplication, and division. The application features a clean, responsive user interface and handles real-time calculations effectively. This project showcases my ability to create functional, interactive web applications using front-end technologies and demonstrates my understanding of JavaScript for managing user input and performing operations.*"
        }
       

    ]);
  return (
    
    <section id="projects">
        <div className='section-container'>
            <h1 className='title'>My Projects</h1>
            <div className='cards'>
                {
                    cards.map((card, i) => (
                    <div key={i} className='card'>
                    <h2>{card.title}</h2><br />
                    <img src={card.imgsrc} alt=""  width="390" height="250"/>
                    
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
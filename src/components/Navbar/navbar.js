// // import React, {useState} from 'react';
// // import './navbar.css';
// // import logo from '../../assets/React-logo.png';
// // import contactImg from '../../assets/contact.jpg';
// // import {Link} from 'react-scroll';
// // import menu from '../../assets/menu7.png';


// // const Navbar = () => {
// //     const[showMenu, setShowMenu] = useState(false);
// //     return (
// //         <nav className='navbar'>
// //             <img src={logo} alt="Logo" className='logo' />
// //             <div className="desktopMenu">
// //                 <Link activeClass='active' to='Intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" onClick={()=>setShowMenu(!showMenu)}>Home</Link>
// //                 <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" onClick={()=>setShowMenu(!showMenu)}>About</Link>
// //                 <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" onClick={()=>setShowMenu(!showMenu)}>Portfolio</Link>
// //                 <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" onClick={()=>setShowMenu(!showMenu)}>Projects</Link>
                



// //             </div>
// //             <button className="desktopMenuBtn" onClick={()=> {
// //                 document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
// //             }}>
// //                 <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>

// //             <img src={menu} alt="Menu" id='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
// //             <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
// //                 <Link activeClass='active' to='Intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
// //                 <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
// //                 <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
// //                 <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
// //                 <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
// //             </div>

        
// //         </nav>
// //     )
// // }

// // export default Navbar;
// import React, { useState } from 'react';
// import './navbar.css';
// import logo from '../../assets/React-logo.png';
// import contactImg from '../../assets/contact.jpg';
// import { Link } from 'react-scroll';
// import menu from '../../assets/menu7.png';

// const Navbar = () => {
//     const [showMenu, setShowMenu] = useState(false);

//     const toggleMenu = () => setShowMenu(!showMenu);

//     const scrollToContact = () => {
//         document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
//         setShowMenu(false);
//     };

//     return (
//         <nav className='navbar'>
//             <img src={logo} alt="Logo" className='logo' />
            
//             {/* Desktop Menu */}
//             <div className="desktopMenu">
//                 <Link to='Intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" onClick={toggleMenu}>Home</Link>
//                 <Link to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" onClick={toggleMenu}>About</Link>
//                 <Link to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" onClick={toggleMenu}>Portfolio</Link>
//                 <Link to='projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" onClick={toggleMenu}>Projects</Link>
//             </div>

//             {/* Contact Button */}
//             <button className="desktopMenuBtn" onClick={scrollToContact}>
//                 <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
//             </button>

//             {/* Mobile Menu */}
//             <img src={menu} alt="Menu" id='mobMenu' onClick={toggleMenu} />
//             <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
//                 <Link to='Intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
//                 <Link to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
//                 <Link to='works' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
//                 <Link to='projects' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
//                 <Link to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;
// Navbar.js
import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/React-logo.png';
import contactImg from '../../assets/contact.jpg';
import { Link } from 'react-scroll';
import menu from '../../assets/menu7.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => setShowMenu(!showMenu);

    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        setShowMenu(false);
    };

    return (
        <nav className='navbar'>
            <h1>Portfolio</h1>

            {/* Desktop Menu */}
            <div className="desktopMenu">
                <Link to='Intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" onClick={toggleMenu}>Home</Link>
                <Link to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" onClick={toggleMenu}>About</Link>
                <Link to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" onClick={toggleMenu}>My Skills</Link>
                <Link to='projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" onClick={toggleMenu}>Projects</Link>
            </div>

            {/* Contact Button */}
            <button className="desktopMenuBtn" onClick={scrollToContact}>
                <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
            </button>

            {/* Mobile Menu */}
            <img src={menu} alt="Menu" id='mobMenu' onClick={toggleMenu} />
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link to='Intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
                <Link to='works' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>My Skills</Link>
                <Link to='projects' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
                <Link to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;

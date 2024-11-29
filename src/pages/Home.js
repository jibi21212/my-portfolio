import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import kotlinIcon from '../icons/kotlin.svg';
import clojureIcon from '../icons/clojure.svg';
import djangoIcon from '../icons/django.svg';
import sqlIcon from '../icons/postgresql.svg';
import pythonIcon from '../icons/python.svg';
import reactIcon from '../icons/createreactapp.svg';
import javascriptIcon from '../icons/javascript.svg';
import cplusplusIcon from '../icons/cplusplus.svg';

function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState({ about: false, skills: false });

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const getContainerStyle = (index) => ({
    padding: '2rem',
    marginBottom: '2.5rem',
    backgroundColor: '#ffffff',
    boxShadow: hoveredIndex === index ? '0 12px 24px rgba(0, 0, 0, 0.2)' : '0 6px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '20px',
    border: `4px solid ${hoveredIndex === index ? '#007bff' : '#333'}`,
    transform: hoveredIndex === index ? 'translateY(-10px)' : 'none',
    transition: 'all 0.3s ease-in-out',
    zIndex: hoveredIndex === index ? 10 : 1,
    opacity: isVisible[index] ? 1 : 0,
    transform: isVisible[index] ? (hoveredIndex === index ? 'translateY(-10px)' : 'none') : 'translateY(50px)',
  });

  const imgIconStyle = (index) => ({
    width: hoveredIndex === index ? '4rem' : '3rem',
    height: hoveredIndex === index ? '4rem' : '3rem',
    margin: '0 1rem',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    transform: hoveredIndex === index ? 'scale(1.2)' : 'none',
  });

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('.about-container');
      const skillsSection = document.querySelector('.skills-container');
      if (aboutSection && skillsSection) {
        const aboutTop = aboutSection.getBoundingClientRect().top;
        const skillsTop = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (aboutTop < windowHeight * 0.75) {
          setIsVisible((prev) => ({ ...prev, about: true }));
        }
        if (skillsTop < windowHeight * 0.75) {
          setIsVisible((prev) => ({ ...prev, skills: true }));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container mt-5 home-section">
      <div className="home-welcome" style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h1>Welcome to My Portfolio</h1>
        <p>Discover my work, skills, and experience as a third-year Computer Science student at Ontario Tech University.</p>
      </div>

      <div
        className="about-container home-container"
        style={getContainerStyle('about')}
        onMouseEnter={() => handleMouseEnter('about')}
        onMouseLeave={handleMouseLeave}
      >
        <h1>About Me</h1>
        <p>Hello there! My name is Jibran. I am a third-year Computer Science student at Ontario Tech University, and you just found my portfolio!</p>
      </div>

      <div
        className="skills-container home-container"
        style={getContainerStyle('skills')}
        onMouseEnter={() => handleMouseEnter('skills')}
        onMouseLeave={handleMouseLeave}
      >
        <h2>Skills</h2>
        <ul>
          <li>Web Development: JavaScript (ES6+), HTML, CSS, HTTP requests, Web JAX-RS, Java API for WebSocket, Django, BeautifulSoup</li>
          <li>Development: Object-Oriented Programming (OOP), Software Development Lifecycle (SDLC), Algorithms, Data Structures</li>
          <li>Development Tools: IntelliJ IDEA, Visual Studio, Visual Studio Code, Android Studio, Eclipse, Anaconda, GitHub, PostgreSQL, pgmodeler</li>
          <li>Programming Languages: JavaScript, Python, Java, C++, Kotlin, SQL, Clojure</li>
        </ul>
        <div className="skills-icons mt-4">
          <img
            src={cplusplusIcon}
            alt="C++ Icon"
            style={imgIconStyle(9)}
            onMouseEnter={() => handleMouseEnter(9)}
            onMouseLeave={handleMouseLeave}
          />
          <FontAwesomeIcon icon={faJava} style={imgIconStyle(1)} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} />
          <img
            src={pythonIcon}
            alt="Python Icon"
            style={imgIconStyle(2)}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          />
          <img
            src={javascriptIcon}
            alt="JavaScript Icon"
            style={imgIconStyle(3)}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          />
          <img
            src={reactIcon}
            alt="React Icon"
            style={imgIconStyle(4)}
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          />
          <img
            src={kotlinIcon}
            alt="Kotlin Icon"
            style={imgIconStyle(5)}
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}
          />
          <img
            src={clojureIcon}
            alt="Clojure Icon"
            style={imgIconStyle(6)}
            onMouseEnter={() => handleMouseEnter(6)}
            onMouseLeave={handleMouseLeave}
          />
          <img
            src={sqlIcon}
            alt="SQL Icon"
            style={imgIconStyle(7)}
            onMouseEnter={() => handleMouseEnter(7)}
            onMouseLeave={handleMouseLeave}
          />
          <img
            src={djangoIcon}
            alt="Django Icon"
            style={imgIconStyle(8)}
            onMouseEnter={() => handleMouseEnter(8)}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

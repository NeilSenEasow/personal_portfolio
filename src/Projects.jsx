import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { faReact, faJs, faPython, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faCode, faBrain, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Projects.css";

const viewProjectLinkStyles = {
  display: 'inline-block',
  padding: '10px 20px',
  backgroundColor: '#121212',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
  border: '1px solid #fff',
  cursor: 'pointer', 
};

const projects = [
    {
        title: 'Keeper App',
        description: 'A note-taking app to keep your daily tasks and notes organized.',
        image: require('./assets/images/KeeperApp.png'),
        alt: 'Keeper App',
        link: '#', 
      },
      {
        title: 'To Do List',
        description: 'A simple application to track your pending tasks and achieve your goals.',
        image: require('./assets/images/ToDoList.png'),
        alt: 'To Do List',
        link: '#', 
      },
      {
        title: 'Genesis',
        description: 'A website to showcase projects using different libraries and technologies.',
        image: require('./assets/images/Genesis.png'),
        alt: 'Genesis',
        link: '#', 
      },
      {
        title: 'Career Finder',
        description: 'A website to find possible careers based on your skills and experience.',
        image: require('./assets/images/CareerFinder.png'),
        alt: 'Career Finder',
        link: '#', 
      },
];


function Projects() {
    return (
        <section className="skill">
          <div className="skill-bx">
                <h2>Projects</h2>
                <p>Here are some of my projects, showcasing my skills and expertise in different technologies.</p>
                <div className="skill-slider">
                    <Carousel>
                        {projects.map((project, index) => (
                          <Carousel.Item key={index} interval={1000}>
                                <img
                                    className="carousel-image"
                                    src={project.image}
                                    alt={project.alt}
                                />
                                <Carousel.Caption className="carousel-caption-custom">
                                    <h3 data-text={project.title}>{project.title}</h3>
                                    <p data-text={project.description}>{project.description}</p>
                                     <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                         <a
                                              className="view-project"
                                              href={project.link}
                                              style={viewProjectLinkStyles}
                                              onMouseOver={e => {e.target.style.backgroundColor = '#fff'; e.target.style.color = '#121212';}}
                                              onMouseOut={e => {e.target.style.backgroundColor = '#121212'; e.target.style.color = '#fff';}}
                                          >
                                              View Project
                                          </a>
                                      </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                         ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default Projects;
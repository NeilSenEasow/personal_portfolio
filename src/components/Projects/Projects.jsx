import React from "react";
import "./Projects.css";

// Importing images explicitly
import KeeperAppImg from "../assets/images/KeeperApp.png";
import ToDoListImg from "../assets/images/ToDoList.png";
import GenesisImg from "../assets/images/Genesis.png";
import CareerFinderImg from "../assets/images/CareerFinder.png";

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
    image: KeeperAppImg, // Imported image
    alt: 'Keeper App',
    link: 'https://9434vf.csb.app/',
  },
  {
    title: 'To Do List',
    description: 'A simple application to track your pending tasks and achieve your goals.',
    image: ToDoListImg, // Imported image
    alt: 'To Do List',
    link: 'https://9s6tss.csb.app/',
  },
  {
    title: 'Genesis',
    description: 'A website to showcase projects using different libraries and technologies.',
    image: GenesisImg, // Imported image
    alt: 'Genesis',
    link: 'https://neilseneasow.github.io/GENESIS_HACKATHON/',
  },
  {
    title: 'Career Finder',
    description: 'A website to find possible careers based on your skills and experience.',
    image: CareerFinderImg, // Imported image
    alt: 'Career Finder',
    link: 'https://neilseneasow.github.io/Live_Project/',
  },
];

function Projects() {
  return (
    <section className="projects">
      <div className="projects-bx">
        <h2>Projects</h2>
        <p>Here are some of my projects, showcasing my skills and expertise in different technologies.</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <img
                className="project-image"
                src={project.image}
                alt={project.alt}
              />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  className="view-project"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={viewProjectLinkStyles}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#fff';
                    e.target.style.color = '#121212';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#121212';
                    e.target.style.color = '#fff';
                  }}
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

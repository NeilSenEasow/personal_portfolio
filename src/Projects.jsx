import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { faReact, faJs, faPython, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faCode, faBrain, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Projects.css";

function Projects() {
    return (
        <section className="skill">
          <div className="skill-bx">
                <h2>Projects</h2>
                <p>Here are some of my projects, showcasing my skills and expertise in different technologies.</p>
                <div className="skill-slider">
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="carousel-image"
                                src={require('./assets/images/KeeperApp.png')}
                                alt="Keeper App"
                            />
                            <Carousel.Caption className="carousel-caption-custom">
                                 <h3 data-text="Keeper App">Keeper App</h3>
                                 <p data-text="A note-taking app to keep your daily tasks and notes organized.">A note-taking app to keep your daily tasks and notes organized.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="carousel-image"
                                src={require('./assets/images/ToDoList.png')}
                                alt="To Do List"
                            />
                            <Carousel.Caption className="carousel-caption-custom">
                                 <h3 data-text="To Do List">To Do List</h3>
                                <p data-text="A simple application to track your pending tasks and achieve your goals.">A simple application to track your pending tasks and achieve your goals.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="carousel-image"
                                src={require('./assets/images/Genesis.png')}
                                alt="Genesis"
                            />
                            <Carousel.Caption className="carousel-caption-custom">
                                <h3 data-text="Genesis">Genesis</h3>
                                <p data-text="A website to showcase projects using different libraries and technologies.">A website to showcase projects using different libraries and technologies.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="carousel-image"
                                src={require('./assets/images/CareerFinder.png')}
                                alt="Career Finder"
                            />
                            <Carousel.Caption className="carousel-caption-custom">
                                <h3 data-text="Career Finder">Career Finder</h3>
                                 <p data-text="A website to find possible careers based on your skills and experience.">A website to find possible careers based on your skills and experience.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
             <div className="skill-bx">
                <div className="skills-grid">
                     {/* Technical Skills */}
                     <div className="skill-category">
                         <h3>Technical Skills</h3>
                        <div className="skill-list">
                            <div className="skill-item">
                                <FontAwesomeIcon icon={faReact} size="2xl"/>
                                <span>React</span>
                            </div>
                            <div className="skill-item">
                                <FontAwesomeIcon icon={faJs} size="2xl"/>
                                <span>JavaScript</span>
                            </div>
                            <div className="skill-item">
                                <FontAwesomeIcon icon={faPython} size="2xl"/>
                                <span>Python</span>
                            </div>
                             <div className="skill-item">
                                <FontAwesomeIcon icon={faNodeJs} size="2xl"/>
                                <span>Node.js</span>
                            </div>
                             <div className="skill-item">
                                <FontAwesomeIcon icon={faCode} size="2xl"/>
                                <span>HTML/CSS</span>
                            </div>
                        </div>
                    </div>

                    {/* Soft Skills */}
                     <div className="skill-category">
                        <h3>Soft Skills</h3>
                         <div className="skill-list">
                            <div className="skill-item">
                                <FontAwesomeIcon icon={faBrain} size="2xl"/>
                                <span>Problem-solving</span>
                            </div>
                             <div className="skill-item">
                                <FontAwesomeIcon icon={faUsers} size="2xl"/>
                                <span>Teamwork</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Projects;
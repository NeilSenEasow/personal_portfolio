import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faPython, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faCode, faBrain, faUsers } from '@fortawesome/free-solid-svg-icons';
import './Skills.css'; // Import the custom CSS file

function Skills() {
    return (
        <section className="skill">
            <div className="skill-bx">
                <h2>Skills</h2>
                <p>My technical and soft skills.</p>
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

export default Skills;
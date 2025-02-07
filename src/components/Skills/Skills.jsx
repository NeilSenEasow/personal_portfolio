import React from "react";
import {
  faPython,
  faJava,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faJs,
  faReact,
  faNodeJs,
  faNpm,
  faGitAlt,
  faGithub,
  faLinux,
  faUnity,
  faWindows,
  faFigma,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Skills.css'

function Skills() {
  return (
    <div className="skill-bx">
      <div className="skills-grid">
        {/* Language Stack */}
        <div className="skill-category">
          <h3>Language Stack</h3>
          <div className="skill-list">
            <div className="skill-item">
              <FontAwesomeIcon icon={faCode} size="2xl" />
              <span>C</span>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faPython} size="2xl" />
              <span>Python</span>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faJava} size="2xl" />
              <span>Java</span>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faCode} size="2xl" />
              <span>C#</span>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faHtml5} size="2xl" />
              <span>HTML</span>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faCss3Alt} size="2xl" />
              <span>CSS</span>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faBootstrap} size="2xl" />
              <span>Bootstrap</span>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faJs} size="2xl" />
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faReact} size="2xl" />
              <span>React</span>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faNodeJs} size="2xl" />
              <span>Node.js</span>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faCode} size="2xl" />
              <span>.NET</span>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faJs} size="2xl" />
              <span>TypeScript</span>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faDatabase} size="2xl" />
              <span>MySQL</span>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faNpm} size="2xl" />
              <span>NPM</span>
            </div>
          </div>
        </div>

        {/* Software Stack */}
        <div className="skill-category">
          <h3>Software Stack</h3>
          <div className="skill-list">
            <div className="skill-item">
              <FontAwesomeIcon icon={faGitAlt} size="2xl" />
              <span>Git</span>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faGithub} size="2xl" />
              <span>GitHub</span>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faLinux} size="2xl" />
              <span>Linux</span>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faUnity} size="2xl" />
              <span>Unity</span>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faWindows} size="2xl" />
              <span>Windows</span>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faFigma} size="2xl" />
              <span>Figma</span>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faCode} size="2xl" />
              <span>Postman</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

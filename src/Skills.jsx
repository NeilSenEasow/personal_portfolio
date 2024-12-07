import React from "react";
import Carousel from 'react-bootstrap/Carousel';


function Skills() {
    return (
        <section className="skill">
            <div className="skill-bx">
                <h2>Skills</h2>
                <p>Some of my skills and expertise in different technologies.</p>

                <div className="skill-slider">
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="carousel-image"
                                src={require('./assets/images/image1.png')}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="carousel-image"
                                src={require('./assets/images/image2.png')}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="carousel-image"
                                src={require('./assets/images/image3.png')}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default Skills;

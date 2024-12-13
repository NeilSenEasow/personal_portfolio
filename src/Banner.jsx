import React, { useState, useEffect } from "react";
import "./banner.css"

function Banner() {
    const texts = ["Hi There!", "I'm Neil", "I'm a front-end developer"];
    const typingSpeed = 100;
    const pauseBetweenTexts = 2000;

    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(true);

    useEffect(() => {
      if(texts.length === 0) return;
      const currentString = texts[currentIndex];
        const delay = isDeleting ? typingSpeed / 2 : typingSpeed;

        if (!isDeleting && charIndex < currentString.length) {
            // Typing forward
            const typing = setTimeout(() => {
                setCurrentText(currentString.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            }, delay);
            return () => clearTimeout(typing);
        } else if (isDeleting && charIndex > 0) {
            // Deleting backward
            const deleting = setTimeout(() => {
                setCurrentText(currentString.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
            }, delay);
            return () => clearTimeout(deleting);
        } else if (!isDeleting && charIndex === currentString.length) {
            // Pause after typing the entire text
            const pause = setTimeout(() => {
                setIsDeleting(true);
            }, pauseBetweenTexts);
            return () => clearTimeout(pause);
        } else if (isDeleting && charIndex === 0) {
            // Move to the next tet after deletion
            const nextText = setTimeout(() => {
                setIsDeleting(false);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }, delay);
            return () => clearTimeout(nextText);
        }
    }, [charIndex, isDeleting, currentIndex]);

    return (
        <section style={{ marginBottom: '70px' }}> 
            <div className="banner">
                <p>
                    {currentText}
                    <span className="cursor"></span>
                </p>
            </div>
        </section>
    );
}

export default Banner;
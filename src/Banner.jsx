import React, { useState, useEffect } from "react";

function Banner() {
  const texts = ["Hi There!", "I'm Neil", "I'm a front-end developer"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="banner">
      <p>{texts[currentIndex]}</p>
    </div>
  );
}

export default Banner;

import React, { useState } from "react";
import "./App.css";
import ButtonLeft from "./components/ButtonLeft";
import logo from '../src/images/logoPro.png'
import ButtonRight from "./components/ButtomRight";

function App() {
  const logos = [
    {
      id: 1,
      src:logo,
      alt: "Logo 1",
    },
    {
      id: 2,
      src: logo,
      alt: "Logo 2",
    },
    {
      id: 3,
      src: logo,
      alt: "Logo 3",
    },
    {
      id: 4,
      src: logo,
      alt: "Logo 4",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNextClick = () => {
    if (selectedIndex === logos.length - 1) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (selectedIndex === 0) {
      setSelectedIndex(logos.length - 1);
    } else {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="app">
      <ButtonLeft handlePreviousClick={handlePreviousClick} />
     <div className="container">
      {logos.map((logo, index) => (
        <img
          src={logo.src}
          alt={logo.alt}
          key={index}
          onClick={() => handleImageClick(index)}
          className={index === selectedIndex ? "selected" : ""}
        />
      ))}
     </div>
      <ButtonRight handleNextClick={handleNextClick} /> 
    </div>
  );
}

export default App;

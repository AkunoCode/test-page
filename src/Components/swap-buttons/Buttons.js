import React, { useState } from 'react';
import './Buttons.css'

// Import your images
import defaultIlearn from './Assets/deselected_ilearn.png';
import selectedIlearn from './Assets/selected_ilearn.png';
import defaultIteach from './Assets/deselected_iteach.png';
import selectedIteach from './Assets/selected_iteach.png';
import image1 from './Assets/one.jpg';
import image2 from './Assets/two.jpg';

const MyComponent = () => {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  }

  return (
    <div className="container">
      <div className="button-container">
        <button className="button" onClick={() => handleButtonClick(1)}>
          <img src={selectedButton === 1 ? selectedIlearn : defaultIlearn} alt="Iteach" />
        </button>
        <button className="button" onClick={() => handleButtonClick(2)}>
          <img src={selectedButton === 2 ? selectedIteach : defaultIteach} alt="Ilearn" />
        </button>
      </div>
      <img className="display" src={selectedButton === 1 ? image1 : image2} alt="Display" style={{height: '150px', width: 'auto'}}/>
    </div>
  );
}

export default MyComponent;

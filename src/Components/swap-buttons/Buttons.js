import image1 from './Assets/one.jpg';
import image2 from './Assets/two.jpg';


import React, { useState } from 'react';

function Buttons() {
  const [image, setImage] = useState('');

  const handleClick = (imgUrl) => {
    setImage(imgUrl);
  }

  return (
    <div>
      <button onClick={() => handleClick(image1)}>Button 1</button>
      <button onClick={() => handleClick(image2)}>Button 2</button>
      {image && <img src={image} alt="selected" />}
    </div>
  );
}

export default Buttons;

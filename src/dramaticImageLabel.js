import React, { useState } from 'react';
import HappyImage from './happy.png'; // Make sure you have happy.png in your project folder
import LikeImage from './like.png';   // Make sure you have like.png in your project folder
import SadImage from './sad.png';     // Make sure you have sad.png in your project folder

function EmojiDisplay() {
  const [text, setText] = useState('');  // State to store the value typed in the textbox
  const [image, setImage] = useState(null); // State to store the image URL

  // Handle changes in the textbox input
  const handleChange = (e) => {
    const value = e.target.value; // Get the value typed in the text box
    setText(value); // Update the text state

    // Logic to change the image based on the typed input
    if (value.toLowerCase() === 'happy') {
      setImage(HappyImage); 
    } else if (value.toLowerCase() === 'like') {
      setImage(LikeImage); 
    } else if (value.toLowerCase() === 'sad') {
      setImage(SadImage); 
    } else {
      setImage(null); 
    }
  };

  return (
    <div className="emoji-display">
      <h3>Enter a word (Happy, Like, Sad):</h3>
      
      {/* Textbox for user input */}
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type 'Happy', 'Like', or 'Sad'"
      />

      {/* Label for showing the image */}
      <div>
        {image && <img src={image} alt="emoji" style={{ width: '100px', height: '100px' }} />}
      </div>
    </div>
  );
}

export default EmojiDisplay;

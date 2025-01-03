import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from "./counter";
import EmojiCounter from './emojiCounter';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <Counter/>
  <EmojiCounter pic="Love"/>
  <EmojiCounter pic="Like"/>
  <EmojiCounter pic="Sad"/>
  <EmojiCounter pic="Happy"/>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StarRating from './StarRating';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={10} size={60} color="blue" messages={['terible', 'poor', 'very-bad', 'bad', 'not-bad', 'normal', 'good', 'better', 'excellent', 'amazing']} /> */}
  </React.StrictMode>
);


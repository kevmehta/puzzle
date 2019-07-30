import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <div className="App">
    <App
      defaultvalue={[
        6, 11, 10, 2,
        15, 7, 5, 9,
        14, 0, 13, 3,
        4, 8, 12, 1
      ]}
      result={[
        1, 2, 3, 4,
        5, 6, 7, 8,
        9, 10, 11, 12,
        13, 14, 15, 0
      ]}
      width={4} 
      height={4}
      emptycellx={1} 
      emptycelly={2}
    />
  </div>,
  document.getElementById('root')
);

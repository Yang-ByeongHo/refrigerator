import React from 'react';
import './Storage.css';

function Storage() {
  return (
    <div className="storage">
      <h2>재료 저장</h2>
      <div className="items">
        <div className="item">
          <img src="https://cdn.pixabay.com/photo/2016/03/05/22/59/onions-1239423_640.jpg" alt="Onions" />
          <p>양파</p>
        </div>
        <div className="item">
          <img src="https://cdn.pixabay.com/photo/2017/05/03/20/49/tomato-2282101_640.jpg" alt="Tomato" />
          <p>토마토</p>
        </div>
        <div className="item">
          <img src="https://cdn.pixabay.com/photo/2016/02/05/15/34/pasta-1181189_640.jpg" alt="Pepper" />
          <p>야채</p>
        </div>
      </div>
    </div>
  );
}

export default Storage;

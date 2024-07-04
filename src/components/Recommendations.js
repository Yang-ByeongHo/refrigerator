import React from 'react';
import './Recommendations.css';

function Recommendations() {
  return (
    <div className="recommendations">
      <h2>저장된 재료로 레시피 추천(AI)</h2>
      <div className="recipes">
        <div className="recipe">
          <img src="path/to/teriyaki-image" alt="Teriyaki Chicken Stir Fry" />
          <p>Teriyaki Chicken Stir Fry</p>
        </div>
        <div className="recipe">
          <img src="path/to/beef-steak-image" alt="Beef steak with fried vegetables" />
          <p>Beef Steak with Fried Vegetables</p>
        </div>
        <div className="recipe">
          <img src="path/to/pasta-image" alt="Pasta Bolognese with Turkey" />
          <p>Pasta Bolognese with Turkey</p>
        </div>
      </div>
    </div>
  );
}

export default Recommendations;

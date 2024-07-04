import React from 'react';
import './Buttons.css';

function Buttons() {
  return (
    <div className="buttons">
      <button>재료 저장</button>
      <button>저장된 재료로 레시피 추천(AI)</button>
      <button>오늘의 식단 추천</button>
      <button>장보기 재료 추천 (AI)</button>
    </div>
  );
}

export default Buttons;

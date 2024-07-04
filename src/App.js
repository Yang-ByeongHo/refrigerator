import React from 'react';
import './App.css';
import Storage from './components/Storage';
import Recommendations from './components/Recommendations';
import Buttons from './components/Buttons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="weather-date">
          <p>날씨, 날짜</p>
        </div>
        <div className="login">
          <p>로그인</p>
        </div>
      </header>
      <main>
        <div className="storage-section">
          <Storage />
        </div>
        <div className="recommendations-section">
          <Recommendations />
        </div>
      </main>
      <footer>
        <Buttons />
      </footer>
    </div>
  );
}

export default App;

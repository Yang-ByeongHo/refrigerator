import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Storage from './components/Storage';
import Recommendations from './components/Recommendations';
import Buttons from './components/Buttons';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="weather-date">
            <p>날씨, 날짜</p>
          </div>
          <div className="login">
            <Link to="/login"><button><p>로그인</p></button></Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <div className="storage-section">
                  <Storage />
                </div>
                <div className="recommendations-section">
                  <Recommendations />
                </div>
              </>
            } />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <footer>
          <Buttons />
        </footer>
      </div>
    </Router>
  );
}

export default App;

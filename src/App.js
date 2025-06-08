import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Results from './pages/Results';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Title from './components/Title';

function App() {
  return (
    <div>
      <Title />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

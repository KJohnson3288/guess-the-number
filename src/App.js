import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
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
          <Route path="/game/:difficulty" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

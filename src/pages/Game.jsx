import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const GamePage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const difficulty = queryParams.get('difficulty') || 'easy';

  const [targetNumber, setTargetNumber] = useState(null);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [tries, setTries] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // Inclusion of navigate
  const navigate = useNavigate();

  // Button color set based on difficulty
  const buttonColorMap = {
    easy: "text-primary",
    medium: "text-success",
    hard: "text-warning",
    impossible: "text-danger"
  }

  // Set Timer
  useEffect(() => {
  let interval;

  if (isRunning) {
    interval = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
  }

  return () => clearInterval(interval); // cleanup on unmount
  }, [isRunning]);

  // Timer format
  const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
  };


  // Determine max range and generate number based on difficulty
  const generateTargetNumber = (difficulty) => {
    let maxRange;

    switch (difficulty) {
      case 'medium':
        maxRange = 100;
        break;
      case 'hard':
        maxRange = 1000;
        break;
      case 'impossible':
        maxRange = 1000000;
        break;
      default:
        maxRange = 10;
    }

      return Math.floor(Math.random() * (maxRange + 1));
    }

  useEffect(() => {
    setTargetNumber(generateTargetNumber(difficulty));
    setTries(0);
    setFeedback('');
  }, [difficulty]);


  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const numGuess = parseInt(guess);

    if (isNaN(numGuess)) {
      setFeedback('Please enter a valid number!');
      return;
    }

    setTries((prev) => prev + 1);

    if (numGuess === targetNumber) {

      // Save results in object
      const result = {
        difficulty,
        tries: tries + 1,
        time: secondsElapsed,
        timestamp: new Date().toISOString()
      };

      // Retrieve local storage array or create if doesn't exist
      const existingResults = JSON.parse(localStorage.getItem('gameResults')) || [];

      // Add results from current game
      existingResults.push(result);

      // Save updated list
      localStorage.setItem('gameResults', JSON.stringify(existingResults));

      // End game state
      setFeedback(`Correct! It took you ${tries + 1} tries.`);
      setGameOver(true);
      setIsRunning(false);
    } else if (numGuess < targetNumber) {
      setFeedback('Too low! Try again.');
    } else {
      setFeedback('Too high! Try again.');
    }

    setGuess('');
  };

  // Reset on playAgain
  const handlePlayAgain = () => {
  setGuess('');
  setFeedback('');
  setTargetNumber(generateTargetNumber(difficulty));
  setTries(0);
  setGameOver(false);
  setSecondsElapsed(0); // reset timer
  setIsRunning(true);   // start it again
  };



  return (
    // Section for character input
    <div className="container bg-light bg-gradient justify-content-center py-3" id="input-section">

      <div className='row text-center' id="input-title">
        <h2 className="display-5 mb-4">Difficulty: {difficulty.toUpperCase()}</h2>
      </div>

      {/* Submit Form for user */}
      <form onSubmit={handleSubmit}>

        <div className="container-fluid d-flex flex-column align-items-center" id="input-form">

          <div className="row col-md-4 col-12 mb-2" id="user-input">
            <input type="number" className="form-control" placeholder="Enter Your Guess" value={guess} onChange={(e) => setGuess(e.target.value)} />
          </div>

          <div className='row my-3' id="submit-button">
            <button type="submit" className={`btn btn-dark ${buttonColorMap[difficulty]} bg-gradient fw-medium`}> Submit Guess </button>
          </div>

          {/* Feedback Section */}
          <div className="row text-center my-3">
            <p className="fw-medium">{feedback}</p>
            <p className="fw-semibold">Attempts: {tries}</p>
          </div>

          {/* Timer display */}
          <div className="text-center my-3">
            <h5 className='fw-light'>Time Elapsed: {formatTime(secondsElapsed)}</h5>
          </div>

          {/*  Game Over Buttons */}
          {gameOver && (
            <div className="container mt-2 d-flex flex-column">
              <div className="row d-flex justify-content-evenly">
                <div className="col-md-4 col-12">
                  <button className="btn btn-outline-dark fw-semibold w-100" onClick={handlePlayAgain}> Play Again </button>
                </div>
                <div className="col-md-4 col-12">
                  <button className="btn btn-outline-dark fw-semibold w-100" onClick={() => navigate('/')}> Choose Another Difficulty </button>
                </div>
                <div className="col-md-4 col-12">
                  <button className="btn btn-outline-dark fw-semibold w-100" onClick={() => navigate('/results')}> View Results </button>
                </div>
              </div>
            </div>
          )}

        </div>

      </form>
      
    </div>
  );
};

export default GamePage;

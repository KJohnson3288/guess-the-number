import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container text-center mt-5">
      
      
      <div className="row container bg-light bg-gradient justify-content-center py-3" id="difficulty-container">

        <div class="row text-center my-4">
          <h3 class="display-3">Choose your difficulty: </h3>
        </div>

        {/* Easy Difficulty Button */}
        <div class="row col-8 difficulty-btn">
          <div class="row">
            <Link to="/game/easy" className="btn btn-dark bg-gradient"><h5 class="text-primary">EASY</h5></Link>
          </div>
          
          <div class="row">
            <p class="card-text"><small class="text-body-secondary">Guess Between: 0 - 10</small></p>
          </div>
        </div>

        {/* Medium Difficulty Button */}
        <div class="row col-8 difficulty-btn">
          <div class="row">
            <Link to="/game/medium" className="btn btn-dark bg-gradient"><h5 class="text-success">MEDIUM</h5></Link>
          </div>
          
          <div class="row">
            <p class="card-text"><small class="text-body-secondary">Guess Between: 0 - 100</small></p>
          </div>
        </div>

        {/* Hard Difficulty Button */}
        <div class="row col-8 difficulty-btn">
          <div class="row">
            <Link to="/game/hard" className="btn btn-dark bg-gradient"><h5 class="text-warning">HARD</h5></Link>
          </div>
          
          <div class="row">
            <p class="card-text"><small class="text-body-secondary">Guess Between: 0 - 1,000</small></p>
          </div>
        </div>

        {/* Impossible Difficulty Button */}
        <div class="row col-8 difficulty-btn">
          <div class="row">
            <Link to="/game/impossible" className="btn btn-dark bg-gradient"><h5 class="text-danger">IMPOSSIBLE</h5></Link>
          </div>
          
          <div class="row">
            <p class="card-text"><small class="text-body-secondary">Guess Between: 0 - 1,000,000</small></p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

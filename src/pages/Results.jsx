import React from 'react'
import { useNavigate } from 'react-router-dom'

const Results = () => {

    const navigate = useNavigate();

  return (
    <div className="container" id="results-section">
        <div className="row text-center" id="results-title">
            <h3 className="display-3">Results</h3>
        </div>

        {/* Results section placeholder */}
        <div className="row text-center">
            <p>No results yet</p>
        </div>

        {/* Button to return home */}
        <div className="row container mt-3" id="home-btn">
            <button className="btn btn-dark" onClick={() => navigate('/')}> Home </button>
        </div>
    </div>
  )
}

export default Results
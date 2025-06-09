import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Results = () => {

    const [results, setResults] = useState([]);
    const navigate = useNavigate();


    // Retrieve and set game results from local storage
    useEffect(() => {
        const storedResults = JSON.parse(localStorage.getItem('gameResults')) || [];
            
        // Checking log for stored results
        console.log("Loaded Results:", storedResults);
        
        setResults(storedResults);
    }, []);


    // Reuse this helper function
    const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`;
    };

  return (
        <div className="container d-flex flex-column align-items-center text-center mt-5" id="results-section">

            {/* Results Title */}
            <div className="row mb-4" id="results-title">
                <h3 className="display-3">Results</h3>
            </div>

            {/* Results section placeholder */}
            <div className="row my-5">

                {/* Set results table */}
                {results.length === 0 ? (
                <p className="text-center">No results yet.</p>
                ) : (
                <div className="table-responsive">
                    <table className="table table-striped table-bordered text-center">
                    <thead className="table-dark">
                        <tr>
                        <th>Difficulty</th>
                        <th>Tries</th>
                        <th>Time</th>
                        <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result, index) => (
                        <tr key={index}>
                            <td>{result.difficulty}</td>
                            <td>{result.tries}</td>
                            <td>{formatTime(result.time)}</td>
                            <td>{new Date(result.timestamp).toLocaleString()}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                )}

            </div>

            {/* Button to return home */}
            <div className="row col-md-6">
                <button className="btn btn-dark w-100" onClick={() => navigate('/')}> Home </button>
            </div>
            
        </div>
  )
}

export default Results
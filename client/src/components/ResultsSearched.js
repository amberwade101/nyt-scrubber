import React from "react";

const ResultsSearched = (props) => {
  return (
    <div>
      <div className="card  mb-5">
      <div className="card-header text-center">
        <h2>Search Results</h2>
      </div>
      
      <div className="card-body">
        {props.renderResults()}
      </div>
      </div>
    </div>
  )
}
 
export default ResultsSearched 
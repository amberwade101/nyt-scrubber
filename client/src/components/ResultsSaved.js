import React from "react";

const ResultsSaved = (props) =>
  <div>
    <div className="card mb-5">
      <div className="card-header text-center">
        <h2>Saved Articles</h2>
      </div>
      
      <div className="card-body">
        {props.renderSaved()}
      </div>
    </div>
  </div>

export default ResultsSaved
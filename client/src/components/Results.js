import React from "react";

const Results = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <a href={props.url} target="_blank">{props.url}</a>            
            <p className="card-text">{props.date.substring(0, 10)}</p>
          </div>

          <div className="col-md-6 text-right">
            <button onClick={() => props.handleSaveButton(props._id)}>SAVE IT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results;
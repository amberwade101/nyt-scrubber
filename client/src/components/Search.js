import React from "react";

const SearchForm = (props) => {
  return (
    <div>
      <div className="card mb-5">
      <div className="card-header text-center">
        <h2>Search for Articles</h2>
      </div>
      
      <div className="card-body text-center">
        <form>
          <div className="form-group">
            <label htmlFor="choiceInput">Topic</label>
            <input type="text" className="form-control" id="choiceInput" onChange={props.choiceInput} />
          </div>

          <div className="form-group">
            <label htmlFor="beginningYearInput">Beginning Year</label>
            <input type="text" className="form-control" id="beginningYearInput" onChange={props.beginningYearInput} />
          </div>

          <div className="form-group">
            <label htmlFor="endYr">End Year</label>
            <input type="text" className="form-control" id="endYr" onChange={props.endYr} />
          </div>

          <button type="submit" onClick={props.formSubmit}>SEARCH</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default SearchForm;
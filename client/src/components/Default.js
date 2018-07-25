import React, { Component } from "react";
import Billboard from "./Billboard";
import Results from "./Results";
import Archive from "./Archive";
import ResultsSaved from "./ResultsSaved";
import Search from "./Search";
import ResultsSearched from "./ResultsSearched";
import API from "../route/API";

class Home extends Component {
  state = {
    topicChoice: "",
    beginningYear: "",
    endYr: "",
    articles: [],
    saved: []
  };

  componentDidMount() {
    this.getSavedResults()
  }

  renderResults = () => {
    return this.state.articles.map(article => (
      <Results
        _id={article._id}
        key={article._id}
        title={article.headline.title}
        date={article.pub_date}
        url={article.web_url}
        handleSaveButton={this.handleSaveButton}
        getSavedResults={this.getSavedResults}
      />
    ));
  }

  renderSaved = () => {
    return this.state.saved.map(archive => (
      <Archive
        _id={archive._id}
        key={archive._id}
        title={archive.title}
        date={archive.date}
        url={archive.url}
        getSavedResults={this.getSavedResults}
      />
    ));
  }

  handleChoiceInput = (event) => {
    this.setState({topicChoice: event.target.value});
  }

  handlebeginningYearInput = (event) => {
    this.setState({beginningYear: event.target.value});
  }

  handleendYrInput = (event) => {
    this.setState({endYr: event.target.value});
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.search(this.state.topicChoice, this.state.beginningYear, this.state.endYr)
    .then((res) => {
        this.setState({ articles: res.data.response.docs });
    });
  }

  getSavedResults = () => {
    API.getArt()
    .then((res) => {
        this.setState({ saved: res.data });
    });
  }

  handleSaveButton = (id) => {
    const findArtID = this.state.articles.find((ID) => ID._id === id);
    const newSave = {title: findArtID.headline.title, date: findArtID.pub_date, url: findArtID.web_url};
    API.saveArt(newSave)
    .then(this.getSavedResults());
  }

  
  render() {
    return (
      <div>
        <Billboard />

        <div className="container">
          <Search
            ChoiceInput={this.handleChoiceInput}
            beginningYearInput={this.handlebeginningYearInput}
            endYr={this.handleendYrInput}
            formSubmit={this.handleFormSubmit}
          />

          <ResultsSearched
            renderResults={this.renderResults}
          />

          <ResultsSaved
            renderSaved={this.renderSaved}
          />
        </div>
      </div>
    );
  }
}

export default Home;
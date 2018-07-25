import axios from "axios";

var APIKEY = "2d3d38f14f5248d787f0beae9073ce46";          

var API = {

  search: function(choiceTopic, beginningYear, endYr) {
    const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${APIKEY}&q=${choiceTopic}&begin_date=${beginningYear}0101&end_date=${endYr}0101`;
    return axios.get(queryURL);
  },

  getArt: function() {
    return axios.get("/api/articles");
  },

  saveArt: function(dbArticle) {
    return axios.post("/api/articles", dbArticle);
  },

  deleteArt: function(id) {
    return axios.delete(`/api/articles/${id}`);
  }
};

export default API;
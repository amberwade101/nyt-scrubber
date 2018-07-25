const Article = require("../models/Article");

module.exports = {
  insert: function(req, res) {
    Article.create(req.body)
    .then(function(dbArticle) {
      res.json(dbArticle);
    }).catch(function(err) {
      res.json(err);
    });
  },
  findAll: function(req, res) {
    Article.find({})
      .then(function (dbArticle) {
        res.json(dbArticle);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  
  delete: function(req, res) {
    Article.remove({ _id: req.params.id })
    .then(function(dbArticle) {
      res.json(dbArticle);
    }).catch(function(err) {
      res.json(err);
    });
  }
};
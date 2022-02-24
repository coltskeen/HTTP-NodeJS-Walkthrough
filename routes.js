// routes.js

routes = {
    '/special-message': function(req, res) {
      res.end("You're SPECIAL");
    },
  
    '/non-special-message': function(req, res) {
      res.end("You're boring!");
    }
  };
  
module.exports = routes;
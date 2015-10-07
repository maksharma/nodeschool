
/*
 * GET users listing.
 */

exports = {
  list: function(req, res, next){
    req.users = [];
    next();
  },
  response: function(req, res) {
    res.json(req.users);
  }
};
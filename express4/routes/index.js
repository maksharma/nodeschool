
/*
 * GET home page.
 */

module.exports = {
  index1 : function(req, res, next){
  console.log(req.body);//.field1);
  //res.render('index', { title: 'Express' });
  next();
  },
  index222 : function(req, res, next){
    console.log('next called!!');
    res.render('index', { title: 'Express' });
  }
};
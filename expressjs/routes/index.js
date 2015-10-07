
/*
 * GET home page.
 */

module.exports={
  index: function(req, res, next){
  //res.render('index', { title: 'Express' });
  next();
},
index2 : function(req, res){
  res.render('index', { date: 'mydate' });
}
}

/*

exports={index : function(req, res, next){
  res.render('index', { title: 'Express' });
  next();

},
index2 : function(){
  res.render('index', {date: 'mydate'});

}
*/
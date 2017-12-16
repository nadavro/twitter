const express = require('express');
const router = express.Router();
const Twitter = require('twitter');

var twitterClient = new Twitter({
  consumer_key: '37ggMqn15Qi6tAvPc1mr97sWM',
  consumer_secret: '0uWQyIdig0oBUBc8nSoztfTf9XyePUed5WR66fFUUWfIrxiBky',
  access_token_key: '939408135801987072-0jovBiAHL7YjAvXKutuO87aslZZrHGz',
  access_token_secret: 'ow6ee8OOONnpg5NrPg5UW7Bq43HSj6a9IHzD6EKFUPV7B'
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/users', (req, res) => {
  var query = req.query.query; 
  var params = {q:query,count:20};
  var ans = [];
  twitterClient.get('users/search',params,function(error, tweets, response){
    for (var i = 0; i < tweets.length; i= i+1){
      var currentUser = tweets[i];
      var username = currentUser['screen_name'];
      var fullname = currentUser['name'];
      var id = currentUser['id_str'];
      var current = {
        username:username,
        fullname: fullname,
        id: id
      };
      ans.push(current);
    }
    res.json(ans);
  })
});
module.exports = router;
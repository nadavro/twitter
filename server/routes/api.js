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


/* GET all users with specific string in screen name */
router.get('/users', (req, res) => {
  console.log('getUsers');
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

router.get('/users/search/tweets', (req,res) => {
  console.log('mike smalling');
  var id = req.query.id;
  console.log(id);
  var params = {user_id:id,count:50};
  if (req.query.max_id){
    params.max_id = req.query.max_id;
  }
  var ans = [];
  twitterClient.get('statuses/user_timeline',params,function(error,tweets,response){
    for (var i = 0; i < tweets.length; i++){
      var currentTweet  = tweets[i];
      var text = currentTweet['text'];
      var date = currentTweet['created_at'];
      var id = currentTweet['id'];
      var current = {
        text:text,
        date:date,
        id:id
      }
      ans.push(current);
    }
    console.log('hahahaha');
    res.json(ans);
    
  });
});
module.exports = router;
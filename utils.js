var socket = io.connect('http://fun-projects.cloudapp.net/');
socket.on('tweet', function (data) {
  add(data);
});

function add(data) {
  var line1 = data.tweetWith5.tweet;
  var link1 = data.tweetWith5.url;
  var line2 = data.tweetWith7.tweet;
  var link2 = data.tweetWith7.url;
  var date = data.today;
  var listItemHTML = '<div class=\'tweet\'><span class=\'tweet_text\'><a target="_blank" href="' + link1 + '">' + line1 + '</a><br/><a href="' + link2 + '">' + line2 + '</a><br/>#HalloweenHaiku</span><span class=\'tweet_timestamp\'>' + date + '</span><span class=\'tweet_user\'>@HaikuHalloween</span></div>';
  $(listItemHTML).hide().prependTo('#tweets_container').slideDown('slow');
}

$(document).ready(function() {
 $.get( "http://fun-projects.cloudapp.net/halloween-haiku/data", function(res) {
   for(var i = 0; i < res.length; i++) {
     add(res[i], "fast");
   }
 });
});

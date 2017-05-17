  function play() {
      var audio = document.getElementById("audio");
      audio.play();
  }

$(document).ready(function() {
	$.getJSON('http://jsonip.com?callback=?', function (data) {
      $('#ip-address').text(data.ip);
  });	
});

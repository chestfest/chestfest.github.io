  function play() {
      var audio = document.getElementById("audio");
      audio.play();
  }

  var urls = new Array("http://www.google.com/", "http://www.yahoo.com/");

  function redirect() {
      window.location = urls[Math.floor(urls.length * Math.random())];
  }
  var temp = setInterval("redirect()", 3000);

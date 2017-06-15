  function play(){
       var audio = document.getElementById("audio");
       audio.play();
                 }
    function PlaySound(eff) {
        alert("On Press of "+eff);
        var path = "Display/Audio/"
        var snd = new Audio(path + eff + ".wav");
        snd.play();
    }

  window.onload = function() {

      document.getElementById('ani').addEventListener('click', function(e) {
          var img = document.createElement('img');
          img.setAttribute('src', 'http://blog.stackoverflow.com/wp-content/uploads/stackoverflow-logo-300.png');
          e.target.appendChild(img);
      });

  };

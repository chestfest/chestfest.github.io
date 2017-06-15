  function play(){
       var audio = document.getElementById("audio");
       audio.play();
                 }

    $(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="Display/Audio/Airhorn.wav";
        obj.volume=0.10;
        obj.autoPlay=false;
        obj.preLoad=true;       
 
        $(".playSound").click(function() {
            obj.play();
        });
 
    });
 

  window.onload = function() {

      document.getElementById('ani').addEventListener('click', function(e) {
          var img = document.createElement('img');
          img.setAttribute('src', 'http://blog.stackoverflow.com/wp-content/uploads/stackoverflow-logo-300.png');
          e.target.appendChild(img);
      });

  };

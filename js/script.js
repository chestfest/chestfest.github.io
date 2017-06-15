  function play() {
      var audio = document.getElementById("play()");
      audio.play();
  }

  window.onload = function () {

      document.getElementById('ani').addEventListener('click', function (e) {
          var img = document.createElement('img');
          img.setAttribute('src', 'http://blog.stackoverflow.com/wp-content/uploads/stackoverflow-logo-300.png');
          e.target.appendChild(img);
      });

  };

  function play_audio() {
      ///alert('hi');
      //$('#id1').get(0).play()
      //var snd = new Audio("Display/Audio/Airhorn.wav"); // buffers automatically when created
      //document.getElementById('AudioMain').innerHTML = "";
      //for(var ni=1;ni<=12;ni++)
      //{
      //alert(ni);
      //document.getElementById('AudioMain').innerHTML+=' <audio id="id'+ni+'" preload="auto"><source src="Display/Audio/Airhorn.wav" type="audio/wav"><source src="Display/Audio/Airhorn.wav" type="audio/wav"></audio>';
      //}

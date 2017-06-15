  function play() {
      var audio = document.getElementById("play()");
      audio.play();
  }

function Audio() {
var snd1  = new Audio();
var src1  = document.createElement("source");
src1.type = "audio/wav";
src1.src  = "Display/Audio/Airhorn.wav";
snd1.appendChild(src1);

var snd2  = new Audio();
var src2  = document.createElement("source");
src2.type = "audio/wav";
src2.src  = "Display/Audio/Airhorn.wav";
snd2.appendChild(src2);
}

snd1.play(); snd2.play(); // Now both will play at the same time

  window.onload = function () {
      document.getElementById('ani').addEventListener('click', function (e) {
          var img = document.createElement('img');
          img.setAttribute('src', 'http://blog.stackoverflow.com/wp-content/uploads/stackoverflow-logo-300.png');
          e.target.appendChild(img);
      });
  };

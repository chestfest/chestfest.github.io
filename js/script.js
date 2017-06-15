  function play() {
      var audio = document.getElementById("play()");
      audio.play();
  }

var clickSound = new Audio("Display/Audio/Airhorn.wav");

function playAudioOnKeyDown(e) {
  if (e.keyCode == 38) {
    clickSound.play();
  }
}
document.onkeydown = playAudioOnKeyDown;


function pauseAudioOnKeyUp(e) {
  if (e.keyCode == 38) {
    clickSound.pause();
  }
}
document.onkeyup = pauseAudioOnKeyUp;

  window.onload = function () {
      document.getElementById('ani').addEventListener('click', function (e) {
          var img = document.createElement('img');
          img.setAttribute('src', 'http://blog.stackoverflow.com/wp-content/uploads/stackoverflow-logo-300.png');
          e.target.appendChild(img);
      });

  };

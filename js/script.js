function play() {
    document.getElementById('audio').play();
}

function Sound(){
    this.src = "Airhorn"
}

function playSound(source){
    var sound = new Sound();
    sound.src = source;
    sound.play()
}

  window.onload = function() {

      document.getElementById('ani').addEventListener('click', function(e) {
          var img = document.createElement('img');
          img.setAttribute('src', 'http://blog.stackoverflow.com/wp-content/uploads/stackoverflow-logo-300.png');
          e.target.appendChild(img);
      });

  };

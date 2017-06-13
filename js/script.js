function play() {
    document.getElementById('Display/hit.wav').play();
}

  window.onload = function() {

      document.getElementById('ani').addEventListener('click', function(e) {
          var img = document.createElement('img');
          img.setAttribute('src', 'http://blog.stackoverflow.com/wp-content/uploads/stackoverflow-logo-300.png');
          e.target.appendChild(img);
      });

  };

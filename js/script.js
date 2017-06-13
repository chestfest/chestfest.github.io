var s = new Audio('Display/hit.wav');

var s1 = new Audio('Display/punch.wav');

var playFirst = true;
function play() {
  if (playFirst) {
    s.play();
  } else {
    s2.play();
  }
  playFirst = !playFirst;
}


window.onload = function() {

  document.getElementById('ani').addEventListener('click', function (e) {
    var img = document.createElement('img');
    img.setAttribute('src', 'http://blog.stackoverflow.com/wp-content/uploads/stackoverflow-logo-300.png');
    e.target.appendChild(img);
  });

};

'use strict'

navigator.getUserMedia({video: true, audio: true}, function(localMediaStream) {
  var video = document.querySelector('video');
  video.src = window.URL.createObjectURL(localMediaStream);

  // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
  // See crbug.com/110938.
  video.onloadedmetadata = function(e) {
  // Ready to go. Do some stuff.
  };
}, onFailSoHard);

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;

var video = document.querySelector('video');

if (navigator.getUserMedia) {
  navigator.getUserMedia({audio: true, video: true}, function(stream) {
    if (navigator.webkitGetUserMedia) {
      video.src = window.webkitURL.createObjectURL(stream);
    } else {
      video.src = stream; // Opera
    }
  }, onFailSoHard);
} else {
  video.src = 'somevideo.webm'; // fallback.
}

function hasGetUserMedia() {
   // Note: Opera builds are unprefixed.
   return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

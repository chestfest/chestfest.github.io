'use strict'
//using sweetalert code here
if (window.location.pathname != '/c/web') {
    swal("Notice", "This program is in the developing stage and some assets may be unfinished or broken.")
}

function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullscreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

function makeFullScreen() {
    document.getElementsByTagName("iframe")[0].className = "fullScreen";
    var elem = document.body;
    requestFullScreen(elem);
}

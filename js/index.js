'use strict'

//using sweetalert code here
window.onload = function() {
    if (window.location.pathname != '/c/web') {
        swal("Notice", "This program is in the developing stage and some assets may be unfinished or broken.")
    }
}

function KeyPress(e) {
    var cf = window.event ? event : e

    if (cf.keyCode == 116 && cf.ctrlKey) swal({title: "Refreshing...", showConfirmButton: false});
    else if (cf.keyCode == 116) swal({title: "Refreshing...", showConfirmButton: false});
}

document.onkeydown = KeyPress;

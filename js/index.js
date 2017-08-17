'use strict'

//using sweetalert code here
window.onload = function() {
    if (window.location.pathname != '/c/web') {
        swal("Notice", "This program is in the developing stage and some assets may be unfinished or broken.")
    }
}

function KeyPress(e) {
    var cf = window.event ? event : e

    if (cf.keyCode == 116 && cf.ctrlKey) swal({title: "Refreshing...", text: "App Created by Inb4", showConfirmButton: false});
    else if (cf.keyCode == 116) swal({title: "Refreshing...", text: "App Created by Inb4", showConfirmButton: false});
    else if (cf.keyCode == 82 && cf.ctrlKey) swal({title: "Refreshing...", text: "App Created by Inb4", showConfirmButton: false});
}

document.onkeydown = KeyPress;

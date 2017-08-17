'use strict'

//using sweetalert code here
window.onload = function() {
    if (window.location.pathname != '/c/splix-io') {
        swal("Notice", "This program is in the developing stage and some assets may be unfinished or broken.")
    }
}

function KeyPress(e) {
    var cf = window.event ? event : e

    if (cf.keyCode == 116 && cf.ctrlKey) swal({title: "Refreshing...", text: "┻━┻彡 ヽ(ಠ益ಠ)ノ彡┻━┻", showConfirmButton: false});
    else if (cf.keyCode == 116) swal({title: "Refreshing...", text: "┻━┻彡 ヽ(ಠ益ಠ)ノ彡┻━┻", showConfirmButton: false});
    else if (cf.keyCode == 82 && cf.ctrlKey) swal({title: "Refreshing...", text: "┻━┻彡 ヽ(ಠ益ಠ)ノ彡┻━┻", showConfirmButton: false});
}

document.onkeydown = KeyPress;

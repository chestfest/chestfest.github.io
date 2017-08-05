'use strict'

var website = agar.io

//using sweetalert code here
if (window.location.pathname != '/c/web') {
    swal("Notice", "This program is in the developing stage and some assets may be unfinished or broken.")
}

window.onload = function () {
    //document.getElementById("submit").onclick = function() {
    document.getElementById("web").innerhtml += '<iframe src="https://' + website + '/" style="position:fixed; top:80px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>';
}
//}



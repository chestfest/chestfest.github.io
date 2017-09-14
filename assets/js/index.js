'use strict';

/*(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');*/

//using sweetalert code here
window.onload = function() {
    if (window.location.pathname != '/c/splix-io') {
        swal("Notice", "This program is in the developing stage and some assets may be unfinished or broken.")
    }
    if (annyang) {
        var commands = {
            'hello': function() {
                swal("Hello", "This is a voice recognition mini easter egg!")
            }
            'hi': function() {
                swal("Hello", "This is a voice recognition mini easter egg!")
            }
            'heya': function() {
                swal("Hello", "This is a voice recognition mini easter egg!")
            }
            'heyo': function() {
                swal("Hello", "This is a voice recognition mini easter egg!")
            }
            'hiya': function() {
                swal("Hello", "This is a voice recognition mini easter egg!")
            }
            'herro': function() {
                swal("Hello", "This is a voice recognition mini easter egg!")
            }
            'hallo': function() {
                swal("Hello", "This is a voice recognition mini easter egg!")
            }
            'harro': function() {
                swal("Hello", "This is a voice recognition mini easter egg!")
            }
        };
        annyang.addCommands(commands);
        annyang.debug();

        annyang.start();

    }
}

function KeyPress(e) {
    var cf = window.event ? event : e

    if (cf.keyCode == 116 && cf.ctrlKey) swal({
        title: "Refreshing...",
        showConfirmButton: false
    });
    else if (cf.keyCode == 116) swal({
        title: "Refreshing...",
        showConfirmButton: false
    });
    else if (cf.keyCode == 82 && cf.ctrlKey) swal({
        title: "Refreshing...",
        showConfirmButton: false
    });
}

document.onkeydown = KeyPress;

if (window.top !== window.self) window.top.location.replace(window.self.location.href);

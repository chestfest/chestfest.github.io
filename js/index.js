'use strict'
//using sweetalert code here
if (window.location.pathname != '/c/web') {
    swal("Notice", "This program is in the developing stage and some assets may be unfinished or broken.")
}
console.log('%c                                > ChestFest < ', 'color: #8CD4F5; font-size: 20px; font-weight: bold;')
window.onload = function debug() {
    console.info('Welcome to ChestFest, a website unblocker program. You can find the Github Repo here: https://github.com/chestfest/chestfest.github.io')
}
window.onerror = function() {
    console.error('Try to reload (⟳) page. If page still does not work, wait until our developers fix the problem.')
}

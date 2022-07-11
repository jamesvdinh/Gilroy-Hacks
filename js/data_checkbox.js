// Gilroy Hacks Website Source Code -> JS (https://gilroyhacks.com)

var i;
var checkboxes = document.querySelectorAll('#signup-container input[type=checkbox]');
var verify = true;
function save() {
    for (i = 0; i < checkboxes.length; i++) {
        localStorage.setItem(checkboxes[i].value, checkboxes[i].checked);
    }
}
window.onload = function() {
    load();
};
function load() {
    for (i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = localStorage.getItem(checkboxes[i].value) === 'true' ? true:false;
    }
}
function check(id) {
    document.getElementById(id).checked = true;
}
function uncheck(id) {
    document.getElementById(id).checked = false;
}
function notification(id) {
    if (localStorage.getItem(checkboxes[id].value) != true) { verify = false; }
    if (verify) { document.getElementById('notification').style.visibility = visible; }
}

// function btnToggle() {
//     if (document.getElementById('#check').checked) {
//         document.getElementById('#check').checked = false;
//     }
//     else {
//         document.getElementById('#check').checked = true;
//     }
// }
// document.getElementById('#check').addEventListener('click', function (event) {
//     if (!document.getElementById('check').checked) {
//         event.stopPropagation();
//     }
// });
// window.onclick = function(event) {
//     if (!event.target.matches('check')) {
//         if (document.getElementById('check').checked) {
//             document.getElementById('check').checked = false;
//         }
//     }
// }

// document.getElementById("navList").addEventListener('click', function (event) {
//     if (document.getElementById('check').checked) {
//         event.stopPropagation();
//     }});

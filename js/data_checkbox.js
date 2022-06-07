var i;
var checkboxes = document.querySelectorAll('input[type=checkbox]');
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
function check01() {
    document.getElementById('01').checked = true;
}
function check02() {
    document.getElementById('02').checked = true;
}
function checkt(id) {
    document.getElementById(id).checked = true;
}
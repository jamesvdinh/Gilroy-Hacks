var i;
var checkboxes = document.querySelectorAll('#signup-container input[type=checkbox]');
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
function notifitcation_popup() {
    var verify = true;
    for (i = 0; i < checkbox.length; i++)
    {
        if (localStorage.getItem(checkboxes[i].value) != true) {
            verify = false;
            break;
        }
    }
    if (verify) {
        document.getElementById('notification').style.visibility = visible;
    }
}
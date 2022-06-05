function saveData() {
    var checkBox = document.getElementById("01");

    if (checkBox.checked == true){
        localStorage.setItem('checked', 'true')
    }
    else {
        localStorage.setItem('checked', 'false')
    }
    console.log(localStorage);
}
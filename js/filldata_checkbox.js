function loadData() {
    if (localStorage.getItem('checked') == 'true') {
        document.getElementById("01").checked = true;
    }
    console.log("test");
}
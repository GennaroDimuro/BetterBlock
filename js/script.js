'use strict';

function selectAll() {
    let checkAll = document.querySelectorAll("#taskList tbody input[type='checkbox']");
    for (let cell of checkAll) {
        cell.checked = true;
        cell.onclick();
    }
}

function loginWithGoogle() {
    const backendUrl = "http://127.0.0.1:5000/auth/login";

    window.location.href = backendUrl;
}

window.onload = function() {
    console.log("La página cargó completamente.");

};
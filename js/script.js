'use strict';

function selectAll() {
    let checkAll = document.querySelectorAll("#taskList tbody input[type='checkbox']");
    for (let cell of checkAll) {
        cell.checked = true;
        cell.onclick();
    }
}

window.onload = function() {
    console.log("La página cargó completamente.");

};
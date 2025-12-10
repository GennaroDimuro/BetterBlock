'use strict';

function selectAll() {
    const checkboxes = document.querySelectorAll('#taskList tbody input[type="checkbox"]');
    const icon = document.getElementById('checkMark');
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);

    checkboxes.forEach(cb => cb.checked = !allChecked);

    if (allChecked) {
        icon.classList.remove('fa-square-check');
        icon.classList.add('fa-square');
    } else {
        icon.classList.remove('fa-square');
        icon.classList.add('fa-square-check');
    }
}

function deleteSelected() {
    const rows = document.querySelectorAll('#taskList tbody tr');
    rows.forEach(row => {
        const checkbox = row.querySelector('input[type="checkbox"]');
        if (checkbox && checkbox.checked) {
            row.remove();
        }
    });
}

function addTask(task, assigned, priority, dueDate) {
        const tbody = document.querySelector('#taskList tbody');
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td><input type="checkbox"></td>
            <td>${task}</td>
            <td>${assigned}</td>
            <td>${priority}</td>
            <td>${dueDate}</td>
        `;
        tbody.appendChild(tr);
    }

function loginWithGoogle() {
    const backendUrl = "http://127.0.0.1:5000/auth/login";

    window.location.href = backendUrl;
}

window.onload = function() {
    console.log("La página cargó completamente.");

    addTask('Revisar API', 'Gennaro', 'Alta', '2025-12-15');
    addTask('Diseñar UI', 'María', 'Media', '2025-12-20');

};
'use strict';

const jobs = [
    {
        title: "Desarrollador Backend",
        company: "TechCorp",
        priority: "Alta",
        dueDate: "15/12/2025",
        description: "Desarrollo de APIs con Flask y SQLAlchemy."
    },
    {
        title: "Diseñador UI",
        company: "Designify",
        priority: "Media",
        dueDate: "20/12/2025",
        description: "Diseño de interfaces limpias usando Bulma."
    }
];

function createJobCard(job) {
    const card = document.createElement("div");
    card.className = "job-card";

    card.innerHTML = `
        <div class="job-header">
            <h3 class="job-title">${job.title}</h3>
            <span class="job-company">${job.company}</span>
        </div>
        <div class="job-body">
            <p><strong>Prioridad:</strong> ${job.priority}</p>
            <p><strong>Fecha límite:</strong> ${job.dueDate}</p>
            <p><strong>Descripción:</strong> ${job.description}</p>
        </div>
        <div class="job-footer">
            <button class="apply-btn">Registrarme</button>
        </div>
    `;

    card.querySelector(".apply-btn").addEventListener("click", () => {
        alert(`Te registraste al trabajo: ${job.title}`);
    });

    return card;
}


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

    const container = document.getElementById("jobsContainer");
    jobs.forEach(job => {
        const card = createJobCard(job);
        container.appendChild(card);
    });


    addTask('Develop API', 'TechCorp', 'Low', '2025-12-15');
    addTask('Design UI', 'Designify', 'Medium', '2025-12-20');

};
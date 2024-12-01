// Task Array
let tasks = [];

// Form Submit Event Listener
document.getElementById("task-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("task-title").value.trim();
    const description = document.getElementById("task-desc").value.trim();

    if (title && description) {
        tasks.push({ title, description });
        renderTasks();
        this.reset();
    }
});

// Function to Render Tasks
function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${task.title}</td>
            <td>${task.description}</td>
            <td>
                <button class="delete-btn" onclick="deleteTask(${index})">X</button>
            </td>
        `;

        taskList.appendChild(row);
    });
}

// Function to Delete Task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

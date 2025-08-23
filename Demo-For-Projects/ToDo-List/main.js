const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const todoList = document.getElementById('todoList');
const completedList = document.getElementById('completedList');

// Add a new task
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if(taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.addEventListener('click', () => markAsCompleted(li));
        todoList.appendChild(li);
        taskInput.value = '';
    }
});

// Mark task as completed
function markAsCompleted(taskItem) {
    taskItem.classList.add('completed');
    taskItem.removeEventListener('click', () => markAsCompleted(taskItem));
    completedList.appendChild(taskItem);
}

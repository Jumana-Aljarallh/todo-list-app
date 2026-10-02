const taskInput = document.getElementById('input-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

function addTask() {

    const taskText = taskInput.value;

    if (taskText.trim() == '') {
        alert('يرجى كتابة مهمة');
        return;
    }

    const li = document.createElement('li');
    const span = document.createElement('span');

    span.textContent = taskText;
    li.appendChild(span);

    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'x';
    deleteBtn.style.color = 'white';
    deleteBtn.style.border = 'none';
    deleteBtn.style.padding = '5px 10px';
    deleteBtn.style.borderRadius = '3px';
    deleteBtn.style.cursor = 'pointer';

    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
}

addTaskButton.addEventListener('click', addTask);
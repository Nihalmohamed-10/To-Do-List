const input_value = document.getElementById("input_area");
const add_button = document.getElementById("add_button");
const completed_button = document.getElementById("completed_task");
const pending_button = document.getElementById("pending_task");
const task_data = document.getElementById("output");
const data_array = [];

function add_task() {
    let data = input_value.value;
    if (data) {
        data_array.push({ task: data, completed: false });
        input_value.value = '';
        updateTaskList();
    }
    console.log("input:",input_value);
}

function updateTaskList() {
    task_data.innerHTML = '';

    data_array.forEach((task, index) => {
        const taskElement = document.createElement('div');

        const taskText = document.createElement('span');
        taskText.textContent = `${index + 1}. ${task.task}`;
        taskElement.appendChild(taskText);

        const finishButton = document.createElement('button');
        finishButton.textContent = 'Finish';
        finishButton.classList.add('finish-button');
        finishButton.addEventListener('click', () => finish_task(index, taskText)); 
        taskElement.appendChild(finishButton);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        editButton.addEventListener('click', () => edit_task(index, taskText)); 
        taskElement.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => delete_task(index)); 
        taskElement.appendChild(deleteButton);

     
        task_data.appendChild(taskElement);
    });
}

function finish_task(index, taskText) {
    const task = data_array[index];
    task.completed = !task.completed;
    

    if (task.completed) {
        taskText.classList.add('completed');
    } else {
        taskText.classList.remove('completed');
    }
    console.log("index :",index ,"span :", taskText, "object :", data_array[index]);

}

function edit_task(index, taskText) {
  
    const task = data_array[index];
    console.log("task :",task);
    input_value.value = task.task;
   
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.classList.add('save-button');
    saveButton.addEventListener('click', () => saveEditedTask(index, taskText, input_value));
    taskText.parentElement.appendChild(saveButton);


}

function saveEditedTask(index, taskText, editedValue) {
    data_array[index].task = editedValue.value;

    taskText.textContent = `${index + 1}. ${editedValue.value}`;

    const saveButton = taskText.parentElement.querySelector('.save-button');
    if (saveButton) {
        taskText.parentElement.removeChild(saveButton);
    }
    input_value.value = ''; 
}

function delete_task(index) {
    
    data_array.splice(index, 1);

    
    updateTaskList();
}
function showCompletedTasks() {
    const completedTasks = data_array.filter(task => task.completed);
    displayTasks(completedTasks);
}

function showPendingTasks() {
    const pendingTasks = data_array.filter(task => !task.completed);
    displayTasks(pendingTasks);
}

function showAllTasks() {
    displayTasks(data_array);
}
function displayTasks(tasks) {
    task_data.innerHTML = ''; 

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');


        const taskText = document.createElement('span');
        taskText.textContent = `${index + 1}. ${task.task}`;
        taskElement.appendChild(taskText);

        
        const finishButton = document.createElement('button');
        finishButton.textContent = 'Finish';
        finishButton.classList.add('finish-button');
        finishButton.addEventListener('click', () => finish_task(index, taskText)); 
        taskElement.appendChild(finishButton);

        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        editButton.addEventListener('click', () => edit_task(index, taskText)); 
        taskElement.appendChild(editButton);

        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => delete_task(index)); 
        taskElement.appendChild(deleteButton);

        if (task.completed) {
            taskText.classList.add('completed'); 
        }

        
        task_data.appendChild(taskElement);
    });
}






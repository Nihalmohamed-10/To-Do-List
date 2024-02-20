let inputValue = document.getElementById("input_area");
const addButton = document.getElementById("add_button");
const completedButton = document.getElementById("completed_button");
const pendingTask = document.getElementById("pending_task");
const allTask = document.getElementById("all_task");
const display = document.getElementById("output")
let displayArray = [];


// add task

function addTask(button) {
    let text = inputValue.value;
    console.log(inputValue.value);
    if (text === "") {
        alert('please type something');
    }
    else {
        displayArray.push(inputValue.value);
        console.log(displayArray, "displayArray");
        display.innerHTML = displayArray.map((text, index) => `
        <div class=${index}>
        <p class="item">${text}</p>
        <button id="finishButton" onclick="finishTask(${index})" >finished</button>
        <button id="editButton" onclick="editTask(${index})">edit</button>
        <button id="deleteButton" onclick="deleteTask(${index})">delete</button>
        </div>`).join('')
        inputValue.value = "";
    }
}
function finishTask(index) {
    const pTag = document.querySelectorAll('.item')[index];
    console.log(pTag);
    pTag.style.color = 'green';
}

function editTask(index) {
    inputValue.value = displayArray[index];
}
function deleteTask(index) {
    displayArray.splice(index, 1);
    console.log(displayArray);
    display.innerHTML = displayArray.map((text, index) => `
    <div class=${index}>
    <p class="item">${text}</p>
    <button id="finishButton" onclick="finishTask(${index})" >finished</button>
    <button id="editButton" onclick="editTask(${index})">edit</button>
    <button id="deleteButton" onclick="deleteTask(${index})">delete</button>
    </div>`).join('')
    inputValue.value=""
}

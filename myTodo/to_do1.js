let inputValue= document.getElementById("input_area");
const addButton = document.getElementById("add_button");
const completedButton = document.getElementById("completed_task");
const pendingButton = document.getElementById("pending_task");
const allButton = document.getElementById("all_button");
const display= document.getElementById("output");
let displayArray=[];
let selectedID='';

function addTask(button) {
    let text= inputValue.value;
    console.log(inputValue.value);
    
    if (text==="") {
        alert("please type something");
    }
    else if (typeof (selectedID) === 'number') {
        let selected = displayArray.find((text, index) =>
            index === selectedID
        )

        if (selected) {
            document.getElementById(selectedID).children[0].innerHTML = text;
            displayArray[selectedID] = text;
        }
 
        selectedID = "";
        inputValue.value = ""
    } 
    else{
        displayArray.push(inputValue.value);
        console.log('displayArray:>>>>>>>>',displayArray);
        display.innerHTML=displayArray.map((text,index)=>`
        <div class=${index} id=${index}>
        <p id="item">${text}</p>
        <button id="finishButton" onclick=finishTask(${index})>finished</button>
        <button id="editButton" onclick=editTask(${index})>edit</button>
        <button id="deleteButton" onclick=deleteTask(${index})>deleted</button>
        </div>`).join('')
        inputValue.value='';
    }
}

function finishTask(index){
    const pTag= document.querySelectorAll("#item")[index];
    console.log(pTag);
    pTag.classList.add('success');
}

function editTask(index) {
    selectedID=index;
    inputValue.value=displayArray[index]
}
console.log(displayArray);
function deleteTask(index) {
    displayArray.splice(index,1);
    console.log(displayArray);
    display.innerHTML=displayArray.map((text,index)=>`
    <div class=${index} >
    <p id="item">${text}</p>
    <button id="finishButton" onclick=finishTask(${index})>finished</button>
    <button id="editButton" onclick=editTask(${index})>edit</button>
    <button id="deleteButton" onclick=deleteTask(${index})>deleted</button>
    </div>`).join('')
    inputValue.value='';
}

function showCompletedTasks(button) {
    const disp= display.getElementsByTagName('div');
    for(i=0; i<displayArray.length; i++){
        const display_var= disp[i];
        console.log(disp[i]);
        console.log(display_var);
        const dispVar= display_var.querySelector('#item');
        console.log(dispVar);
        if(dispVar.classList.contains('success')){
            display_var.style.display='block';
        }
        else{
            display_var.style.display='none';
        }
    }
}

function showPendingTasks(button) {
    const disp= display.getElementsByTagName('div');
    for(i=0; i<displayArray.length; i++){
        const display_var= disp[i];
        console.log(display_var);
        const dispVar= display_var.querySelector('#item');
        console.log(dispVar);
        if(dispVar.classList.contains('success')){
            display_var.style.display='none';
        }
        else{
            display_var.style.display='block';
        }
    }
}
function showAllTasks(button) {
    const disp=display.getElementsByTagName('div');
    for(i=0; i<displayArray.length;i++){
        const display_var = disp[i] ;
        display_var.style.display='block';
    }
}

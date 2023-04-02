const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");
const val = inputTask.value;

addTask.addEventListener('click', function (){

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement("li");
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="checkmark"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="dustbin"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if(inputTask.value === "")
    {
        alert("Please enter a task");
    }
    else {
        taskContainer.appendChild(task);
    }

    inputTask.value = "";

    checkButton.addEventListener('click', function(){
    
        checkButton.parentElement.classList.toggle('checked');
    });

    deleteButton.addEventListener('click', function(e){
        e.target.parentElement.parentElement.remove();
    });
});


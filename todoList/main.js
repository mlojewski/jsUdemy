let $toDoInput;
let $alertInfo;
let $addBtn;
let $ulList;
let $newTask;
let $popup;
let $popupInfo;
let $editedTodo;
let $popupInput;
let $addPopupBtn;
let $closeTodoBtn;
let $idNumber = 0;
let $allTasks;

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

const prepareDOMElements = () => {
    $toDoInput = document.querySelector('.todoInput');
    $alertInfo = document.querySelector('.alertInfo');
    $addBtn = document.querySelector('.addBtn');
    $ulList = document.querySelector('.todoList ul');

    $popup = document.querySelector('.popup');
    $popupInfo = document.querySelector('.popupInfo');
    $popupInput = document.querySelector('.popupInput');
    $addPopupBtn = document.querySelector('.accept');
    $closeTodoBtn = document.querySelector('.cancel');

    $allTasks = $ulList.getElementsByTagName('li');
}

const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $ulList.addEventListener('click', checkClick);
    $closeTodoBtn.addEventListener('click', closePopup);
    $addPopupBtn.addEventListener('click', changeTodo);
    $toDoInput.addEventListener('keyup', enterCheck);
}

const addNewTask = () => {
    if ($toDoInput.value != '') {
        $idNumber++;
        $newTask = document.createElement('li');
        $newTask.innerText = $toDoInput.value;
        $newTask.setAttribute('id', `todo-${$idNumber}`);
        $ulList.appendChild($newTask);
        createToolsArea()
        $toDoInput.value = '';
        $alertInfo.innerText = '';
    } else {
        $alertInfo.innerText = 'Enter task content';
    }
}

const createToolsArea = () => {
    toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools');
    $newTask.appendChild(toolsPanel);

    completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class = "fas fa-check"></i>'
    toolsPanel.appendChild(completeBtn);

    editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerText = "EDIT";
    toolsPanel.appendChild(editBtn);

    deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class = "fas fa-times"></i>'
    toolsPanel.appendChild(deleteBtn);
}

const checkClick = (event) => {
    if(event.target.closest('button').classList.contains('complete')) {
        event.target.closest('li').classList.toggle('completed');
        event.target.closest('button').classList.toggle('completed');
    } else if (event.target.closest('button').classList.contains('edit')) {
        editTask(event);
    } else if (event.target.closest('button').classList.contains('delete')) {
        deleteTask(event);
    }
}

const editTask = (event) => {
    const oldTodo = event.target.closest('li').id;
    $editedTodo = document.getElementById(oldTodo);
    $popupInput.value = $editedTodo.firstChild.textContent;
    $popup.style.display = 'flex';
}

const changeTodo = () => {
    if ($popupInput.value != '') {
        $editedTodo.firstChild.textContent = $popupInput.value;
        closePopup();
        $popupInfo.innerText = '';
    } else {
        $popupInfo.innerText = 'Provide some content';
    }
}

const closePopup = () => {
    $popup.style.display = 'none';
    $popupInfo.innerText = '';
}

const deleteTask = (event) => {
    const deleteTodo = event.target.closest('li')
    deleteTodo.remove();
    if ($allTasks.length == 0) {
        $alertInfo.innerText = 'No tasks on the list';
    } else {
        $alertInfo.innerText = '';
    }
}  

const enterCheck = () => {
    if(event.keyCode === 13) {
        addNewTask();
    }
}
document.addEventListener('DOMContentLoaded', main)  
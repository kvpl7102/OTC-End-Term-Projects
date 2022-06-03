const inputField = document.querySelector(".inputField input");
const addButton = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const delButton = document.querySelector(".footer button");

// If user inputs something, make the ADD button active
inputField.onkeyup = () => {
    let userInput = inputField.value;
    if (userInput.trim() != '') {
        addButton.classList.add('active');
    } else {
        addButton.classList.remove('active');
    }
}

// Display the TODO list in the UI
function showToDoList() {
    let userData = localStorage.getItem("usertodo"); // get the value by the key from local storage
    let todoNum = document.querySelector('.pendingTasks');

    if (userData == null) {
        todo = []; // if there is no input from user, create an array to store todo
    } else {
        todo = JSON.parse(userData); // convert the string data received from the server to JS array (in  this case)
    }

    // Display current number of TODO tasks
    todoNum.textContent = todo.length;

    // If there is any TODO task in the TODO list, make the Clear All button active
    if (todo.length != 0) {
        delButton.classList.add('active');
    } else {
        delButton.classList.remove('active');
    }

    // Add new TODO task to the TODO list
    let newTodo = '';
    todo.forEach((element, index) => {
        newTodo += `<li> ${element} <span class="icon"; onclick="deleteTodo(${index})"> <i class = "fas fa-trash "></i> </span> </li>`
    });

    todoList.innerHTML = newTodo;
    inputField.value = '';
}

// Button to add new TODO task
addButton.addEventListener('click', () => {
    let userInput = inputField.value;
    let userData = localStorage.getItem("usertodo");

    if (userData == null) {
        todo = [];
    } else {
        todo = JSON.parse(userData);
    }

    todo.push(userInput); // add user input to the TODO array

    localStorage.setItem("usertodo", JSON.stringify(todo)); // convert the TODO array to string and assign the key to localstorage
    showToDoList();
    addButton.classList.remove('active'); // make the ADD button inactive after adding one TODO task
})

// Button to remove all TODO tasks
delButton.addEventListener('click', () => {
    let userData = localStorage.getItem("usertodo");
    todo = JSON.parse(userData);

    while (todo.length > 0) {
        todo.pop();
    }

    localStorage.setItem("usertodo", JSON.stringify(todo));
    showToDoList();

})

// Click the trash icon to delele any TODO task
function deleteTodo(index) {
    let userData = localStorage.getItem("usertodo");
    todo = JSON.parse(userData);

    todo.splice(index, 1) // remove the todo at a specific index

    localStorage.setItem("usertodo", JSON.stringify(todo));

    showToDoList();
}

showToDoList(); // display the TODO list and keep its content even after refreshing the page
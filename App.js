// Getting elements from the DOM
let form = document.querySelector('form');
let input = document.querySelector('input');
let todos = document.querySelector('.todos');

function getTodo(value) {
    // Creating New Elements
    let todo = document.createElement("div");
    let textEl = document.createElement('span');

    // Setting values and styles
    textEl.innerHTML = value; // Use the 'value' argument here

    // Appending our element to the DOM
    todo.appendChild(textEl);

    let closeEl = document.createElement("span");
    closeEl.innerHTML = "&times;";
    closeEl.classList.add("delete");

    // Attach Events
    closeEl.addEventListener('click', function (e) {
        todos.removeChild(todo); // Remove todo when 'x' is clicked
    });

    todo.appendChild(closeEl);
    todo.classList.add("todo");
    return todo;
}

form.addEventListener('submit', e => {
    e.preventDefault(); // Prevent form submission
    let value = input.value; // Get the input value
    if (!value.trim()) return; // Ignore empty input
    todos.appendChild(getTodo(value)); // Pass the value to 'getTodo'
    input.value = ""; // Clear input after submission
});

function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    let title = newToDoText.value;

    let newLi = document.createElement('li');

    let checkbox = document.createElement('input');

    let removeButton = document.createElement('input');
    removeButton.type = "button";
    removeButton.value = "Delete To-Do!"

    checkbox.type = "checkbox";

    newLi.textContent = title;

    newLi.appendChild(checkbox);

    newLi.appendChild(removeButton);

    toDoList.appendChild(newLi);

    newToDoText.value = '';

    removeButton.addEventListener('click', () => {
      toDoList.removeChild(newLi);
    });

  });
}

window.onload = function() {
  onReady();
};

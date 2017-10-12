function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let idNumber = 0;

  function createNewToDo(i) {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: i
    });
    newToDoText.value = '';

    renderTheUI(toDos);
  }

  function removeToDo(n) {
    var delIndex = 0;

    toDos.forEach(function(tD) {
      if (tD.id === n) {
        delIndex = toDos.indexOf(tD);
      }
    });

    toDos.splice(delIndex,1);

    renderTheUI(toDos);
  }

  function renderTheUI(toDos) {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const removeButton = document.createElement('input');

      checkbox.type = "checkbox";

      removeButton.type = "button";
      removeButton.value = "Delete";

      newLi.textContent = toDo.title;
      newLi.name = toDo.id;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(removeButton);

      removeButton.addEventListener('click', event => {
        removeToDo(newLi.name);
      });
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo(idNumber);
    idNumber++;
  });

  renderTheUI(toDos);
}

window.onload = function() {
  onReady();
};

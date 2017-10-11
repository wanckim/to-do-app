function onReady() {
  const toDos = [];
  const addToDoForm = getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = getElementById('newToDoText');
    if (!newToDoText) { return }

    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';

    renderTheUI(toDos);
  }

  function renderTheUI(toDos) {
    const toDoList = getElementById('toDoList');

    toDoList.textCOntent = '';

    toDos.forEach(function(toDo) {
      const newLi = createElement('li');
      const checkbox = createElement('input');
      checkbox.type = 'checkbox';

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault;
    createNewTodo();
  });

  renderTheUI(toDos);
}

window.onload = function() {
  onReady();
};

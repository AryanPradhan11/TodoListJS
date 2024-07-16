const list = [];

renderTodolist();

function renderTodolist() {
  let todoList = '';

  for(let i = 0; i<list.length; i++) {
    const todo = list[i];
    //const name = todo.name,
    //const dueDate = todo.dueDate
    const {name, dueDate} = todo;
    const html = `<div>${name}</div>
    <div>${dueDate}</div>
                  <button class="delete"
                  onclick="list.splice(${i},1),
                  renderTodolist();">Delete</button>
                  `;
    todoList += html;
  }

  document.querySelector('.js-list').innerHTML = todoList;
}


function addtodo() {
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

  const dateElement = document.querySelector('.js-date');
  const dueDate = dateElement.value;

  list.push({
    name,
    dueDate
  });
  

  inputElement.value = '';
  dateElement.value = '';

  renderTodolist();
}

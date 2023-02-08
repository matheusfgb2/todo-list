const inputTaskText = document.getElementById('texto-tarefa');
const taskButton = document.getElementById('criar-tarefa');
const taskListItens = document.getElementsByClassName('task-list-item');
const taskOlList = document.getElementById('lista-tarefas');
const deleteButton = document.getElementById('apaga-tudo');
const concludedDeleteButton = document.getElementById('remover-finalizados');

taskButton.addEventListener('click', () => {
  const li = document.createElement('li');
  li.className = 'task-list-item';
  li.innerHTML = inputTaskText.value;
  taskOlList.appendChild(li);
  inputTaskText.value = '';
});

taskOlList.addEventListener('click', (event) => {
  const wholeList = event.target;
  if (wholeList.classList.contains('task-list-item')) {
    const greyBg = document.querySelector('#gray-bg');
    if (greyBg !== null) {
      greyBg.removeAttribute('id');
    }
    wholeList.id = 'gray-bg';
  }
});

taskOlList.addEventListener('dblclick', (event) => {
  const wholeList = event.target;
  if (wholeList.classList.contains('task-list-item')) {
    if (wholeList.classList.contains('completed')) {
      wholeList.classList.remove('completed');
    } else {
      wholeList.classList.add('completed');
    }
  }
});

deleteButton.addEventListener('click', () => {
  for (let index = taskListItens.length - 1; index >= 0; index -= 1) {
    taskOlList.removeChild(taskListItens[index]);
  }
});

concludedDeleteButton.addEventListener('click', () => {
  const completed = document.getElementsByClassName('completed');
  for (let index = completed.length - 1; index >= 0; index -= 1) {
    completed[index].remove();
  }
});

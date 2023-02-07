const inputTaskText = document.getElementById('texto-tarefa');
const buttonTask = document.getElementById('criar-tarefa');
const taskOlList = document.getElementById('lista-tarefas');

const newTaskListItem = () => {
  const li = document.createElement('li');
  li.className = 'task-list-item';
  li.innerHTML = inputTaskText.value;
  taskOlList.appendChild(li);
  inputTaskText.value = '';
};

buttonTask.addEventListener('click', newTaskListItem);

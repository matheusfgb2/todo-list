const inputTaskText = document.getElementById('texto-tarefa');
const buttonTask = document.getElementById('criar-tarefa');
const taskOlList = document.getElementById('lista-tarefas');

buttonTask.addEventListener('click', () => {
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

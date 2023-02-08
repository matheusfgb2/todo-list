const inputTaskText = document.getElementById('texto-tarefa');
const taskButton = document.getElementById('criar-tarefa');
const listItem = 'task-list-item';
const taskListItens = document.getElementsByClassName(listItem);
const taskOlList = document.getElementById('lista-tarefas');
const deleteButton = document.getElementById('apaga-tudo');
const concludedDeleteButton = document.getElementById('remover-finalizados');
const localStorageButton = document.getElementById('salvar-tarefas');

const getAllClasses = (objectItem) => {
  let classes = '';
  const classesLength = Object.keys(objectItem.classesFromItem).length;
  for (let index = 0; index < classesLength; index += 1) {
    if (objectItem.classesFromItem[index + 1] === undefined) {
      classes += `${objectItem.classesFromItem[index]}`;
    } else {
      classes += `${objectItem.classesFromItem[index]} `;
    }
  }
  return classes;
};

const detectLocalStorage = () => {
  if (localStorage.getItem('savedItens') !== null) {
    return true;
  }
  return false;
};

const objectAttribute = () => {
  if (detectLocalStorage()) {
    return JSON.parse(localStorage.getItem('savedItens'));
  }
  return {};
};

const stockList = objectAttribute();
if (detectLocalStorage()) {
  for (let index = 0; index < Object.keys(stockList).length; index += 1) {
    const li = document.createElement('li');
    li.innerHTML = stockList[index].itemText;
    li.className = getAllClasses(stockList[index]);
    taskOlList.appendChild(li);
  }
}

taskButton.addEventListener('click', () => {
  const li = document.createElement('li');
  li.className = listItem;
  li.innerHTML = inputTaskText.value;
  taskOlList.appendChild(li);
  inputTaskText.value = '';
});

taskOlList.addEventListener('click', (event) => {
  const wholeList = event.target;
  if (wholeList.classList.contains(listItem)) {
    const greyBg = document.querySelector('.gray-bg');
    if (greyBg !== null) {
      greyBg.classList.remove('gray-bg');
    }
    wholeList.classList.add('gray-bg');
  }
});

taskOlList.addEventListener('dblclick', (event) => {
  const wholeList = event.target;
  if (wholeList.classList.contains(listItem)) {
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

localStorageButton.addEventListener('click', () => {
  for (let index = 0; index < taskListItens.length; index += 1) {
    const itemText = taskListItens[index].innerText;
    const classesFromItem = taskListItens[index].classList;
    stockList[index] = { itemText, classesFromItem };
  }
  localStorage.setItem('savedItens', JSON.stringify(stockList));
});

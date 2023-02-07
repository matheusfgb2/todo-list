// Requisito 1 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag <header>
const body = document.getElementById('body');
const header = document.createElement('header');
const h1 = document.createElement('h1');
h1.innerHTML = 'Minha Lista de Tarefas';
header.appendChild(h1);
body.appendChild(header);

// Requisito 2 - Adicione abaixo do título "Minha Lista de Tarefas" um parágrafo com id="funcionamento" e com o conteúdo do texto "Clique duas vezes em um item para marcá-lo como completo".
const pFuncionamento = document.createElement('p');
pFuncionamento.id = 'funcionamento';
pFuncionamento.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
header.appendChild(pFuncionamento);

// Requisito 3 - Adicione um input com o id="texto-tarefa" onde o usuário poderá digitar o nome do item que deseja adicionar à lista
const inputTextoTarefa = document.createElement('input');
inputTextoTarefa.id = 'texto-tarefa';
header.appendChild(inputTextoTarefa);

// Requisito 4 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"
const olListaTarefas = document.createElement('ol');
olListaTarefas.id = 'lista-tarefas';

// Requisito 5 - Adicione um botão com id="criar-tarefa"
const buttonCriarTarefa = document.createElement('button');
buttonCriarTarefa.id = 'criar-tarefa';
buttonCriarTarefa.innerHTML = 'Adicionar';
header.appendChild(buttonCriarTarefa);
// (Requisito 4)
header.appendChild(olListaTarefas);
// (Requisito 8)
const removePreviousGrayBg = () => {
  const grayBg = document.querySelector('#gray-bg');
  if (grayBg !== null) {
    grayBg.removeAttribute('id', 'gray-bg');
  }
};
const listItems = document.getElementsByClassName('task-item');
const addGrayBg = () => {
  // Requisito 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].addEventListener('click', (event) => {
      const listItem = event.target;
      // Requisito 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo
      removePreviousGrayBg();
      listItem.id = 'gray-bg';
    });
  }
};
// Requisito 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completado. Deve ser possível desfazer essa ação clicando novamente duas vezes no item
const crossTask = () => {
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].addEventListener('click', (event) => {
      const classItensList = event.target.classList;
      console.log(classItensList.contains('completed'));
      if (classItensList.contains('completed')) {
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
    });
  }
};
// Requisito 5 - ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo
buttonCriarTarefa.addEventListener('click', () => {
  const li = document.createElement('li');
  li.className = 'task-item';
  li.innerHTML = inputTextoTarefa.value;
  olListaTarefas.appendChild(li);
  inputTextoTarefa.value = '';
  addGrayBg();
});

crossTask();
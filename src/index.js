import './main.scss';
import { Render, table } from '../src/components/Classes/classes';

//cоздаем новый todo_______________________________________________________________________
const newList = new Render();

//Здесь привязываем кнопки управления таблицей_______________________________________________________________________
const addTaskButton = document.querySelector('#addTask').addEventListener('click', () => {
  do {
    newList.addTask();
  } while (confirm('Добавим еще?'));
  newList.render();
  newList.showAll();
});

const editDescriptionButton = document
  .querySelector('#editDescription')
  .addEventListener('click', () => {
    newList.editDescription();
    newList.render();
    newList.showAll();
  });

const dateButton = document.querySelector('#date').addEventListener('click', () => {
  newList.date();
  newList.render();
  newList.showAll();
});

const isCompletedButton = document.querySelector('#isCompleted').addEventListener('click', () => {
  newList.isCompleted();
  newList.render();
  newList.showAll();
});

const editPriority = document.querySelector('#editPriority').addEventListener('click', () => {
  newList.priority();
  newList.render();
  newList.showAll();
});

const delTaskButton = document.querySelector('#delTask').addEventListener('click', () => {
  newList.delTask();
  newList.render();
  newList.showAll();
});

//Привязываем сортировку по клику на шапку таблицы_______________________________________________________________________
const onKeyPress = (evt) => {
  const btnName = document.querySelector('#trName');
  const btnID = document.querySelector('#trId');
  const btnDescription = document.querySelector('#trDescription');
  const btnDate = document.querySelector('#trDate');
  const btnStatus = document.querySelector('#trStatus');
  const btnPriority = document.querySelector('#trPriority');
  switch (evt.target) {
    case btnName:
      newList.sortName();
      newList.render();
      newList.showAll();
      break;
    case btnID:
      newList.sortId();
      newList.render();
      newList.showAll();
      break;
    case btnDescription:
      newList.sortDescription();
      newList.render();
      newList.showAll();
      break;
    case btnDate:
      newList.sortDate();
      newList.render();
      newList.showAll();
      break;
    case btnStatus:
      newList.sortStatus();
      newList.render();
      newList.showAll();
      break;
    case btnPriority:
      newList.sortPriority();
      newList.render();
      newList.showAll();
      break;
    default:
      newList.sortPriority();
      newList.render();
      newList.showAll();
      break;
  }
};

table.addEventListener('click', onKeyPress);

import './main.scss';

class TodoList {
  constructor() {
    this.tasks = [];
  }

  //Добавить задачу
  addTask(title = prompt('Введите название новой задачи:', 'Имя новой задачи')) {
    this.tasks.push({
      title,
      id: this.tasks.length + 1,
      description: ' ',
      date: new Date(),
      isCompleted: 'Не готова',
    });
  }

  //Описание
  editDescription(
    id = prompt('Укажите ID изменяемой задачи'),
    desc = prompt('Опишите задачу', 'Здесь должно быть описание'),
  ) {
    this.tasks = this.tasks.filter((item) => {
      if (item.id == id) {
        item.description = `${desc}`;
        return this.tasks;
      }
      return this.tasks;
    });
  }

  //Дата дедлайна
  date(
    id = prompt('Укажите ID задачи, которую следует изменить'),
    desiredDate = prompt('Укажите последний день выполнения задачи', 'ГГГГ-ММ-ДД'),
  ) {
    this.tasks = this.tasks.filter((item) => {
      if (item.id == id) {
        item.date = new Date(desiredDate);
        return this.tasks;
      }
      return this.tasks;
    });
  }

  //Cтатус задачи
  isCompleted(
    id = prompt('Укажите ID задачи, которую следует изменить'),
    status = confirm('Задача выполнена?'),
  ) {
    this.tasks = this.tasks.filter((item) => {
      if (item.id == id && status) {
        item.isCompleted = 'Готова';
        return this.tasks;
      } else {
        item.isCompleted = 'Не готова';
        return this.tasks;
      }
    });
  }

  //Удаление
  delTask(id = prompt('Укажите ID задачи, которую следует удалить')) {
    let index = id - 1;
    this.tasks.splice(index, 1);
  }

  sort(item) {
    this.tasks.sort((a, b) => a.item - b.item);
  }

  //Отображение списка и сортировка
  showAll() {
    if (this.tasks.length) {
      this.tasks.forEach((item) => {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = item.title;
        tr.append(td1);
        let td2 = document.createElement('td');
        td2.innerHTML = item.id;
        tr.append(td2);
        let td3 = document.createElement('td');
        td3.innerHTML = item.description;
        tr.append(td3);
        let td4 = document.createElement('td');
        td4.innerHTML = item.date;
        tr.append(td4);
        let td5 = document.createElement('td');
        td5.innerHTML = item.isCompleted;
        tr.append(td5);
        table.append(tr);
      });
    } else {
      console.log('Массив пустой');
    }
  }
}

//Наследование для примера
class Render extends TodoList {
  constructor() {
    super();
  }

  //Костыль на авторендер таблицы
  render() {
    table.innerHTML = `    
    <thead>
      <tr>
        <th colspan="1">Название</th>
        <th colspan="1">id</th>
        <th colspan="1">Описание</th>
        <th colspan="1">Дата</th>
        <th colspan="1">Статус</th>
      </tr>
    </thead>`;
  }

}

//cоздаем новый todo
const newList = new Render();

let table = document.querySelector('#table');

//Здесь привязываем кнопки
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

const delTaskButton = document.querySelector('#delTask').addEventListener('click', () => {
  newList.delTask();
  newList.render();
  newList.showAll();
});

const sortName = document.querySelector('#trName').addEventListener('click', () => {
  newList.sort(title);
  newList.render();
  newList.showAll();
});

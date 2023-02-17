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
      isCompleted: false,
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
        item.isCompleted = true;
        return this.tasks;
      } else {
        item.isCompleted = false;
        return this.tasks;
      }
    });
  }

  //Удаление

  delTask(id = prompt('Укажите ID задачи, которую следует удалить')) {
    let index = id - 1;
    this.tasks.splice(index, 1);
  }

  //Отображение списка и сортировка

  showAll() {
    if (this.tasks.length) {
      this.tasks
        .sort((a, b) => a.date - b.date)
        .forEach((item) => {
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
          console.log(item);
        });
    } else {
      console.log('Массив пустой');
    }
  }
}

const newList = new TodoList();
let table = document.querySelector('#table');

const addTaskButton = document.querySelector('#addTask').addEventListener('click', () => {
  do {
    newList.addTask();
  } while (confirm('Добавим еще?'));
  newList.showAll();
});

const editDescriptionButton = document
  .querySelector('#editDescription')
  .addEventListener('click', () => {
    newList.editDescription();
    newList.showAll();
  });

const dateButton = document.querySelector('#date').addEventListener('click', () => {
  newList.date();
  newList.showAll();
});

const isCompletedButton = document.querySelector('#isCompleted').addEventListener('click', () => {
  newList.isCompleted();
  newList.showAll();
});

const delTaskButton = document.querySelector('#delTask').addEventListener('click', () => {
  newList.delTask();
  newList.showAll();
});

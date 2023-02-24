import './classes.scss';

class TodoList {
  constructor() {
    this.tasks = [];
  }

  //Добавить задачу_______________________________________________________________________
  addTask(title = prompt('Введите название новой задачи:', 'Имя новой задачи')) {
    this.tasks.push({
      title,
      id: this.tasks.length + 1,
      description: ' ',
      date: new Date(),
      isCompleted: 'Не выполнена',
      priority: 'Низкий',
    });
  }

  //Описание_______________________________________________________________________
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

  //Дата дедлайна_______________________________________________________________________
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

  //Cтатус задачи_______________________________________________________________________
  isCompleted(
    id = prompt('Укажите ID задачи, которую следует изменить'),
    status = confirm('Задача выполнена?'),
  ) {
    this.tasks = this.tasks.filter((item) => {
      if (item.id == id) {
        if (status) {
          item.isCompleted = 'Выполнена';
          return this.tasks;
        } else {
          item.isCompleted = 'Не выполнена';
          return this.tasks;
        }
      } else return this.tasks;
    });
  }
  //Приоритет_______________________________________________________________________
  priority(
    id = prompt('Укажите ID задачи, которую следует изменить'),
    prior = prompt('Укажите новый приоритет задачи', 'низкий-средний-высокий'),
  ) {
    this.tasks = this.tasks.filter((item) => {
      if (item.id == id) {
        item.priority = prior;
        return this.tasks;
      }
      return this.tasks;
    });
  }

  //Удаление_______________________________________________________________________
  delTask(id = prompt('Укажите ID задачи, которую следует удалить')) {
    let index = id - 1;
    this.tasks.splice(index, 1);
  }

  //Отображение списка_______________________________________________________________________
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
        let td6 = document.createElement('td');
        td6.innerHTML = item.priority;
        tr.append(td6);
        table.append(tr);
      });
    } else {
      console.log('Массив пустой');
    }
  }
}

//Наследование_______________________________________________________________________
class Render extends TodoList {
  constructor() {
    super();
  }

  //Костыль на авторендер таблицы_______________________________________________________________________
  render() {
    table.innerHTML = `    
      <thead>
        <tr>
          <th id="trName">Название</th><br>
          <th id="trId">id</th>
          <th id="trDescription">Описание</th>
          <th id="trDate" >Дата</th>
          <th id="trStatus" >Статус</th>
          <th id="trPriority">Приоритет</th>
        </tr>
      </thead>`;
  }

  //Здесь лежат все методы сортировок_______________________________________________________________________
  sortName() {
    this.tasks.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });
  }
  sortId() {
    this.tasks.sort((a, b) => a.id - b.id);
  }
  sortDescription() {
    this.tasks.sort((a, b) => {
      if (a.description > b.description) {
        return 1;
      }
      if (a.description < b.description) {
        return -1;
      }
      return 0;
    });
  }
  sortDate() {
    this.tasks.sort((a, b) => a.Date - b.Date);
  }
  sortStatus() {
    this.tasks.sort((a, b) => (a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? -1 : 1));
  }
  sortPriority() {
    this.tasks.sort((a, b) => {
      if (a.priority > b.priority) {
        return 1;
      }
      if (a.priority < b.priority) {
        return -1;
      }
      return 0;
    });
  }
  //_______________________________________________________________________
}

let table = document.querySelector('#table');

export { Render, table };

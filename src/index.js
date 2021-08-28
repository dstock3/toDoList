import './style.css';

const toDo = (title, description, dueDate, priority, notes) => {
  return { title, description, dueDate, priority, notes }
};

const toDoItem = toDo(
  `Make "To Do List" Application!`,
  "Create an application to manage daily tasks.",
  "9/15/2021",
  "2", 
  "This the first object created using the toDo factory function.",
)

const changeOil = toDo(
  "Time for an Oil Change!",
  "Change the oil in your beautiful Mazda 2!",
  "9/28/2021",
  "3",
  "test note",
)

const goToDoc = toDo(
  "Go to your Doctor's Appointment!",
  "It's time for a check up",
  "9/17/2021",
  "2",
  "Be sure to tell him about your back acne",
)

const getGift = toDo(
  `Get a Birthday Gift for the Wife!`,
  "No giftcards...",
  "9/18/2021",
  "1", 
  "No idea what to get her...",
)

const writeScript = toDo(
  "Write Script",
  `Finally write that movie script you've been talking about.`,
  "10/15/2021",
  "5", 
  "Be sure to include that twist ending where the guy was dead the whole time.",
)

const firstList = [toDoItem, getGift, writeScript]
const secondList = [changeOil, goToDoc]

function elementBuilder(element, classLabel, parentName) {
  let item = document.createElement(element);
  item.classList.add(classLabel);
  parentName.appendChild(item);
  return item;
}

function removeChildren(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

let body = document.getElementsByTagName("body")[0];

let project = elementBuilder("div", "project", body);
let project2 = elementBuilder("div", "project", body);

function toDoBuilder(task, parent) {
  let elementArray = [];
  let taskDiv = elementBuilder("div", "task", parent);
  let head = elementBuilder("h2", "task-head", taskDiv);
  head.textContent = task.title;
  let desc = elementBuilder("p", "task-desc", taskDiv);
  desc.textContent = task.description;
  let dueDate = elementBuilder("p", "due-date", taskDiv);
  dueDate.textContent = task.dueDate;
  let priority = elementBuilder("p", "priority", taskDiv);
  priority.textContent = task.priority;
  let notes = elementBuilder("p", "notes", taskDiv);
  notes.textContent = task.notes;
  elementArray.push(head, desc, dueDate, priority, notes);
  return elementArray
};



const listBuilder = (toDoArray, parent) => {
  let objArray = []
  for (let i = 0; i < toDoArray.length; i++) {
    let task = toDoArray[i];
    let elementArray = toDoBuilder(task, parent);
    objArray.push(elementArray);
  };

  const sortByPriority = () => {
    let sortedArray = toDoArray.sort((firstItem, secondItem) => firstItem.priority - secondItem.priority);
    removeChildren(parent)
    let sortedList = listBuilder(sortedArray, parent)
    return sortedList
  };

  const buttonDiv = elementBuilder("div", "button-div", parent)

  const sortByPriorityButton = (() => {
    let sort = elementBuilder("button", "sort-button", buttonDiv)
    sort.textContent = "Sort by Priority"
    sort.addEventListener("click", sortByPriority)
  })();

  const deleteList = () => {
    parent.remove()
  }

  const deleteButton = (() => {
    let del = elementBuilder("button", "delete-button", buttonDiv);
    del.textContent = "Remove Project"
    del.addEventListener("click", deleteList)
  })();
  
  return { objArray, sortByPriority }
};

let newProject = listBuilder(firstList, project)
let secondProject = listBuilder(secondList, project2)




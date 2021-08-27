const toDo = (title, description, dueDate, priority, notes) => {
  return { title, description, dueDate, priority, notes }
};

const toDoItem = toDo(
  `Make "To Do List" Application!`,
  "Create an application to manage daily tasks.",
  "9/15/2021",
  "1", 
  "This the first object created using the toDo factory function.",
)

const changeOil = toDo(
  "Time for an Oil Change!",
  "Change the oil in your beautiful Mazda 2!",
  "9/28/2021",
  "3",
  "test note",
)

const toDoList = [toDoItem, changeOil]

function elementBuilder(element, classLabel, parentName) {
  let item = document.createElement(element);
  item.classList.add(classLabel);
  parentName.appendChild(item);
  return item;
}

const toDoBuilder = (toDoArray) => {
  for (let i = 0; i < toDoArray.length; i++) {
    console.log(toDoArray[i].title);
    console.log(toDoArray[i].description);
    console.log(toDoArray[i].dueDate);
    console.log(toDoArray[i].priority);
    console.log(toDoArray[i].notes);
  };
};

toDoBuilder(toDoList)

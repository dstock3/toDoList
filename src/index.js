const toDo = (title, description, dueDate, priority) => {
  return { title, description, dueDate, priority }
};

const toDoItem = toDo(
  `Make "To Do List" Application!`,
  "Create an application to manage daily tasks.",
  "9/15/2021",
  "1"
)

console.log(toDoItem.title)
console.log(toDoItem.description)
console.log(toDoItem.dueDate)
console.log(toDoItem.priority)
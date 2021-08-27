/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

const goToDoc = toDo(
  "Go to your Doctor's Appointment!",
  "It's time for a check up",
  "9/17/2021",
  "2",
  "Be sure to tell him about your back acne",
)


const toDoList = [toDoItem, changeOil, goToDoc]

function elementBuilder(element, classLabel, parentName) {
  let item = document.createElement(element);
  item.classList.add(classLabel);
  parentName.appendChild(item);
  return item;
}

let body = document.getElementsByTagName("body")[0];

function toDoBuilder(task) {
  let elementArray = [];
  let taskDiv = elementBuilder("div", "task", body);
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

const listBuilder = (toDoArray) => {
  let objArray = []
  for (let i = 0; i < toDoArray.length; i++) {
    let task = toDoArray[i];
    let elementArray = toDoBuilder(task);
    objArray.push(elementArray);
  };

  const sortByPriority = () => {
    for (let i = 0; i < toDoArray.length; i++) {
    let task = toDoArray[i];
    let priority = parseInt(task.priority)
    };

  }
  return { objArray }
};

let newProject = listBuilder(toDoList)
console.log(newProject.objArray)

const sortButton = (() => {
  let sort = elementBuilder("button", "sort-button", body)
  sort.textContent = "Sort by Priority"
  sort.addEventListener("click", toDoSorter)
})();


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9Eb0xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdG9EbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcykgPT4ge1xuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcyB9XG59O1xuXG5jb25zdCB0b0RvSXRlbSA9IHRvRG8oXG4gIGBNYWtlIFwiVG8gRG8gTGlzdFwiIEFwcGxpY2F0aW9uIWAsXG4gIFwiQ3JlYXRlIGFuIGFwcGxpY2F0aW9uIHRvIG1hbmFnZSBkYWlseSB0YXNrcy5cIixcbiAgXCI5LzE1LzIwMjFcIixcbiAgXCIxXCIsIFxuICBcIlRoaXMgdGhlIGZpcnN0IG9iamVjdCBjcmVhdGVkIHVzaW5nIHRoZSB0b0RvIGZhY3RvcnkgZnVuY3Rpb24uXCIsXG4pXG5cbmNvbnN0IGNoYW5nZU9pbCA9IHRvRG8oXG4gIFwiVGltZSBmb3IgYW4gT2lsIENoYW5nZSFcIixcbiAgXCJDaGFuZ2UgdGhlIG9pbCBpbiB5b3VyIGJlYXV0aWZ1bCBNYXpkYSAyIVwiLFxuICBcIjkvMjgvMjAyMVwiLFxuICBcIjNcIixcbiAgXCJ0ZXN0IG5vdGVcIixcbilcblxuY29uc3QgZ29Ub0RvYyA9IHRvRG8oXG4gIFwiR28gdG8geW91ciBEb2N0b3IncyBBcHBvaW50bWVudCFcIixcbiAgXCJJdCdzIHRpbWUgZm9yIGEgY2hlY2sgdXBcIixcbiAgXCI5LzE3LzIwMjFcIixcbiAgXCIyXCIsXG4gIFwiQmUgc3VyZSB0byB0ZWxsIGhpbSBhYm91dCB5b3VyIGJhY2sgYWNuZVwiLFxuKVxuXG5cbmNvbnN0IHRvRG9MaXN0ID0gW3RvRG9JdGVtLCBjaGFuZ2VPaWwsIGdvVG9Eb2NdXG5cbmZ1bmN0aW9uIGVsZW1lbnRCdWlsZGVyKGVsZW1lbnQsIGNsYXNzTGFiZWwsIHBhcmVudE5hbWUpIHtcbiAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICBpdGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NMYWJlbCk7XG4gIHBhcmVudE5hbWUuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIHJldHVybiBpdGVtO1xufVxuXG5sZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXTtcblxuZnVuY3Rpb24gdG9Eb0J1aWxkZXIodGFzaykge1xuICBsZXQgZWxlbWVudEFycmF5ID0gW107XG4gIGxldCB0YXNrRGl2ID0gZWxlbWVudEJ1aWxkZXIoXCJkaXZcIiwgXCJ0YXNrXCIsIGJvZHkpO1xuICBsZXQgaGVhZCA9IGVsZW1lbnRCdWlsZGVyKFwiaDJcIiwgXCJ0YXNrLWhlYWRcIiwgdGFza0Rpdik7XG4gIGhlYWQudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICBsZXQgZGVzYyA9IGVsZW1lbnRCdWlsZGVyKFwicFwiLCBcInRhc2stZGVzY1wiLCB0YXNrRGl2KTtcbiAgZGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gIGxldCBkdWVEYXRlID0gZWxlbWVudEJ1aWxkZXIoXCJwXCIsIFwiZHVlLWRhdGVcIiwgdGFza0Rpdik7XG4gIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gIGxldCBwcmlvcml0eSA9IGVsZW1lbnRCdWlsZGVyKFwicFwiLCBcInByaW9yaXR5XCIsIHRhc2tEaXYpO1xuICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG4gIGxldCBub3RlcyA9IGVsZW1lbnRCdWlsZGVyKFwicFwiLCBcIm5vdGVzXCIsIHRhc2tEaXYpO1xuICBub3Rlcy50ZXh0Q29udGVudCA9IHRhc2subm90ZXM7XG4gIGVsZW1lbnRBcnJheS5wdXNoKGhlYWQsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcyk7XG4gIHJldHVybiBlbGVtZW50QXJyYXlcbn07XG5cbmNvbnN0IGxpc3RCdWlsZGVyID0gKHRvRG9BcnJheSkgPT4ge1xuICBsZXQgb2JqQXJyYXkgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvRG9BcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0YXNrID0gdG9Eb0FycmF5W2ldO1xuICAgIGxldCBlbGVtZW50QXJyYXkgPSB0b0RvQnVpbGRlcih0YXNrKTtcbiAgICBvYmpBcnJheS5wdXNoKGVsZW1lbnRBcnJheSk7XG4gIH07XG5cbiAgY29uc3Qgc29ydEJ5UHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b0RvQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdGFzayA9IHRvRG9BcnJheVtpXTtcbiAgICBsZXQgcHJpb3JpdHkgPSBwYXJzZUludCh0YXNrLnByaW9yaXR5KVxuICAgIH07XG5cbiAgfVxuICByZXR1cm4geyBvYmpBcnJheSB9XG59O1xuXG5sZXQgbmV3UHJvamVjdCA9IGxpc3RCdWlsZGVyKHRvRG9MaXN0KVxuY29uc29sZS5sb2cobmV3UHJvamVjdC5vYmpBcnJheSlcblxuY29uc3Qgc29ydEJ1dHRvbiA9ICgoKSA9PiB7XG4gIGxldCBzb3J0ID0gZWxlbWVudEJ1aWxkZXIoXCJidXR0b25cIiwgXCJzb3J0LWJ1dHRvblwiLCBib2R5KVxuICBzb3J0LnRleHRDb250ZW50ID0gXCJTb3J0IGJ5IFByaW9yaXR5XCJcbiAgc29ydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9Eb1NvcnRlcilcbn0pKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
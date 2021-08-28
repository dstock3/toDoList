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

const getGift = toDo(
  `Get a Birthday Gift for the Wife!`,
  "No giftcards...",
  "9/18/2021",
  "1", 
  "No idea what to get her...",
)

const toDoList = [toDoItem, changeOil, goToDoc, getGift]

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

  const sortByPriorityButton = (() => {
    let sort = elementBuilder("button", "sort-button", body)
    sort.textContent = "Sort by Priority"
    sort.addEventListener("click", sortByPriority)
  })();
  
  return { objArray, sortByPriority }
};

let newProject = listBuilder(toDoList, body)




/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsV0FBVztBQUNYOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9Eb0xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdG9EbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcykgPT4ge1xuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcyB9XG59O1xuXG5jb25zdCB0b0RvSXRlbSA9IHRvRG8oXG4gIGBNYWtlIFwiVG8gRG8gTGlzdFwiIEFwcGxpY2F0aW9uIWAsXG4gIFwiQ3JlYXRlIGFuIGFwcGxpY2F0aW9uIHRvIG1hbmFnZSBkYWlseSB0YXNrcy5cIixcbiAgXCI5LzE1LzIwMjFcIixcbiAgXCIxXCIsIFxuICBcIlRoaXMgdGhlIGZpcnN0IG9iamVjdCBjcmVhdGVkIHVzaW5nIHRoZSB0b0RvIGZhY3RvcnkgZnVuY3Rpb24uXCIsXG4pXG5cbmNvbnN0IGNoYW5nZU9pbCA9IHRvRG8oXG4gIFwiVGltZSBmb3IgYW4gT2lsIENoYW5nZSFcIixcbiAgXCJDaGFuZ2UgdGhlIG9pbCBpbiB5b3VyIGJlYXV0aWZ1bCBNYXpkYSAyIVwiLFxuICBcIjkvMjgvMjAyMVwiLFxuICBcIjNcIixcbiAgXCJ0ZXN0IG5vdGVcIixcbilcblxuY29uc3QgZ29Ub0RvYyA9IHRvRG8oXG4gIFwiR28gdG8geW91ciBEb2N0b3IncyBBcHBvaW50bWVudCFcIixcbiAgXCJJdCdzIHRpbWUgZm9yIGEgY2hlY2sgdXBcIixcbiAgXCI5LzE3LzIwMjFcIixcbiAgXCIyXCIsXG4gIFwiQmUgc3VyZSB0byB0ZWxsIGhpbSBhYm91dCB5b3VyIGJhY2sgYWNuZVwiLFxuKVxuXG5jb25zdCBnZXRHaWZ0ID0gdG9EbyhcbiAgYEdldCBhIEJpcnRoZGF5IEdpZnQgZm9yIHRoZSBXaWZlIWAsXG4gIFwiTm8gZ2lmdGNhcmRzLi4uXCIsXG4gIFwiOS8xOC8yMDIxXCIsXG4gIFwiMVwiLCBcbiAgXCJObyBpZGVhIHdoYXQgdG8gZ2V0IGhlci4uLlwiLFxuKVxuXG5jb25zdCB0b0RvTGlzdCA9IFt0b0RvSXRlbSwgY2hhbmdlT2lsLCBnb1RvRG9jLCBnZXRHaWZ0XVxuXG5mdW5jdGlvbiBlbGVtZW50QnVpbGRlcihlbGVtZW50LCBjbGFzc0xhYmVsLCBwYXJlbnROYW1lKSB7XG4gIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgaXRlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTGFiZWwpO1xuICBwYXJlbnROYW1lLmFwcGVuZENoaWxkKGl0ZW0pO1xuICByZXR1cm4gaXRlbTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGRyZW4ocGFyZW50KSB7XG4gIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5sZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXTtcblxuZnVuY3Rpb24gdG9Eb0J1aWxkZXIodGFzaywgcGFyZW50KSB7XG4gIGxldCBlbGVtZW50QXJyYXkgPSBbXTtcbiAgbGV0IHRhc2tEaXYgPSBlbGVtZW50QnVpbGRlcihcImRpdlwiLCBcInRhc2tcIiwgcGFyZW50KTtcbiAgbGV0IGhlYWQgPSBlbGVtZW50QnVpbGRlcihcImgyXCIsIFwidGFzay1oZWFkXCIsIHRhc2tEaXYpO1xuICBoZWFkLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgbGV0IGRlc2MgPSBlbGVtZW50QnVpbGRlcihcInBcIiwgXCJ0YXNrLWRlc2NcIiwgdGFza0Rpdik7XG4gIGRlc2MudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICBsZXQgZHVlRGF0ZSA9IGVsZW1lbnRCdWlsZGVyKFwicFwiLCBcImR1ZS1kYXRlXCIsIHRhc2tEaXYpO1xuICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICBsZXQgcHJpb3JpdHkgPSBlbGVtZW50QnVpbGRlcihcInBcIiwgXCJwcmlvcml0eVwiLCB0YXNrRGl2KTtcbiAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuICBsZXQgbm90ZXMgPSBlbGVtZW50QnVpbGRlcihcInBcIiwgXCJub3Rlc1wiLCB0YXNrRGl2KTtcbiAgbm90ZXMudGV4dENvbnRlbnQgPSB0YXNrLm5vdGVzO1xuICBlbGVtZW50QXJyYXkucHVzaChoZWFkLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpO1xuICByZXR1cm4gZWxlbWVudEFycmF5XG59O1xuXG5jb25zdCBsaXN0QnVpbGRlciA9ICh0b0RvQXJyYXksIHBhcmVudCkgPT4ge1xuICBsZXQgb2JqQXJyYXkgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvRG9BcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0YXNrID0gdG9Eb0FycmF5W2ldO1xuICAgIGxldCBlbGVtZW50QXJyYXkgPSB0b0RvQnVpbGRlcih0YXNrLCBwYXJlbnQpO1xuICAgIG9iakFycmF5LnB1c2goZWxlbWVudEFycmF5KTtcbiAgfTtcblxuICBjb25zdCBzb3J0QnlQcmlvcml0eSA9ICgpID0+IHtcbiAgICBsZXQgc29ydGVkQXJyYXkgPSB0b0RvQXJyYXkuc29ydCgoZmlyc3RJdGVtLCBzZWNvbmRJdGVtKSA9PiBmaXJzdEl0ZW0ucHJpb3JpdHkgLSBzZWNvbmRJdGVtLnByaW9yaXR5KTtcbiAgICByZW1vdmVDaGlsZHJlbihwYXJlbnQpXG4gICAgbGV0IHNvcnRlZExpc3QgPSBsaXN0QnVpbGRlcihzb3J0ZWRBcnJheSwgcGFyZW50KVxuICAgIHJldHVybiBzb3J0ZWRMaXN0XG4gIH07XG5cbiAgY29uc3Qgc29ydEJ5UHJpb3JpdHlCdXR0b24gPSAoKCkgPT4ge1xuICAgIGxldCBzb3J0ID0gZWxlbWVudEJ1aWxkZXIoXCJidXR0b25cIiwgXCJzb3J0LWJ1dHRvblwiLCBib2R5KVxuICAgIHNvcnQudGV4dENvbnRlbnQgPSBcIlNvcnQgYnkgUHJpb3JpdHlcIlxuICAgIHNvcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNvcnRCeVByaW9yaXR5KVxuICB9KSgpO1xuICBcbiAgcmV0dXJuIHsgb2JqQXJyYXksIHNvcnRCeVByaW9yaXR5IH1cbn07XG5cbmxldCBuZXdQcm9qZWN0ID0gbGlzdEJ1aWxkZXIodG9Eb0xpc3QsIGJvZHkpXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
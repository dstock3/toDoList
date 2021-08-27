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
  return { objArray }
};

let newProject = listBuilder(toDoList)
console.log(newProject.objArray)

/*const toDoSorter = (taskElementArray) => {


}*/
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b0RvTGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0b0RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzIH1cbn07XG5cbmNvbnN0IHRvRG9JdGVtID0gdG9EbyhcbiAgYE1ha2UgXCJUbyBEbyBMaXN0XCIgQXBwbGljYXRpb24hYCxcbiAgXCJDcmVhdGUgYW4gYXBwbGljYXRpb24gdG8gbWFuYWdlIGRhaWx5IHRhc2tzLlwiLFxuICBcIjkvMTUvMjAyMVwiLFxuICBcIjFcIiwgXG4gIFwiVGhpcyB0aGUgZmlyc3Qgb2JqZWN0IGNyZWF0ZWQgdXNpbmcgdGhlIHRvRG8gZmFjdG9yeSBmdW5jdGlvbi5cIixcbilcblxuY29uc3QgY2hhbmdlT2lsID0gdG9EbyhcbiAgXCJUaW1lIGZvciBhbiBPaWwgQ2hhbmdlIVwiLFxuICBcIkNoYW5nZSB0aGUgb2lsIGluIHlvdXIgYmVhdXRpZnVsIE1hemRhIDIhXCIsXG4gIFwiOS8yOC8yMDIxXCIsXG4gIFwiM1wiLFxuICBcInRlc3Qgbm90ZVwiLFxuKVxuXG5jb25zdCBnb1RvRG9jID0gdG9EbyhcbiAgXCJHbyB0byB5b3VyIERvY3RvcidzIEFwcG9pbnRtZW50IVwiLFxuICBcIkl0J3MgdGltZSBmb3IgYSBjaGVjayB1cFwiLFxuICBcIjkvMTcvMjAyMVwiLFxuICBcIjJcIixcbiAgXCJCZSBzdXJlIHRvIHRlbGwgaGltIGFib3V0IHlvdXIgYmFjayBhY25lXCIsXG4pXG5cblxuY29uc3QgdG9Eb0xpc3QgPSBbdG9Eb0l0ZW0sIGNoYW5nZU9pbCwgZ29Ub0RvY11cblxuZnVuY3Rpb24gZWxlbWVudEJ1aWxkZXIoZWxlbWVudCwgY2xhc3NMYWJlbCwgcGFyZW50TmFtZSkge1xuICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gIGl0ZW0uY2xhc3NMaXN0LmFkZChjbGFzc0xhYmVsKTtcbiAgcGFyZW50TmFtZS5hcHBlbmRDaGlsZChpdGVtKTtcbiAgcmV0dXJuIGl0ZW07XG59XG5cbmxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xuXG5mdW5jdGlvbiB0b0RvQnVpbGRlcih0YXNrKSB7XG4gIGxldCBlbGVtZW50QXJyYXkgPSBbXTtcbiAgbGV0IHRhc2tEaXYgPSBlbGVtZW50QnVpbGRlcihcImRpdlwiLCBcInRhc2tcIiwgYm9keSk7XG4gIGxldCBoZWFkID0gZWxlbWVudEJ1aWxkZXIoXCJoMlwiLCBcInRhc2staGVhZFwiLCB0YXNrRGl2KTtcbiAgaGVhZC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gIGxldCBkZXNjID0gZWxlbWVudEJ1aWxkZXIoXCJwXCIsIFwidGFzay1kZXNjXCIsIHRhc2tEaXYpO1xuICBkZXNjLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgbGV0IGR1ZURhdGUgPSBlbGVtZW50QnVpbGRlcihcInBcIiwgXCJkdWUtZGF0ZVwiLCB0YXNrRGl2KTtcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgbGV0IHByaW9yaXR5ID0gZWxlbWVudEJ1aWxkZXIoXCJwXCIsIFwicHJpb3JpdHlcIiwgdGFza0Rpdik7XG4gIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcbiAgbGV0IG5vdGVzID0gZWxlbWVudEJ1aWxkZXIoXCJwXCIsIFwibm90ZXNcIiwgdGFza0Rpdik7XG4gIG5vdGVzLnRleHRDb250ZW50ID0gdGFzay5ub3RlcztcbiAgZWxlbWVudEFycmF5LnB1c2goaGVhZCwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKTtcbiAgcmV0dXJuIGVsZW1lbnRBcnJheVxufTtcblxuY29uc3QgbGlzdEJ1aWxkZXIgPSAodG9Eb0FycmF5KSA9PiB7XG4gIGxldCBvYmpBcnJheSA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Eb0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRhc2sgPSB0b0RvQXJyYXlbaV07XG4gICAgbGV0IGVsZW1lbnRBcnJheSA9IHRvRG9CdWlsZGVyKHRhc2spO1xuICAgIG9iakFycmF5LnB1c2goZWxlbWVudEFycmF5KTtcbiAgfTtcbiAgcmV0dXJuIHsgb2JqQXJyYXkgfVxufTtcblxubGV0IG5ld1Byb2plY3QgPSBsaXN0QnVpbGRlcih0b0RvTGlzdClcbmNvbnNvbGUubG9nKG5ld1Byb2plY3Qub2JqQXJyYXkpXG5cbi8qY29uc3QgdG9Eb1NvcnRlciA9ICh0YXNrRWxlbWVudEFycmF5KSA9PiB7XG5cblxufSovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
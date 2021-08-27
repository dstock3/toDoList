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

const toDoList = [toDoItem, changeOil]

function elementBuilder(element, classLabel, parentName) {
  let item = document.createElement(element);
  item.classList.add(classLabel);
  parentName.appendChild(item);
  return item;
}

let body = document.getElementsByTagName("body")[0];

const toDoBuilder = (toDoArray) => {
  let objArray = []
  for (let i = 0; i < toDoArray.length; i++) {
    let elementArray = [];
    let task = toDoArray[i];
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
    objArray.push(elementArray);
  };
  return { objArray }
};

let newProject = toDoBuilder(toDoList)
console.log(newProject.objArray)
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b0RvTGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0b0RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzIH1cbn07XG5cbmNvbnN0IHRvRG9JdGVtID0gdG9EbyhcbiAgYE1ha2UgXCJUbyBEbyBMaXN0XCIgQXBwbGljYXRpb24hYCxcbiAgXCJDcmVhdGUgYW4gYXBwbGljYXRpb24gdG8gbWFuYWdlIGRhaWx5IHRhc2tzLlwiLFxuICBcIjkvMTUvMjAyMVwiLFxuICBcIjFcIiwgXG4gIFwiVGhpcyB0aGUgZmlyc3Qgb2JqZWN0IGNyZWF0ZWQgdXNpbmcgdGhlIHRvRG8gZmFjdG9yeSBmdW5jdGlvbi5cIixcbilcblxuY29uc3QgY2hhbmdlT2lsID0gdG9EbyhcbiAgXCJUaW1lIGZvciBhbiBPaWwgQ2hhbmdlIVwiLFxuICBcIkNoYW5nZSB0aGUgb2lsIGluIHlvdXIgYmVhdXRpZnVsIE1hemRhIDIhXCIsXG4gIFwiOS8yOC8yMDIxXCIsXG4gIFwiM1wiLFxuICBcInRlc3Qgbm90ZVwiLFxuKVxuXG5jb25zdCB0b0RvTGlzdCA9IFt0b0RvSXRlbSwgY2hhbmdlT2lsXVxuXG5mdW5jdGlvbiBlbGVtZW50QnVpbGRlcihlbGVtZW50LCBjbGFzc0xhYmVsLCBwYXJlbnROYW1lKSB7XG4gIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgaXRlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTGFiZWwpO1xuICBwYXJlbnROYW1lLmFwcGVuZENoaWxkKGl0ZW0pO1xuICByZXR1cm4gaXRlbTtcbn1cblxubGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF07XG5cbmNvbnN0IHRvRG9CdWlsZGVyID0gKHRvRG9BcnJheSkgPT4ge1xuICBsZXQgb2JqQXJyYXkgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvRG9BcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBlbGVtZW50QXJyYXkgPSBbXTtcbiAgICBsZXQgdGFzayA9IHRvRG9BcnJheVtpXTtcbiAgICBsZXQgdGFza0RpdiA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwidGFza1wiLCBib2R5KTtcbiAgICBsZXQgaGVhZCA9IGVsZW1lbnRCdWlsZGVyKFwiaDJcIiwgXCJ0YXNrLWhlYWRcIiwgdGFza0Rpdik7XG4gICAgaGVhZC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgbGV0IGRlc2MgPSBlbGVtZW50QnVpbGRlcihcInBcIiwgXCJ0YXNrLWRlc2NcIiwgdGFza0Rpdik7XG4gICAgZGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgbGV0IGR1ZURhdGUgPSBlbGVtZW50QnVpbGRlcihcInBcIiwgXCJkdWUtZGF0ZVwiLCB0YXNrRGl2KTtcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgIGxldCBwcmlvcml0eSA9IGVsZW1lbnRCdWlsZGVyKFwicFwiLCBcInByaW9yaXR5XCIsIHRhc2tEaXYpO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcbiAgICBsZXQgbm90ZXMgPSBlbGVtZW50QnVpbGRlcihcInBcIiwgXCJub3Rlc1wiLCB0YXNrRGl2KTtcbiAgICBub3Rlcy50ZXh0Q29udGVudCA9IHRhc2subm90ZXM7XG4gICAgZWxlbWVudEFycmF5LnB1c2goaGVhZCwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKTtcbiAgICBvYmpBcnJheS5wdXNoKGVsZW1lbnRBcnJheSk7XG4gIH07XG4gIHJldHVybiB7IG9iakFycmF5IH1cbn07XG5cbmxldCBuZXdQcm9qZWN0ID0gdG9Eb0J1aWxkZXIodG9Eb0xpc3QpXG5jb25zb2xlLmxvZyhuZXdQcm9qZWN0Lm9iakFycmF5KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
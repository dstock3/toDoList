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
  for (let i = 0; i < toDoArray.length; i++) {
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
  };
};

toDoBuilder(toDoList)

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9Eb0xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdG9EbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcykgPT4ge1xuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcyB9XG59O1xuXG5jb25zdCB0b0RvSXRlbSA9IHRvRG8oXG4gIGBNYWtlIFwiVG8gRG8gTGlzdFwiIEFwcGxpY2F0aW9uIWAsXG4gIFwiQ3JlYXRlIGFuIGFwcGxpY2F0aW9uIHRvIG1hbmFnZSBkYWlseSB0YXNrcy5cIixcbiAgXCI5LzE1LzIwMjFcIixcbiAgXCIxXCIsIFxuICBcIlRoaXMgdGhlIGZpcnN0IG9iamVjdCBjcmVhdGVkIHVzaW5nIHRoZSB0b0RvIGZhY3RvcnkgZnVuY3Rpb24uXCIsXG4pXG5cbmNvbnN0IGNoYW5nZU9pbCA9IHRvRG8oXG4gIFwiVGltZSBmb3IgYW4gT2lsIENoYW5nZSFcIixcbiAgXCJDaGFuZ2UgdGhlIG9pbCBpbiB5b3VyIGJlYXV0aWZ1bCBNYXpkYSAyIVwiLFxuICBcIjkvMjgvMjAyMVwiLFxuICBcIjNcIixcbiAgXCJ0ZXN0IG5vdGVcIixcbilcblxuY29uc3QgdG9Eb0xpc3QgPSBbdG9Eb0l0ZW0sIGNoYW5nZU9pbF1cblxuZnVuY3Rpb24gZWxlbWVudEJ1aWxkZXIoZWxlbWVudCwgY2xhc3NMYWJlbCwgcGFyZW50TmFtZSkge1xuICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gIGl0ZW0uY2xhc3NMaXN0LmFkZChjbGFzc0xhYmVsKTtcbiAgcGFyZW50TmFtZS5hcHBlbmRDaGlsZChpdGVtKTtcbiAgcmV0dXJuIGl0ZW07XG59XG5cbmxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xuXG5jb25zdCB0b0RvQnVpbGRlciA9ICh0b0RvQXJyYXkpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b0RvQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdGFzayA9IHRvRG9BcnJheVtpXTtcbiAgICBsZXQgdGFza0RpdiA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwidGFza1wiLCBib2R5KTtcbiAgICBsZXQgaGVhZCA9IGVsZW1lbnRCdWlsZGVyKFwiaDJcIiwgXCJ0YXNrLWhlYWRcIiwgdGFza0Rpdik7XG4gICAgaGVhZC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgbGV0IGRlc2MgPSBlbGVtZW50QnVpbGRlcihcInBcIiwgXCJ0YXNrLWRlc2NcIiwgdGFza0Rpdik7XG4gICAgZGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgbGV0IGR1ZURhdGUgPSBlbGVtZW50QnVpbGRlcihcInBcIiwgXCJkdWUtZGF0ZVwiLCB0YXNrRGl2KTtcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgIGxldCBwcmlvcml0eSA9IGVsZW1lbnRCdWlsZGVyKFwicFwiLCBcInByaW9yaXR5XCIsIHRhc2tEaXYpO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcbiAgICBsZXQgbm90ZXMgPSBlbGVtZW50QnVpbGRlcihcInBcIiwgXCJub3Rlc1wiLCB0YXNrRGl2KTtcbiAgICBub3Rlcy50ZXh0Q29udGVudCA9IHRhc2subm90ZXM7XG4gIH07XG59O1xuXG50b0RvQnVpbGRlcih0b0RvTGlzdClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
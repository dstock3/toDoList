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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvRG9MaXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRvRG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMgfVxufTtcblxuY29uc3QgdG9Eb0l0ZW0gPSB0b0RvKFxuICBgTWFrZSBcIlRvIERvIExpc3RcIiBBcHBsaWNhdGlvbiFgLFxuICBcIkNyZWF0ZSBhbiBhcHBsaWNhdGlvbiB0byBtYW5hZ2UgZGFpbHkgdGFza3MuXCIsXG4gIFwiOS8xNS8yMDIxXCIsXG4gIFwiMVwiLCBcbiAgXCJUaGlzIHRoZSBmaXJzdCBvYmplY3QgY3JlYXRlZCB1c2luZyB0aGUgdG9EbyBmYWN0b3J5IGZ1bmN0aW9uLlwiLFxuKVxuXG5jb25zdCBjaGFuZ2VPaWwgPSB0b0RvKFxuICBcIlRpbWUgZm9yIGFuIE9pbCBDaGFuZ2UhXCIsXG4gIFwiQ2hhbmdlIHRoZSBvaWwgaW4geW91ciBiZWF1dGlmdWwgTWF6ZGEgMiFcIixcbiAgXCI5LzI4LzIwMjFcIixcbiAgXCIzXCIsXG4gIFwidGVzdCBub3RlXCIsXG4pXG5cbmNvbnN0IHRvRG9MaXN0ID0gW3RvRG9JdGVtLCBjaGFuZ2VPaWxdXG5cbmZ1bmN0aW9uIGVsZW1lbnRCdWlsZGVyKGVsZW1lbnQsIGNsYXNzTGFiZWwsIHBhcmVudE5hbWUpIHtcbiAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICBpdGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NMYWJlbCk7XG4gIHBhcmVudE5hbWUuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIHJldHVybiBpdGVtO1xufVxuXG5jb25zdCB0b0RvQnVpbGRlciA9ICh0b0RvQXJyYXkpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b0RvQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zb2xlLmxvZyh0b0RvQXJyYXlbaV0udGl0bGUpO1xuICAgIGNvbnNvbGUubG9nKHRvRG9BcnJheVtpXS5kZXNjcmlwdGlvbik7XG4gICAgY29uc29sZS5sb2codG9Eb0FycmF5W2ldLmR1ZURhdGUpO1xuICAgIGNvbnNvbGUubG9nKHRvRG9BcnJheVtpXS5wcmlvcml0eSk7XG4gICAgY29uc29sZS5sb2codG9Eb0FycmF5W2ldLm5vdGVzKTtcbiAgfTtcbn07XG5cbnRvRG9CdWlsZGVyKHRvRG9MaXN0KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
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
  
  return { objArray, sortByPriority }
};

let newProject = listBuilder(toDoList, body)
let sortedProject = newProject.sortByPriority()

const sortByPriorityButton = (() => {
  let sort = elementBuilder("button", "sort-button", body)
  sort.textContent = "Sort by Priority"
  sort.addEventListener("click", sortByPriority)
})();


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b0RvTGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0b0RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzIH1cbn07XG5cbmNvbnN0IHRvRG9JdGVtID0gdG9EbyhcbiAgYE1ha2UgXCJUbyBEbyBMaXN0XCIgQXBwbGljYXRpb24hYCxcbiAgXCJDcmVhdGUgYW4gYXBwbGljYXRpb24gdG8gbWFuYWdlIGRhaWx5IHRhc2tzLlwiLFxuICBcIjkvMTUvMjAyMVwiLFxuICBcIjFcIiwgXG4gIFwiVGhpcyB0aGUgZmlyc3Qgb2JqZWN0IGNyZWF0ZWQgdXNpbmcgdGhlIHRvRG8gZmFjdG9yeSBmdW5jdGlvbi5cIixcbilcblxuY29uc3QgY2hhbmdlT2lsID0gdG9EbyhcbiAgXCJUaW1lIGZvciBhbiBPaWwgQ2hhbmdlIVwiLFxuICBcIkNoYW5nZSB0aGUgb2lsIGluIHlvdXIgYmVhdXRpZnVsIE1hemRhIDIhXCIsXG4gIFwiOS8yOC8yMDIxXCIsXG4gIFwiM1wiLFxuICBcInRlc3Qgbm90ZVwiLFxuKVxuXG5jb25zdCBnb1RvRG9jID0gdG9EbyhcbiAgXCJHbyB0byB5b3VyIERvY3RvcidzIEFwcG9pbnRtZW50IVwiLFxuICBcIkl0J3MgdGltZSBmb3IgYSBjaGVjayB1cFwiLFxuICBcIjkvMTcvMjAyMVwiLFxuICBcIjJcIixcbiAgXCJCZSBzdXJlIHRvIHRlbGwgaGltIGFib3V0IHlvdXIgYmFjayBhY25lXCIsXG4pXG5cbmNvbnN0IGdldEdpZnQgPSB0b0RvKFxuICBgR2V0IGEgQmlydGhkYXkgR2lmdCBmb3IgdGhlIFdpZmUhYCxcbiAgXCJObyBnaWZ0Y2FyZHMuLi5cIixcbiAgXCI5LzE4LzIwMjFcIixcbiAgXCIxXCIsIFxuICBcIk5vIGlkZWEgd2hhdCB0byBnZXQgaGVyLi4uXCIsXG4pXG5cbmNvbnN0IHRvRG9MaXN0ID0gW3RvRG9JdGVtLCBjaGFuZ2VPaWwsIGdvVG9Eb2MsIGdldEdpZnRdXG5cbmZ1bmN0aW9uIGVsZW1lbnRCdWlsZGVyKGVsZW1lbnQsIGNsYXNzTGFiZWwsIHBhcmVudE5hbWUpIHtcbiAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICBpdGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NMYWJlbCk7XG4gIHBhcmVudE5hbWUuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIHJldHVybiBpdGVtO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZHJlbihwYXJlbnQpIHtcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xuXG5mdW5jdGlvbiB0b0RvQnVpbGRlcih0YXNrLCBwYXJlbnQpIHtcbiAgbGV0IGVsZW1lbnRBcnJheSA9IFtdO1xuICBsZXQgdGFza0RpdiA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwidGFza1wiLCBwYXJlbnQpO1xuICBsZXQgaGVhZCA9IGVsZW1lbnRCdWlsZGVyKFwiaDJcIiwgXCJ0YXNrLWhlYWRcIiwgdGFza0Rpdik7XG4gIGhlYWQudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICBsZXQgZGVzYyA9IGVsZW1lbnRCdWlsZGVyKFwicFwiLCBcInRhc2stZGVzY1wiLCB0YXNrRGl2KTtcbiAgZGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gIGxldCBkdWVEYXRlID0gZWxlbWVudEJ1aWxkZXIoXCJwXCIsIFwiZHVlLWRhdGVcIiwgdGFza0Rpdik7XG4gIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gIGxldCBwcmlvcml0eSA9IGVsZW1lbnRCdWlsZGVyKFwicFwiLCBcInByaW9yaXR5XCIsIHRhc2tEaXYpO1xuICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG4gIGxldCBub3RlcyA9IGVsZW1lbnRCdWlsZGVyKFwicFwiLCBcIm5vdGVzXCIsIHRhc2tEaXYpO1xuICBub3Rlcy50ZXh0Q29udGVudCA9IHRhc2subm90ZXM7XG4gIGVsZW1lbnRBcnJheS5wdXNoKGhlYWQsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcyk7XG4gIHJldHVybiBlbGVtZW50QXJyYXlcbn07XG5cbmNvbnN0IGxpc3RCdWlsZGVyID0gKHRvRG9BcnJheSwgcGFyZW50KSA9PiB7XG4gIGxldCBvYmpBcnJheSA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Eb0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRhc2sgPSB0b0RvQXJyYXlbaV07XG4gICAgbGV0IGVsZW1lbnRBcnJheSA9IHRvRG9CdWlsZGVyKHRhc2ssIHBhcmVudCk7XG4gICAgb2JqQXJyYXkucHVzaChlbGVtZW50QXJyYXkpO1xuICB9O1xuXG4gIGNvbnN0IHNvcnRCeVByaW9yaXR5ID0gKCkgPT4ge1xuICAgIGxldCBzb3J0ZWRBcnJheSA9IHRvRG9BcnJheS5zb3J0KChmaXJzdEl0ZW0sIHNlY29uZEl0ZW0pID0+IGZpcnN0SXRlbS5wcmlvcml0eSAtIHNlY29uZEl0ZW0ucHJpb3JpdHkpO1xuICAgIHJlbW92ZUNoaWxkcmVuKHBhcmVudClcbiAgICBsZXQgc29ydGVkTGlzdCA9IGxpc3RCdWlsZGVyKHNvcnRlZEFycmF5LCBwYXJlbnQpXG4gICAgcmV0dXJuIHNvcnRlZExpc3RcbiAgfTtcbiAgXG4gIHJldHVybiB7IG9iakFycmF5LCBzb3J0QnlQcmlvcml0eSB9XG59O1xuXG5sZXQgbmV3UHJvamVjdCA9IGxpc3RCdWlsZGVyKHRvRG9MaXN0LCBib2R5KVxubGV0IHNvcnRlZFByb2plY3QgPSBuZXdQcm9qZWN0LnNvcnRCeVByaW9yaXR5KClcblxuY29uc3Qgc29ydEJ5UHJpb3JpdHlCdXR0b24gPSAoKCkgPT4ge1xuICBsZXQgc29ydCA9IGVsZW1lbnRCdWlsZGVyKFwiYnV0dG9uXCIsIFwic29ydC1idXR0b25cIiwgYm9keSlcbiAgc29ydC50ZXh0Q29udGVudCA9IFwiU29ydCBieSBQcmlvcml0eVwiXG4gIHNvcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNvcnRCeVByaW9yaXR5KVxufSkoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
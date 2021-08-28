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
    let sortedList = listBuilder(sortedArray)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvRG9MaXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRvRG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMgfVxufTtcblxuY29uc3QgdG9Eb0l0ZW0gPSB0b0RvKFxuICBgTWFrZSBcIlRvIERvIExpc3RcIiBBcHBsaWNhdGlvbiFgLFxuICBcIkNyZWF0ZSBhbiBhcHBsaWNhdGlvbiB0byBtYW5hZ2UgZGFpbHkgdGFza3MuXCIsXG4gIFwiOS8xNS8yMDIxXCIsXG4gIFwiMVwiLCBcbiAgXCJUaGlzIHRoZSBmaXJzdCBvYmplY3QgY3JlYXRlZCB1c2luZyB0aGUgdG9EbyBmYWN0b3J5IGZ1bmN0aW9uLlwiLFxuKVxuXG5jb25zdCBjaGFuZ2VPaWwgPSB0b0RvKFxuICBcIlRpbWUgZm9yIGFuIE9pbCBDaGFuZ2UhXCIsXG4gIFwiQ2hhbmdlIHRoZSBvaWwgaW4geW91ciBiZWF1dGlmdWwgTWF6ZGEgMiFcIixcbiAgXCI5LzI4LzIwMjFcIixcbiAgXCIzXCIsXG4gIFwidGVzdCBub3RlXCIsXG4pXG5cbmNvbnN0IGdvVG9Eb2MgPSB0b0RvKFxuICBcIkdvIHRvIHlvdXIgRG9jdG9yJ3MgQXBwb2ludG1lbnQhXCIsXG4gIFwiSXQncyB0aW1lIGZvciBhIGNoZWNrIHVwXCIsXG4gIFwiOS8xNy8yMDIxXCIsXG4gIFwiMlwiLFxuICBcIkJlIHN1cmUgdG8gdGVsbCBoaW0gYWJvdXQgeW91ciBiYWNrIGFjbmVcIixcbilcblxuY29uc3QgZ2V0R2lmdCA9IHRvRG8oXG4gIGBHZXQgYSBCaXJ0aGRheSBHaWZ0IGZvciB0aGUgV2lmZSFgLFxuICBcIk5vIGdpZnRjYXJkcy4uLlwiLFxuICBcIjkvMTgvMjAyMVwiLFxuICBcIjFcIiwgXG4gIFwiTm8gaWRlYSB3aGF0IHRvIGdldCBoZXIuLi5cIixcbilcblxuY29uc3QgdG9Eb0xpc3QgPSBbdG9Eb0l0ZW0sIGNoYW5nZU9pbCwgZ29Ub0RvYywgZ2V0R2lmdF1cblxuZnVuY3Rpb24gZWxlbWVudEJ1aWxkZXIoZWxlbWVudCwgY2xhc3NMYWJlbCwgcGFyZW50TmFtZSkge1xuICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gIGl0ZW0uY2xhc3NMaXN0LmFkZChjbGFzc0xhYmVsKTtcbiAgcGFyZW50TmFtZS5hcHBlbmRDaGlsZChpdGVtKTtcbiAgcmV0dXJuIGl0ZW07XG59XG5cbmxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xuXG5mdW5jdGlvbiB0b0RvQnVpbGRlcih0YXNrLCBwYXJlbnQpIHtcbiAgbGV0IGVsZW1lbnRBcnJheSA9IFtdO1xuICBsZXQgdGFza0RpdiA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIFwidGFza1wiLCBwYXJlbnQpO1xuICBsZXQgaGVhZCA9IGVsZW1lbnRCdWlsZGVyKFwiaDJcIiwgXCJ0YXNrLWhlYWRcIiwgdGFza0Rpdik7XG4gIGhlYWQudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICBsZXQgZGVzYyA9IGVsZW1lbnRCdWlsZGVyKFwicFwiLCBcInRhc2stZGVzY1wiLCB0YXNrRGl2KTtcbiAgZGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gIGxldCBkdWVEYXRlID0gZWxlbWVudEJ1aWxkZXIoXCJwXCIsIFwiZHVlLWRhdGVcIiwgdGFza0Rpdik7XG4gIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gIGxldCBwcmlvcml0eSA9IGVsZW1lbnRCdWlsZGVyKFwicFwiLCBcInByaW9yaXR5XCIsIHRhc2tEaXYpO1xuICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG4gIGxldCBub3RlcyA9IGVsZW1lbnRCdWlsZGVyKFwicFwiLCBcIm5vdGVzXCIsIHRhc2tEaXYpO1xuICBub3Rlcy50ZXh0Q29udGVudCA9IHRhc2subm90ZXM7XG4gIGVsZW1lbnRBcnJheS5wdXNoKGhlYWQsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcyk7XG4gIHJldHVybiBlbGVtZW50QXJyYXlcbn07XG5cbmNvbnN0IGxpc3RCdWlsZGVyID0gKHRvRG9BcnJheSwgcGFyZW50KSA9PiB7XG4gIGxldCBvYmpBcnJheSA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Eb0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRhc2sgPSB0b0RvQXJyYXlbaV07XG4gICAgbGV0IGVsZW1lbnRBcnJheSA9IHRvRG9CdWlsZGVyKHRhc2ssIHBhcmVudCk7XG4gICAgb2JqQXJyYXkucHVzaChlbGVtZW50QXJyYXkpO1xuICB9O1xuXG4gIGNvbnN0IHNvcnRCeVByaW9yaXR5ID0gKCkgPT4ge1xuICAgIGxldCBzb3J0ZWRBcnJheSA9IHRvRG9BcnJheS5zb3J0KChmaXJzdEl0ZW0sIHNlY29uZEl0ZW0pID0+IGZpcnN0SXRlbS5wcmlvcml0eSAtIHNlY29uZEl0ZW0ucHJpb3JpdHkpO1xuICAgIGxldCBzb3J0ZWRMaXN0ID0gbGlzdEJ1aWxkZXIoc29ydGVkQXJyYXkpXG4gICAgcmV0dXJuIHNvcnRlZExpc3RcbiAgfTtcbiAgXG4gIHJldHVybiB7IG9iakFycmF5LCBzb3J0QnlQcmlvcml0eSB9XG59O1xuXG5sZXQgbmV3UHJvamVjdCA9IGxpc3RCdWlsZGVyKHRvRG9MaXN0LCBib2R5KVxubGV0IHNvcnRlZFByb2plY3QgPSBuZXdQcm9qZWN0LnNvcnRCeVByaW9yaXR5KClcblxuY29uc3Qgc29ydEJ5UHJpb3JpdHlCdXR0b24gPSAoKCkgPT4ge1xuICBsZXQgc29ydCA9IGVsZW1lbnRCdWlsZGVyKFwiYnV0dG9uXCIsIFwic29ydC1idXR0b25cIiwgYm9keSlcbiAgc29ydC50ZXh0Q29udGVudCA9IFwiU29ydCBieSBQcmlvcml0eVwiXG4gIHNvcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNvcnRCeVByaW9yaXR5KVxufSkoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
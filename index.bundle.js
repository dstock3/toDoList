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
    let sortedArray = toDoArray.sort((firstItem, secondItem) => firstItem.priority - secondItem.priority);
    return sortedArray
  };
  return { objArray, sortByPriority }
};

let newProject = listBuilder(toDoList)

const sortButton = (() => {
  let sort = elementBuilder("button", "sort-button", body)
  sort.textContent = "Sort by Priority"
  sort.addEventListener("click", listBuilder.toDoSorter)
})();


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvRG9MaXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRvRG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMgfVxufTtcblxuY29uc3QgdG9Eb0l0ZW0gPSB0b0RvKFxuICBgTWFrZSBcIlRvIERvIExpc3RcIiBBcHBsaWNhdGlvbiFgLFxuICBcIkNyZWF0ZSBhbiBhcHBsaWNhdGlvbiB0byBtYW5hZ2UgZGFpbHkgdGFza3MuXCIsXG4gIFwiOS8xNS8yMDIxXCIsXG4gIFwiMVwiLCBcbiAgXCJUaGlzIHRoZSBmaXJzdCBvYmplY3QgY3JlYXRlZCB1c2luZyB0aGUgdG9EbyBmYWN0b3J5IGZ1bmN0aW9uLlwiLFxuKVxuXG5jb25zdCBjaGFuZ2VPaWwgPSB0b0RvKFxuICBcIlRpbWUgZm9yIGFuIE9pbCBDaGFuZ2UhXCIsXG4gIFwiQ2hhbmdlIHRoZSBvaWwgaW4geW91ciBiZWF1dGlmdWwgTWF6ZGEgMiFcIixcbiAgXCI5LzI4LzIwMjFcIixcbiAgXCIzXCIsXG4gIFwidGVzdCBub3RlXCIsXG4pXG5cbmNvbnN0IGdvVG9Eb2MgPSB0b0RvKFxuICBcIkdvIHRvIHlvdXIgRG9jdG9yJ3MgQXBwb2ludG1lbnQhXCIsXG4gIFwiSXQncyB0aW1lIGZvciBhIGNoZWNrIHVwXCIsXG4gIFwiOS8xNy8yMDIxXCIsXG4gIFwiMlwiLFxuICBcIkJlIHN1cmUgdG8gdGVsbCBoaW0gYWJvdXQgeW91ciBiYWNrIGFjbmVcIixcbilcblxuY29uc3QgZ2V0R2lmdCA9IHRvRG8oXG4gIGBHZXQgYSBCaXJ0aGRheSBHaWZ0IGZvciB0aGUgV2lmZSFgLFxuICBcIk5vIGdpZnRjYXJkcy4uLlwiLFxuICBcIjkvMTgvMjAyMVwiLFxuICBcIjFcIiwgXG4gIFwiTm8gaWRlYSB3aGF0IHRvIGdldCBoZXIuLi5cIixcbilcblxuY29uc3QgdG9Eb0xpc3QgPSBbdG9Eb0l0ZW0sIGNoYW5nZU9pbCwgZ29Ub0RvYywgZ2V0R2lmdF1cblxuZnVuY3Rpb24gZWxlbWVudEJ1aWxkZXIoZWxlbWVudCwgY2xhc3NMYWJlbCwgcGFyZW50TmFtZSkge1xuICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gIGl0ZW0uY2xhc3NMaXN0LmFkZChjbGFzc0xhYmVsKTtcbiAgcGFyZW50TmFtZS5hcHBlbmRDaGlsZChpdGVtKTtcbiAgcmV0dXJuIGl0ZW07XG59XG5cbmxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xuXG5mdW5jdGlvbiB0b0RvQnVpbGRlcih0YXNrKSB7XG4gIGxldCBlbGVtZW50QXJyYXkgPSBbXTtcbiAgbGV0IHRhc2tEaXYgPSBlbGVtZW50QnVpbGRlcihcImRpdlwiLCBcInRhc2tcIiwgYm9keSk7XG4gIGxldCBoZWFkID0gZWxlbWVudEJ1aWxkZXIoXCJoMlwiLCBcInRhc2staGVhZFwiLCB0YXNrRGl2KTtcbiAgaGVhZC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gIGxldCBkZXNjID0gZWxlbWVudEJ1aWxkZXIoXCJwXCIsIFwidGFzay1kZXNjXCIsIHRhc2tEaXYpO1xuICBkZXNjLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgbGV0IGR1ZURhdGUgPSBlbGVtZW50QnVpbGRlcihcInBcIiwgXCJkdWUtZGF0ZVwiLCB0YXNrRGl2KTtcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgbGV0IHByaW9yaXR5ID0gZWxlbWVudEJ1aWxkZXIoXCJwXCIsIFwicHJpb3JpdHlcIiwgdGFza0Rpdik7XG4gIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcbiAgbGV0IG5vdGVzID0gZWxlbWVudEJ1aWxkZXIoXCJwXCIsIFwibm90ZXNcIiwgdGFza0Rpdik7XG4gIG5vdGVzLnRleHRDb250ZW50ID0gdGFzay5ub3RlcztcbiAgZWxlbWVudEFycmF5LnB1c2goaGVhZCwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKTtcbiAgcmV0dXJuIGVsZW1lbnRBcnJheVxufTtcblxuY29uc3QgbGlzdEJ1aWxkZXIgPSAodG9Eb0FycmF5KSA9PiB7XG4gIGxldCBvYmpBcnJheSA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Eb0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRhc2sgPSB0b0RvQXJyYXlbaV07XG4gICAgbGV0IGVsZW1lbnRBcnJheSA9IHRvRG9CdWlsZGVyKHRhc2spO1xuICAgIG9iakFycmF5LnB1c2goZWxlbWVudEFycmF5KTtcbiAgfTtcblxuICBjb25zdCBzb3J0QnlQcmlvcml0eSA9ICgpID0+IHtcbiAgICBsZXQgc29ydGVkQXJyYXkgPSB0b0RvQXJyYXkuc29ydCgoZmlyc3RJdGVtLCBzZWNvbmRJdGVtKSA9PiBmaXJzdEl0ZW0ucHJpb3JpdHkgLSBzZWNvbmRJdGVtLnByaW9yaXR5KTtcbiAgICByZXR1cm4gc29ydGVkQXJyYXlcbiAgfTtcbiAgcmV0dXJuIHsgb2JqQXJyYXksIHNvcnRCeVByaW9yaXR5IH1cbn07XG5cbmxldCBuZXdQcm9qZWN0ID0gbGlzdEJ1aWxkZXIodG9Eb0xpc3QpXG5cbmNvbnN0IHNvcnRCdXR0b24gPSAoKCkgPT4ge1xuICBsZXQgc29ydCA9IGVsZW1lbnRCdWlsZGVyKFwiYnV0dG9uXCIsIFwic29ydC1idXR0b25cIiwgYm9keSlcbiAgc29ydC50ZXh0Q29udGVudCA9IFwiU29ydCBieSBQcmlvcml0eVwiXG4gIHNvcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxpc3RCdWlsZGVyLnRvRG9Tb3J0ZXIpXG59KSgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
import './style.css';

const project = (title, description) => {
  return { title, description }
};

const homeProjects = project(
  "Home Projects",
  "Projects to do around the house."
);

const forYourHealth = project(
  "Stay Healthy",
  "Prolong your biological life through various routines!"
);

const carProject = project(
  "Automotive tasks",
  "Basic car maintenance!",
)

const toDo = (title, project, description, dueDate, priority, notes) => {
  return { title, project, description, dueDate, priority, notes }
};

const toDoItem = toDo(
  `Make "To Do List" Application!`,
  homeProjects,
  "Create an application to manage daily tasks.",
  "9/15/2021",
  "2", 
  "This the first object created using the toDo factory function.",
)

const replaceWipers = toDo(
  "Replace Windshield Wipers",
  carProject,
  "My wipers are deteriorating...Dear god. It's time to replace them.",
  "10/6/21",
  "5",
  "Saw a deal at that place on 75th",
)

const changeOil = toDo(
  "Time for an Oil Change!",
  carProject,
  "Change the oil in your beautiful Mazda 2!",
  "9/28/2021",
  "3",
  "test note",
)

const goToDoc = toDo(
  "Go to your Doctor's Appointment!",
  forYourHealth,
  "It's time for a check up",
  "9/17/2021",
  "2",
  "Be sure to tell him about your back acne",
)

const getGift = toDo(
  `Get a Birthday Gift for the Wife!`,
  homeProjects,
  "No giftcards...",
  "9/18/2021",
  "1", 
  "No idea what to get her...",
)

const writeScript = toDo(
  "Write Script",
  homeProjects,
  `Finally write that movie script you've been talking about.`,
  "10/15/2021",
  "5", 
  "Be sure to include that twist ending where the guy was dead the whole time.",
)

const getTest = toDo(
  "Get Blood Test",
  forYourHealth,
  "Get that blood test your Doc ordered",
  "10/17/21",
  "1",
  "remember to fast 12 hours before. No eating!"
)

const firstList = [toDoItem, getGift, writeScript]
const secondList = [goToDoc, getTest]
const thirdList = [replaceWipers, changeOil]

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
  let removeTask = elementBuilder("button", "remove-task", taskDiv);
  removeTask.textContent = "x";
  let head = elementBuilder("h3", "task-head", taskDiv);
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

const projectHeader = (project, parent) => {
  let projectElement = elementBuilder("div", "project", parent);

  let projectHead = elementBuilder("h2", "project-head", projectElement)
  projectHead.textContent = project.title;

  let projectDesc = elementBuilder("p", "project-desc", projectElement);
  projectDesc.textContent = project.description;

  return projectElement
};

const projectBuilder = (toDoArray, project) => {

  let projectElement = projectHeader(project, body)
  
  let objArray = []
  for (let i = 0; i < toDoArray.length; i++) {
    let task = toDoArray[i];
    let elementArray = toDoBuilder(task, projectElement);
    objArray.push(elementArray);
  };

  const deleteList = () => {
    projectElement.remove()
  };

  const removeTask = (task) => {
    for (let i = 0; i < toDoArray.length; i++) {
      if (task === toDoArray[i]) {
        toDoArray.splice(i, 1);
      };
    };

    return toDoArray
  };

  const sortByPriority = () => {
    let sortedArray = toDoArray.sort((firstItem, secondItem) => firstItem.priority - secondItem.priority);
    return sortedArray
  };

  return { projectElement, objArray, toDoArray, removeTask, sortByPriority, deleteList }
};

const buttons = (set) => {

  const buttonDiv = elementBuilder("div", "button-div", set.projectElement)

  const sortByPriorityButton = (() => {
    let sort = elementBuilder("button", "sort-button", buttonDiv);
    sort.textContent = "Sort by Priority";
    let sortedArray = set.sortByPriority();
    let project = sortedArray[0].project;

    function newProjectSet() {
      set.deleteList()
      let sortedProject = projectBuilder(sortedArray, project)
      buttons(sortedProject)
    };

    sort.addEventListener("click", newProjectSet)
  })();

  const removeTaskButton = (() => {
    let projectElements = set.projectElement.children;
    for (let i = 0; i < set.elementArray; i++) {
      if (projectElements[i].classList.contains("task")) {
        console.log(projectElements[i])
        /*
        let taskDiv = set.elementArray[i];
        let removeTaskElement = set.elementArray[i].firstChild;

        function taskRemover() {
          if (set.toDoArray[i].title === taskDiv.secondChild.textContent) {
            taskDiv.remove();
            let newArray = removeTask(set.toDoArray[i]);
            projectBuilder(newArray, set.toDoArray[i].project);
          };
        };
        removeTaskElement.addEventListener("click", taskRemover);
        */
      };
    };
  })();

  const deleteButton = (() => {
    let del = elementBuilder("button", "delete-button", buttonDiv);
    del.textContent = "Remove Project"
    
    del.addEventListener("click", set.deleteList)
  })();

  return { sortByPriorityButton, deleteButton, removeTaskButton }
};

let newProject = projectBuilder(firstList, homeProjects);
let secondProject = projectBuilder(secondList, forYourHealth);
let thirdProject = projectBuilder(thirdList, carProject);

let projectArray = [newProject, secondProject, thirdProject];
for (let i = 0; i < projectArray.length; i++) {
  buttons(projectArray[i])
}






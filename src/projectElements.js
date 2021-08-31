import { toDo } from './task.js'

function elementBuilder(element, classLabel, parentName) {
    let item = document.createElement(element);
    item.classList.add(classLabel);
    parentName.appendChild(item);
    return item;
};

const getPosition = (projectElement) => {
    let projectIndex = Array.from(projectElement.parentNode.children).indexOf(projectElement);
    return projectIndex
};

let body = document.getElementsByTagName("body")[0];

function toDoBuilder(task, parent) {
    let elementArray = [];
    let taskDiv = elementBuilder("div", "task", parent);
    let topDiv = elementBuilder("div", "top-div", taskDiv)
    let removeTask = elementBuilder("button", "remove-task", topDiv);
    removeTask.textContent = "X";
    let head = elementBuilder("h3", "task-head", topDiv);
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

  return { projectElement, project, objArray, toDoArray, removeTask, sortByPriority, deleteList }
};

const buttons = (set) => {

  const addTaskButton = (() => {
    let addButton = elementBuilder("button", "add-task", set.projectElement);
    set.projectElement.prepend(addButton)
    addButton.textContent = "+"

    function addNewTask() {
      addTask(set);
    };

    addButton.addEventListener("click", addNewTask)
  })()

  const buttonDiv = elementBuilder("div", "button-div", set.projectElement)
  
  const sortByPriorityButton = (() => {
    let sort = elementBuilder("button", "sort-button", buttonDiv);
    sort.textContent = "Sort by Priority";
    let projectIndex = getPosition(set.projectElement);
    let sortedArray = set.sortByPriority();
    let project = sortedArray[0].project;
  
    function newProjectSet() {
      set.deleteList()
      let sortedProject = projectBuilder(sortedArray, project)
      body.insertBefore(sortedProject.projectElement, body.children[projectIndex]);
      buttons(sortedProject)
    };
  
    sort.addEventListener("click", newProjectSet)
  })();
  
  const removeTaskButton = (() => {
    let projectElements = Array.from(set.projectElement.children);
    for (let i = 0; i < projectElements.length; i++) {
      if (projectElements[i].classList.contains("task")) {
        let taskDiv = projectElements[i];
        let topDiv = taskDiv.children[0];
        let removeTaskElement = taskDiv.firstChild;
        for (let y = 0; y < set.toDoArray.length; y++) {
          if (topDiv.children[1].textContent === set.toDoArray[y].title) {
            function taskRemover() {
              let projectIndex = getPosition(set.projectElement);
              let newArray = set.removeTask(set.toDoArray[y]);
              set.deleteList()
              let sortedProject = projectBuilder(newArray, set.project);
              body.insertBefore(sortedProject.projectElement, body.children[projectIndex]);
              buttons(sortedProject) 
            }; 
            removeTaskElement.addEventListener("click", taskRemover);  
          };   
        };  
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

function applyButtons(toDoArray) {
    for (let i = 0; i < toDoArray.length; i++) {
      buttons(toDoArray[i])
    };
}

const addTask = (set) => {

  let project = set.project
  let projectElement = set.projectElement

  function addTransparent(childElements) {
    for (let i = 0; i < childElements.length - 1; i++) {
      childElements[i].classList.add("transparent")
    };
  }

  function removeTransparent(childElements) {
    for (let i = 0; i < childElements.length - 1; i++) {
      childElements[i].classList.remove("transparent")
    };
  };

  const taskPrompt = (() => {
    let prompt = elementBuilder("div", "task-prompt", body);

    let promptHead = elementBuilder("h3", "prompt-head", prompt)
    promptHead.textContent = "Create a Task";

    let titleDiv = elementBuilder("div", "title-div", prompt);
    let titleElement = elementBuilder("label", "name-label", titleDiv);
    titleElement.textContent = "Task: "
    let titleInput = elementBuilder("input", "title-input", titleDiv);
    titleInput.id = "title"
    titleInput.setAttribute("name", "title");
    
    let descDiv = elementBuilder("div", "description-div", prompt);
    let descElement = elementBuilder("label", "desc-label", descDiv);
    descElement.textContent = "Description: "
    let descInput = elementBuilder("input", "desc-input", descDiv);
    descInput.id = "description";
    descInput.setAttribute("name", "desc");

    let dueDiv = elementBuilder("div", "due-div", prompt);
    let dueElement = elementBuilder("label", "due-label", dueDiv);
    dueElement.textContent = "Due Date: "
    let dueInput = elementBuilder("input", "due-input", dueDiv);
    dueInput.id = "due";
    dueInput.setAttribute("name", "due");

    let priorityDiv = elementBuilder("div", "priority-div", prompt);
    let priorityElement = elementBuilder("label", "priority-label", priorityDiv);
    priorityElement.textContent = "Priority: "
    let priorityInput = elementBuilder("input", "priority-input", priorityDiv);
    priorityInput.id = "priority";
    priorityInput.setAttribute("name", "priority");

    let notesDiv = elementBuilder("div", "notes-div", prompt);
    let notesElement = elementBuilder("label", "notes-label", notesDiv);
    notesElement.textContent = "Notes: "
    let notesInput = elementBuilder("input", "notes-input", notesDiv);
    notesInput.id = "notes";
    notesInput.setAttribute("name", "notes");

    let children = document.body.children;
    addTransparent(children)

    let buttonDiv = elementBuilder("div", "create-task-buttons", prompt)

    let createButton = elementBuilder("button", "create-task-button", buttonDiv);
    createButton.textContent = "Create Task";

    let cancelButton = elementBuilder("button", "cancel-button", buttonDiv)
    cancelButton.textContent = "Cancel";

    function exit() {
      removeTransparent(children);
      prompt.remove()
    }

    cancelButton.addEventListener("click", exit);

    function createTask() {
      let title = document.getElementById("title").value;
      let description = document.getElementById("description").value;
      let dueDate = document.getElementById("due").value;
      let priority = document.getElementById("priority").value;
      let notes = document.getElementById("notes").value;

      let task = toDo(title, project, description, dueDate, priority, notes);
      toDoBuilder(task, projectElement);

      let toDoArray = set.toDoArray;
      toDoArray.push(task);
      let projectIndex = getPosition(projectElement);
      projectElement.remove();
      let updatedProject = projectBuilder(toDoArray, project);
      body.insertBefore(updatedProject.projectElement, body.children[projectIndex]);
      buttons(updatedProject);

      exit()
    };

    createButton.addEventListener("click", createTask)
  })();
  
};

export {
    elementBuilder,
    projectHeader,
    projectBuilder,
    buttons, 
    applyButtons
}
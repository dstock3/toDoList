/* eslint-disable no-inner-declarations */
/* eslint-disable no-unused-vars */
import { toDo } from './task.js'

function elementBuilder(element, classLabel, parentName) {
    let item = document.createElement(element);
    item.classList.add(classLabel);
    parentName.appendChild(item);
    return item;
}

const getPosition = (projectElement) => {
    let projectIndex = Array.from(projectElement.parentNode.children).indexOf(projectElement);
    return projectIndex
};

let body = document.getElementsByTagName("body")[0];

const sidebar = (() => {
  const sidebarElement = elementBuilder("div", "sidebar", body);
  const newProject = elementBuilder("a", "new-project", sidebarElement);
  newProject.textContent = "Create a New Project";
  return { sidebarElement, newProject }
})();

let projectDiv = elementBuilder("div", "project-container", body)

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
    let status = elementBuilder("p", "status", taskDiv);
    status.textContent = task.status;
    elementArray.push(taskDiv, topDiv, removeTask, head, desc, dueDate, priority, notes, status);
    
    return elementArray
}

const projectHeader = (project, parent) => {
    let projectElement = elementBuilder("div", "project", parent);
  
    let projectHead = elementBuilder("h2", "project-head", projectElement)
    projectHead.textContent = project.title;
  
    let projectDesc = elementBuilder("p", "project-desc", projectElement);
    projectDesc.textContent = project.description;
  
    return projectElement
};

const projectBuilder = (project) => {
  let toDoArray = project.taskArray;

  let projectElement = projectHeader(project, projectDiv)
  
  for (let i = 0; i < toDoArray.length; i++) {
    let task = toDoArray[i];
    toDoBuilder(task, projectElement);
  }

  const deleteList = () => {
    projectElement.remove()
  };

  const removeTask = (task) => {
    for (let i = 0; i < toDoArray.length; i++) {
      if (task === toDoArray[i]) {
        toDoArray.splice(i, 1);
      }
    }

    return toDoArray
  };

  const sortByPriority = () => {
    let sortedArray = toDoArray.sort((firstItem, secondItem) => firstItem.priority - secondItem.priority);
    return sortedArray
  };

  const minTasks = () => {
    let projectChildren = Array.from(projectElement.children);
    for (let i = 0; i < projectChildren.length; i++) {
      if (projectChildren[i].classList.contains("task")) {
        let taskElement = projectChildren[i];
        taskElement.classList.add("min");
        let taskChildren = Array.from(taskElement.children);
        for (let y = 0; y < taskChildren.length; y++) {
          if ((y === 1) || (y === 3) || (y === 4) || (y === 5)) {
            taskChildren[y].remove();
          }
        }
      }
    } 
  }

  return { projectElement, project, toDoArray, removeTask, sortByPriority, deleteList, minTasks }
};

const buttons = (set) => {
  const topButtonDiv = elementBuilder("div", "top-button-div", set.projectElement)
  set.projectElement.prepend(topButtonDiv);

  const addTaskButton = (() => {
    let addButton = elementBuilder("button", "top-buttons", topButtonDiv);
    addButton.classList.add("add-task")
    addButton.textContent = "+"

    function addNewTask() {
      addTask(set);
    }

    addButton.addEventListener("click", addNewTask)
  })()

  const maximize = () => {
    let projectIndex = getPosition(set.projectElement);
    set.deleteList()
    let maxProject = projectBuilder(set.project);
    projectDiv.insertBefore(maxProject.projectElement, projectDiv.children[projectIndex]);
    buttons(maxProject);
  }

  const minimize = (() => {
    let minButton = elementBuilder("button", "top-buttons", topButtonDiv);
    minButton.classList.add("min-button")
    minButton.textContent = "-"

    function minProject() {
      minButton.textContent = "□"
      set.minTasks()
      minButton.addEventListener("click", maximize);
    }

    minButton.addEventListener("click", minProject);
  })();

  const buttonDiv = elementBuilder("div", "button-div", set.projectElement)
  
  const sortByPriorityButton = (() => {
    let sort = elementBuilder("button", "sort-button", buttonDiv);
    sort.textContent = "Sort by Priority";
    let projectIndex = getPosition(set.projectElement);
    let sortedArray = set.sortByPriority();
    let project = sortedArray[0].project;
  
    function newProjectSet() {
      set.deleteList()
      let sortedProject = projectBuilder(project)
      projectDiv.insertBefore(sortedProject.projectElement, projectDiv.children[projectIndex]);
      buttons(sortedProject)
    }
  
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
              set.removeTask(set.toDoArray[y]);
              set.deleteList()
              let sortedProject = projectBuilder(set.project);
              projectDiv.insertBefore(sortedProject.projectElement, projectDiv.children[projectIndex]);
              buttons(sortedProject) 
            } 
            removeTaskElement.addEventListener("click", taskRemover);  
          }   
        }  
      } 
    }
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
    }
}

const addTask = (set) => {

  let project = set.project
  let projectElement = set.projectElement

  function addTransparent(childElements) {
    for (let i = 0; i < childElements.length - 1; i++) {
      childElements[i].classList.add("transparent")
    }
  }

  function removeTransparent(childElements) {
    for (let i = 0; i < childElements.length - 1; i++) {
      childElements[i].classList.remove("transparent")
    }
  }

  const taskPrompt = (() => {
    let prompt = elementBuilder("div", "task-prompt", body);

    let promptHead = elementBuilder("h3", "prompt-head", prompt)
    promptHead.textContent = "Create a Task";

    let titleDiv = elementBuilder("div", "new-task", prompt);
    titleDiv.classList.add("title-div");
    let titleElement = elementBuilder("label", "name-label", titleDiv);
    titleElement.textContent = "Task: "
    let titleInput = elementBuilder("input", "title-input", titleDiv);
    titleInput.id = "title"
    titleInput.setAttribute("name", "title");
    
    let descDiv = elementBuilder("div", "new-task", prompt);
    descDiv.classList.add("description-div");
    let descElement = elementBuilder("label", "desc-label", descDiv);
    descElement.textContent = "Description: "
    let descInput = elementBuilder("input", "desc-input", descDiv);
    descInput.id = "description";
    descInput.setAttribute("name", "desc");

    let dueDiv = elementBuilder("div", "new-task", prompt);
    dueDiv.classList.add("due-div");
    let dueElement = elementBuilder("label", "due-label", dueDiv);
    dueElement.textContent = "Due Date: "
    let dueInput = elementBuilder("input", "due-input", dueDiv);
    dueInput.id = "due";
    dueInput.setAttribute("name", "due");

    let priorityDiv = elementBuilder("div", "new-task", prompt);
    priorityDiv.classList.add("priority-div");
    let priorityElement = elementBuilder("label", "priority-label", priorityDiv);
    priorityElement.textContent = "Priority: "
    let priorityInput = elementBuilder("input", "priority-input", priorityDiv);
    priorityInput.id = "priority";
    priorityInput.setAttribute("name", "priority");

    let notesDiv = elementBuilder("div", "new-task", prompt);
    notesDiv.classList.add("notes-div");
    let notesElement = elementBuilder("label", "notes-label", notesDiv);
    notesElement.textContent = "Notes: "
    let notesInput = elementBuilder("input", "notes-input", notesDiv);
    notesInput.id = "notes";
    notesInput.setAttribute("name", "notes");

    let children = body.children;
    addTransparent(children)

    let buttonDiv = elementBuilder("div", "create-task-buttons", prompt)

    let createButton = elementBuilder("button", "create-task", buttonDiv);
    createButton.textContent = "Create Task";

    let cancelButton = elementBuilder("button", "cancel", buttonDiv)
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
      let status = "In Progress"

      let task = toDo(title, project, description, dueDate, priority, notes, status);
      toDoBuilder(task, projectElement);

      let projectIndex = getPosition(projectElement);
      projectElement.remove();
      let updatedProject = projectBuilder(project);
      projectDiv.insertBefore(updatedProject.projectElement, projectDiv.children[projectIndex]);
      buttons(updatedProject);

      exit();
    }

    createButton.addEventListener("click", createTask)
  })();
  
};

export {
    elementBuilder,
    projectHeader,
    projectBuilder,
    buttons, 
    applyButtons,
}
/* eslint-disable no-inner-declarations */
/* eslint-disable no-unused-vars */
import { project, toDo } from './task.js'
import { projects } from './index'

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

  let viewElement = elementBuilder("button", "view-button", sidebarElement)
  viewElement.textContent = "Change View"

  return { sidebarElement, newProject, viewElement }
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
  let projectElement = projectHeader(project, projectDiv)

  for (let i = 0; i < project.taskArray.length; i++) {
    let task = project.taskArray[i];
    toDoBuilder(task, projectElement);
  }

  const deleteList = () => {
    projectElement.remove()
  };

  const removeTask = (task) => {
    for (let i = 0; i < project.taskArray.length; i++) {
      if (task === project.taskArray[i]) {
        project.taskArray.splice(i, 1);
      }
    }

    return project.taskArray
  };

  const sortByPriority = () => {
    let sortedArray = project.taskArray.sort((firstItem, secondItem) => firstItem.priority - secondItem.priority);
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
  return { projectElement, project, removeTask, sortByPriority, deleteList, minTasks }
};

const taskButtons = (set) => {
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
    projects.masterList.push(maxProject)
    projectDiv.insertBefore(maxProject.projectElement, projectDiv.children[projectIndex]);
    taskButtons(maxProject);
  }

  const minimize = (() => {
    if (set.project.taskArray.length > 0) {
      let minButton = elementBuilder("button", "top-buttons", topButtonDiv);
      minButton.classList.add("min-button")
      minButton.textContent = "-"

      function minProject() {
        minButton.textContent = "□"
        set.minTasks()
        minButton.addEventListener("click", maximize);
      }

      minButton.addEventListener("click", minProject);
    }
  })();

  const buttonDiv = elementBuilder("div", "button-div", set.projectElement)
  
  const sortByPriorityButton = (() => {
    if (set.project.taskArray.length > 0) {
      let sort = elementBuilder("button", "sort-button", buttonDiv);
      sort.textContent = "Sort by Priority";
      let projectIndex = getPosition(set.projectElement);
      set.sortByPriority();
      
      function newProjectSet() {
        set.deleteList()
        let sortedProject = projectBuilder(set.project)
        projects.masterList.push(sortedProject)
        projectDiv.insertBefore(sortedProject.projectElement, projectDiv.children[projectIndex]);
        taskButtons(sortedProject)
      }
      sort.addEventListener("click", newProjectSet)
  }
})();
  
  const removeTaskButton = (() => {
    let projectElements = Array.from(set.projectElement.children);
    for (let i = 0; i < projectElements.length; i++) {
      if (projectElements[i].classList.contains("task")) {
        let taskDiv = projectElements[i];
        let topDiv = taskDiv.children[0];
        let removeTaskElement = taskDiv.firstChild;
        for (let y = 0; y < set.project.taskArray.length; y++) {
          if (topDiv.children[1].textContent === set.project.taskArray[y].title) {
            function taskRemover() {
              let projectIndex = getPosition(set.projectElement);
              set.removeTask(set.project.taskArray[y]);
              set.deleteList()
              let sortedProject = projectBuilder(set.project);
              projects.masterList.push(sortedProject)
              projectDiv.insertBefore(sortedProject.projectElement, projectDiv.children[projectIndex]);
              taskButtons(sortedProject) 
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
};

function applyButtons(taskArray) {
    for (let i = 0; i < taskArray.length; i++) {
      taskButtons(taskArray[i])
    }
}

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

function newInput(parent, promptType, divClass, labelClass, labelContent, inputClass, inputId, nameAt) {
  let newDiv = elementBuilder("div", promptType, parent);
  newDiv.classList.add(divClass);
  let divLabel = elementBuilder("label", labelClass, newDiv);
  divLabel.textContent = labelContent
  let divInput = elementBuilder("input", inputClass, newDiv);
  divInput.id = inputId
  divInput.setAttribute("name", nameAt);
   
}

const addTask = (set) => {

  let project = set.project
  let projectElement = set.projectElement

  const taskPrompt = (() => {
    let prompt = elementBuilder("div", "task-prompt", body);

    let promptHead = elementBuilder("h3", "prompt-head", prompt)
    promptHead.textContent = "Create a Task";

    newInput(prompt, "new-task", "title-div", "name-label", "Task: ", "title-input", "title", "title");
    newInput(prompt, "new-task", "description-div", "desc-label", "Description: ", "desc-input", "description", "desc");
    newInput(prompt, "new-task", "due-div", "due-label", "Due Date: ", "due-input", "due", "due");
    newInput(prompt, "new-task", "priority-div", "priority-label", "Priority: ", "priority-input", "priority", "priority")
    newInput(prompt, "new-task", "notes-div", "notes-label", "Notes: ", "notes-input", "notes", "notes")

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
      projects.masterList.push(updatedProject)
      projectDiv.insertBefore(updatedProject.projectElement, projectDiv.children[projectIndex]);
      taskButtons(updatedProject);

      exit();
    }

    createButton.addEventListener("click", createTask)
  })();
};

const projectButton = (() => {

  function addNewProject() {
    addProject();
  }

  sidebar.newProject.addEventListener("click", addNewProject)
})();

const addProject = () => {

  const projectPrompt = (() => {
    let prompt = elementBuilder("div", "project-prompt", body);

    let promptHead = elementBuilder("h3", "prompt-head", prompt)
    promptHead.textContent = "Create a Project";

    newInput(prompt, "new-task", "title-div", "name-label", "Task: ", "title-input", "project-title", "title");
    newInput(prompt, "new-task", "description-div", "desc-label", "Description: ", "desc-input", "project-description", "desc");

    let children = body.children;
    addTransparent(children)

    let buttonDiv = elementBuilder("div", "create-task-buttons", prompt);

    let createButton = elementBuilder("button", "create-task", buttonDiv);
    createButton.textContent = "Create Project";

    let cancelButton = elementBuilder("button", "cancel", buttonDiv)
    cancelButton.textContent = "Cancel";

    function exit() {
      removeTransparent(children);
      prompt.remove()
    }

    cancelButton.addEventListener("click", exit);

    function createProject() {
      let title = document.getElementById("project-title").value;
      let description = document.getElementById("project-description").value;

      let newProject = project(title, description, [])
      let projectSet = projectBuilder(newProject);
      projects.masterList.push(projectSet)
      taskButtons(projectSet);

      exit();
    }

    createButton.addEventListener("click", createProject)
  })();
}

const viewButton = (() => {

  function maxView() {
    changeView.maxAll();
    sidebar.viewElement.addEventListener("click", minView)
  }

  function minView() {
    changeView.minAll();
    sidebar.viewElement.addEventListener("click", maxView)
  }

  sidebar.viewElement.addEventListener("click", minView)
})();

const changeView = (() => {
  const minAll = () => {
    for (let i = 0; i < projects.masterList.length; i++) {
      console.log(projects.masterList)
      projects.masterList[i].minTasks()
    }
  }

  const maxAll = () => {
    projects.clearList()
    for (let i = 0; i < projects.masterList.length; i++) {
      let set = projects.masterList[i]
      let projectIndex = getPosition(set.projectElement);
      set.deleteList()
      let maxProject = projectBuilder(set.project);
      projectDiv.insertBefore(maxProject.projectElement, projectDiv.children[projectIndex]);
      projects.masterList.push(maxProject)
      taskButtons(maxProject);
      
    }
  }

  return { minAll, maxAll }
})();

export {
  elementBuilder,
  projectHeader,
  projectBuilder, 
  applyButtons,
}
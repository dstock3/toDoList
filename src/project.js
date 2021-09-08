/* eslint-disable no-inner-declarations */
/* eslint-disable no-unused-vars */
import { project, toDo, projectTracker } from './task'
import { elementBuilder, getPosition, body, projectDiv } from './elements'
import { sortByDueDate } from './date'
import { sidebar, notifButton, deadlineNotif } from './sidebar'
import { validation, validateProj } from './validation'
import { store } from './storage'

let allProjects = projectTracker()

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
    let originalIndex = allProjects.masterList.indexOf(set)
    let maxProject = projectBuilder(set.project);
    allProjects.masterList.push(maxProject)
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

  const sortByDueDateButton = (() => {
    if (set.project.taskArray.length > 1) {
      let sort = elementBuilder("button", "sort-button", buttonDiv);
      sort.textContent = "Sort by Due Date";

      let projectIndex = getPosition(set.projectElement);

      function newSortedList() {
        let sortedTasks = sortByDueDate(set.project.taskArray)
        set.project.taskArray = sortedTasks
        set.deleteList()
        let sortedProject = projectBuilder(set.project)
        projectDiv.insertBefore(sortedProject.projectElement, projectDiv.children[projectIndex]);
        taskButtons(sortedProject)        
      }

      sort.addEventListener("click", newSortedList)
    }
  })();

  const sortByPriorityButton = (() => {
    if (set.project.taskArray.length > 1) {
      let sort = elementBuilder("button", "sort-by-priority", buttonDiv);
      sort.textContent = "Sort by Priority";
      let projectIndex = getPosition(set.projectElement);
      set.sortByPriority();
      
      function newProjectSet() {
        set.deleteList()
        let sortedProject = projectBuilder(set.project)
        allProjects.masterList.push(sortedProject)
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
              allProjects.masterList.push(sortedProject)
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
    let del = elementBuilder("button", "top-buttons", topButtonDiv);
    del.classList.add("delete-button")
    del.textContent = "x"
        
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

function newInput(parent, promptType, divClass, labelClass, labelContent, inputClass, placeholder, inputId, nameAt) {
  let newDiv = elementBuilder("div", promptType, parent);
  newDiv.classList.add(divClass);
  let divLabel = elementBuilder("label", labelClass, newDiv);
  divLabel.textContent = labelContent
  let divInput = elementBuilder("input", inputClass, newDiv);
  divInput.setAttribute("placeholder", placeholder)
  divInput.id = inputId
  divInput.setAttribute("name", nameAt);
  return newDiv
}

const addTask = (set) => {

  let project = set.project
  let projectElement = set.projectElement

  const taskPrompt = (() => {
    let prompt = elementBuilder("div", "task-prompt", body);

    let promptHead = elementBuilder("h3", "prompt-head", prompt)
    promptHead.textContent = "Create a Task";

    let titleDiv = newInput(prompt, "new-task", "title-div", "name-label", "Task: ", "title-input", "Enter a Task!", "title", "title");
    let descDiv = newInput(prompt, "new-task", "description-div", "desc-label", "Description: ",  "desc-input", "Write a brief description.", "description", "desc");
    let dueDiv = newInput(prompt, "new-task", "due-div", "due-label", "Due Date: ", "due-input", "MM/DD/YYYY", "due", "due");
    let priorityDiv = newInput(prompt, "new-task", "priority-div", "priority-label", "Priority: ", "priority-input", "Enter a number 1-5", "priority", "priority")
    let notesDiv = newInput(prompt, "new-task", "notes-div", "notes-label", "Notes: ", "notes-input", "Write your notes here.", "notes", "notes")

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
      let titlePair = [title, titleDiv]
      let description = document.getElementById("description").value;
      let descPair = [description, descDiv]
      let enteredDate = document.getElementById("due").value;
      let datePair = [enteredDate, dueDiv]
      let priority = document.getElementById("priority").value;
      let priorityPair = [priority, priorityDiv]
      let notes = document.getElementById("notes").value;
      let notePair = [notes, notesDiv]
      let status = "In Progress"
      let obj = {titlePair, descPair, datePair, priorityPair, notePair}

      let validArray = validation(obj)
      let isValid = validArray[0]
    
      if (isValid) {
        let dueDate = validArray[1];
        let newTask = toDo(title, project, description, enteredDate, dueDate, priority, notes, status);
        
        project.taskArray.unshift(newTask);
        store(newTask)
        console.log(localStorage)
        deadlineNotif(newTask)
        notifButton()
        toDoBuilder(newTask, projectElement);
    
        let projectIndex = getPosition(projectElement);
        projectElement.remove();
        let updatedProject = projectBuilder(project);
    
        allProjects.masterList.push(updatedProject)
        projectDiv.insertBefore(updatedProject.projectElement, projectDiv.children[projectIndex]);
        taskButtons(updatedProject);
    
        exit();
      } else { createButton.addEventListener("click", createTask) }
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
    promptHead.textContent = "Start a New Project";

    let titleDiv = newInput(prompt, "new-task", "title-div", "name-label", "Task: ", "title-input", "Enter a title for your new project.", "project-title", "title");
    let descDiv = newInput(prompt, "new-task", "description-div", "desc-label", "Description: ", "desc-input", "Include a brief description.", "project-description", "desc");

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
      let titlePair = [title, titleDiv]
      let description = document.getElementById("project-description").value;
      let descPair = [description, descDiv]
      let obj = { titlePair, descPair }

      let isValid = validateProj(obj)

      if (isValid) {
        let newProject = project(title, description, [])
        let projectSet = projectBuilder(newProject);
        taskButtons(projectSet);
        allProjects.masterList.push(projectSet)
  
        exit();
      } else { createButton.addEventListener("click", createProject) }
    }
    createButton.addEventListener("click", createProject)
  })();
}

const viewButton = (() => {
  function maxView() {
    console.log(projectDiv.children)
    changeView.maxAll();
    sidebar.changeView.addEventListener("click", minView)
  }

  function minView() {
    changeView.minAll();
    sidebar.changeView.addEventListener("click", maxView)
  }

  sidebar.changeView.addEventListener("click", minView)
})();

const changeView = (() => {
  const minAll = () => {
    for (let i = 0; i < allProjects.masterList.length; i++) {
      allProjects.masterList[i].minTasks()
    }
  }

  const maxAll = () => {
    for (let i = 0; i < allProjects.masterList.length; i++) {
      let set = allProjects.masterList[i];
      
      //let projectIndex
      set.projectElement.remove()
      set.deleteList()
      let maxProject = projectBuilder(set.project);

      //projectDiv.insertBefore(maxProject.projectElement, projectDiv.children[projectIndex]);
      taskButtons(maxProject);
    }
  }
  return { minAll, maxAll }
})();

export {
  projectHeader,
  projectBuilder, 
  applyButtons,
  allProjects
}
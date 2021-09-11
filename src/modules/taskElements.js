import { elementBuilder, projectDiv } from './elements'

function taskBuilder(task, parent) {
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
    parent.prepend(projectElement)
  
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
      taskBuilder(task, projectElement);
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
  
    const maxTasks = () => {
      let projectChildren = Array.from(projectElement.children);
      for (let i = 0; i < projectChildren.length; i++) {
        let taskElement = projectChildren[i];
        taskElement.classList.remove("min");
        taskElement.remove();
        taskBuilder(project.taskArray[i], projectElement)
      }
    }
    return { projectElement, project, removeTask, sortByPriority, deleteList, minTasks, maxTasks }
};

export {
    taskBuilder,
    projectBuilder
}
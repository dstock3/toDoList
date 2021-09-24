/* eslint-disable no-inner-declarations */
/* eslint-disable no-unused-vars */
import { elementBuilder, getPosition, projectDiv, body } from "./elements";
import { sortByDueDate } from "./date";
import { projectBuilder } from "./taskElements";
import { addTask, addProject, allProjects } from "./projectCreator";
import { sidebar, themeCheck } from "./sidebar";
import { store, checkList } from "./store";
import { forEach } from "lodash";

let fetchedList = checkList()

function addTransparent(childElements) {
  for (let i = 0; i < childElements.length - 1; i++) {
    childElements[i].classList.add("transparent");
  }
}

function removeTransparent(childElements) {
  for (let i = 0; i < childElements.length - 1; i++) {
    childElements[i].classList.remove("transparent");
  }
}

const taskButtons = (set) => {
  const topButtonDiv = elementBuilder(
    "div",
    "top-button-div",
    set.projectElement
  );
  set.projectElement.prepend(topButtonDiv);

  const addTaskButton = (() => {
    let addButton = elementBuilder("button", "top-buttons", topButtonDiv);
    addButton.classList.add("add-task");
    addButton.textContent = "+";

    function addNewTask() {
      addTask(set);
    };

    addButton.addEventListener("click", addNewTask);
  })();

  const buttonDiv = elementBuilder("div", "button-div", set.projectElement);

  const sortByDueDateButton = (() => {
    if (set.project.taskArray.length > 1) {
      let sort = elementBuilder("button", "sort-button", buttonDiv);
      sort.textContent = "Sort by Due Date";

      function newSortedList() {
        let projectIndex = getPosition(set.projectElement);
        let sortedTasks = sortByDueDate(set.project.taskArray);
        set.project.taskArray = sortedTasks;
        set.deleteList();
        let sortedProject = projectBuilder(set.project);
        projectDiv.insertBefore(
          sortedProject.projectElement,
          projectDiv.children[projectIndex + 1]
        );
        taskButtons(sortedProject);
        themeCheck()
      }

      sort.addEventListener("click", newSortedList);
    }
  })();

  const sortByPriorityButton = (() => {
    if (set.project.taskArray.length > 1) {
      let sort = elementBuilder("button", "sort-by-priority", buttonDiv);
      sort.textContent = "Sort by Priority";
      
      function newProjectSet() {
        let projectIndex = getPosition(set.projectElement);
        let sortedTasks = set.sortByPriority();
        set.taskArray = sortedTasks;
        set.deleteList();
        let sortedProject = projectBuilder(set.project);

        projectDiv.insertBefore(
          sortedProject.projectElement,
          projectDiv.children[projectIndex + 1]
        );
        taskButtons(sortedProject);
        themeCheck();
      };
      sort.addEventListener("click", newProjectSet);
    };
  })();

  const removeTaskButton = (() => {
    let projectElements = Array.from(set.projectElement.children);
    for (let i = 0; i < projectElements.length; i++) {
      if (projectElements[i].classList.contains("task")) {
        let taskDiv = projectElements[i];
        let topDiv = taskDiv.children[0];
        let removeTaskElement = taskDiv.firstChild;
        for (let y = 0; y < set.project.taskArray.length; y++) {
          if (
            topDiv.children[1].textContent === set.project.taskArray[y].title
          ) {
            let taskTitle = set.project.taskArray[y].title
            
            function taskRemover() {
              for (let i = 0; i < fetchedList.length; i++) {
                if (fetchedList[i].title === set.project.title) {
                  for (let z = 0; z < fetchedList[i].taskArray.length; z++) {
                    if (fetchedList[i].taskArray[z].title === taskTitle) {
                      fetchedList[i].taskArray.splice(z, 1);
                      store(fetchedList);
                      break
                    };
                  };
                };
              }
              let projectIndex = getPosition(set.projectElement);
              set.removeTask(set.project.taskArray[y]);
              set.deleteList();
              let sortedProject = projectBuilder(set.project);
              taskButtons(sortedProject);
              themeCheck()
              projectDiv.insertBefore(
                sortedProject.projectElement,
                projectDiv.children[projectIndex]
              );
            };
            removeTaskElement.addEventListener("click", taskRemover);
          };
        };
      };
    };
  })();

  const warningMessage = () => {
    for (let i = 0; i < body.children.length; i++) {
      if (i < body.children.length) {
        body.children[i].classList.add("transparent")
      }
    }
    let warningElement = elementBuilder("div", "warning", body);
    let warningMessage = elementBuilder("p", "warning-message", warningElement);
    warningMessage.textContent = "Are you sure you want to remove this entire project?"
    let container = elementBuilder("div", "warning-buttons-container", warningElement)
    let confirm = elementBuilder("button", "warning-buttons", container);
    confirm.textContent = "Remove Project";
    let cancel = elementBuilder("button", "warning-buttons", container);
    cancel.textContent = "Cancel"
    themeCheck()

    function cancelProj() {
      removeTransparent(body.children)
      warningElement.remove();
    }
    cancel.addEventListener("click", cancelProj);

    function removeProj() {
      removeTransparent(body.children)
      for (let i = 0; i < fetchedList.length; i++) {
        if (fetchedList[i].title === set.project.title) {
          fetchedList.splice(i, 1);
          store(fetchedList)
          break
        }
      }
      set.deleteList()
      warningElement.remove();
    }
    confirm.addEventListener("click", removeProj);
  };

  const deleteButton = (() => {
    let del = elementBuilder("button", "top-buttons", topButtonDiv);
    del.classList.add("delete-button");
    del.textContent = "x";
    del.addEventListener("click", warningMessage);
  })();
};

function applyButtons(taskArray) {
  for (let i = 0; i < taskArray.length; i++) {
    taskButtons(taskArray[i]);
  }
}

const projectButton = (() => {
  function addNewProject() {
    addProject();
  }
  sidebar.newProject.addEventListener("click", addNewProject);
})();

const changeView = (() => {
  let viewElement = sidebar.changeView;

  function minAll() {
    let projContainer = document.getElementsByClassName("project-container")[0];
    let projects = Array.from(projContainer.children);
    for (let i = 0; i < projects.length; i++) {
      let project = projects[i];
      let projComponents = Array.from(project.children);
      for (let y = 0; y < projComponents.length; y++) {
        if ((y > 2) && (y !== projComponents.length - 1)) {
          let task = projComponents[y];
          task.classList.add("compact");
          let taskElements = Array.from(task.children);
          for (let x = 0; x <  taskElements.length; x++) {
            if ((x !== 0) && (x !== 2)) {
              console.log(taskElements[x])
              taskElements[x].classList.add("minimize");
            };
          };
          function maxAll() {
            let compactTasks = Array.from(document.getElementsByClassName("compact"));
            let hiddenElements = Array.from(document.getElementsByClassName("minimize"));
            for (let i = 0; i < compactTasks.length; i++) {
              compactTasks[i].classList.remove("compact");
            };
            for (let i = 0; i < hiddenElements.length; i++) {
              hiddenElements[i].classList.remove("minimize");
            };
            viewElement.removeEventListener("click", maxAll);
            viewElement.addEventListener("click", minAll); 
          };

        viewElement.removeEventListener("click", minAll);
        viewElement.addEventListener("click", maxAll); 
        };
      };
    };
  };

  viewElement.addEventListener("click", minAll); 
})();

export { taskButtons, applyButtons, addTransparent, removeTransparent };

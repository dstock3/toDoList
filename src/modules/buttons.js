/* eslint-disable no-inner-declarations */
/* eslint-disable no-unused-vars */
import { elementBuilder, getPosition, projectDiv } from "./elements";
import { sortByDueDate } from "./date";
import { projectBuilder } from "./taskElements";
import { addTask, addProject, allProjects } from "./projectCreator";
import { sidebar } from "./sidebar";

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
    }

    addButton.addEventListener("click", addNewTask);
  })();

  const minimize = (() => {
    if (set.project.taskArray.length > 0) {
      let minButton = elementBuilder("button", "top-buttons", topButtonDiv);
      minButton.classList.add("min-button");
      minButton.textContent = "-";

      function minProject() {
        minButton.textContent = "□";
        set.minTasks();

        minButton.addEventListener("click", function () {
          let projectIndex = getPosition(set.projectElement);
          set.deleteList();
          let originalIndex = allProjects.masterList.indexOf(set);
          let maxProject = projectBuilder(set.project);
          allProjects.masterList.push(maxProject);
          projectDiv.insertBefore(
            maxProject.projectElement,
            projectDiv.children[projectIndex]
          );
          taskButtons(maxProject);
        });
      }

      minButton.addEventListener("click", minProject);
    }
  })();

  const buttonDiv = elementBuilder("div", "button-div", set.projectElement);

  const sortByDueDateButton = (() => {
    if (set.project.taskArray.length > 1) {
      let sort = elementBuilder("button", "sort-button", buttonDiv);
      sort.textContent = "Sort by Due Date";

      let projectIndex = getPosition(set.projectElement);

      function newSortedList() {
        let sortedTasks = sortByDueDate(set.project.taskArray);
        set.project.taskArray = sortedTasks;
        set.deleteList();
        let sortedProject = projectBuilder(set.project);
        projectDiv.insertBefore(
          sortedProject.projectElement,
          projectDiv.children[projectIndex]
        );
        taskButtons(sortedProject);
      }

      sort.addEventListener("click", newSortedList);
    }
  })();

  const sortByPriorityButton = (() => {
    if (set.project.taskArray.length > 1) {
      let sort = elementBuilder("button", "sort-by-priority", buttonDiv);
      sort.textContent = "Sort by Priority";
      let projectIndex = getPosition(set.projectElement);
      set.sortByPriority();

      function newProjectSet() {
        set.deleteList();
        let sortedProject = projectBuilder(set.project);
        allProjects.masterList.push(sortedProject);
        projectDiv.insertBefore(
          sortedProject.projectElement,
          projectDiv.children[projectIndex]
        );
        taskButtons(sortedProject);
      }
      sort.addEventListener("click", newProjectSet);
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
          if (
            topDiv.children[1].textContent === set.project.taskArray[y].title
          ) {
            function taskRemover() {
              let projectIndex = getPosition(set.projectElement);
              set.removeTask(set.project.taskArray[y]);
              set.deleteList();
              let sortedProject = projectBuilder(set.project);
              allProjects.masterList.push(sortedProject);
              projectDiv.insertBefore(
                sortedProject.projectElement,
                projectDiv.children[projectIndex]
              );
              taskButtons(sortedProject);
            }
            removeTaskElement.addEventListener("click", taskRemover);
          }
        }
      }
    }
  })();

  const deleteButton = (() => {
    let del = elementBuilder("button", "top-buttons", topButtonDiv);
    del.classList.add("delete-button");
    del.textContent = "x";

    del.addEventListener("click", set.deleteList);
  })();
};

function applyButtons(taskArray) {
  for (let i = 0; i < taskArray.length; i++) {
    taskButtons(taskArray[i]);
  }
}

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

const projectButton = (() => {
  function addNewProject() {
    addProject();
  }
  sidebar.newProject.addEventListener("click", addNewProject);
})();

const changeView = (() => {
  let viewElement = sidebar.changeView;

  function minAll() {
    for (let i = 0; i < allProjects.masterList.length; i++) {
      let set = allProjects.masterList[i];
      if (set.project.taskArray.length > 0) {
        set.minTasks();

        viewElement.addEventListener("click", function () {
          let projectIndex = getPosition(set.projectElement);
          let originalIndex = allProjects.masterList.indexOf(set);
          let maxProject = projectBuilder(set.project);
          set.deleteList();
          allProjects.masterList.splice(originalIndex, 1);
          allProjects.masterList.push(maxProject);
          projectDiv.insertBefore(
            maxProject.projectElement,
            projectDiv.children[projectIndex]
          );
          taskButtons(maxProject);
        });
      }
    }
  }
  viewElement.addEventListener("click", minAll);
})();

export { taskButtons, applyButtons, addTransparent, removeTransparent };

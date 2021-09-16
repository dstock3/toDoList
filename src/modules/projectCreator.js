/* eslint-disable no-unused-vars */
import { allProjects } from "../index"
import { project, toDo } from "./objectBuilder";
import { elementBuilder, getPosition, body, projectDiv } from "./elements";
import { taskBuilder, projectHeader, projectBuilder } from "./taskElements";
import { addTransparent, taskButtons, removeTransparent } from "./buttons";
import { sidebar, notif, themeCheck } from "./sidebar";
import { validation, validateProj } from "./validation";
import { store } from "./store";

function newInput(
  parent,
  promptType,
  divClass,
  labelClass,
  labelContent,
  inputClass,
  placeholder,
  inputId,
  nameAt
) {
  let newDiv = elementBuilder("div", promptType, parent);
  newDiv.classList.add(divClass);
  let divLabel = elementBuilder("label", labelClass, newDiv);
  divLabel.textContent = labelContent;
  let divInput = elementBuilder("input", inputClass, newDiv);
  divInput.setAttribute("placeholder", placeholder);
  divInput.id = inputId;
  divInput.setAttribute("name", nameAt);
  return newDiv;
}

const addTask = (set) => {
  let project = JSON.stringify(set.project);
  let projectElement = set.projectElement;

  const taskPrompt = (() => {
    let prompt = elementBuilder("div", "task-prompt", body);

    let promptHead = elementBuilder("h3", "prompt-head", prompt);
    promptHead.textContent = "Create a Task";

    let titleDiv = newInput(
      prompt,
      "new-task",
      "title-div",
      "name-label",
      "Task: ",
      "title-input",
      "Enter a Task!",
      "title",
      "title"
    );
    let descDiv = newInput(
      prompt,
      "new-task",
      "description-div",
      "desc-label",
      "Description: ",
      "desc-input",
      "Write a brief description.",
      "description",
      "desc"
    );
    let dueDiv = newInput(
      prompt,
      "new-task",
      "due-div",
      "due-label",
      "Due Date: ",
      "due-input",
      "MM/DD/YYYY",
      "due",
      "due"
    );
    let priorityDiv = newInput(
      prompt,
      "new-task",
      "priority-div",
      "priority-label",
      "Priority: ",
      "priority-input",
      "Enter a number 1-5",
      "priority",
      "priority"
    );
    let notesDiv = newInput(
      prompt,
      "new-task",
      "notes-div",
      "notes-label",
      "Notes: ",
      "notes-input",
      "Write your notes here.",
      "notes",
      "notes"
    );

    let children = body.children;
    addTransparent(children);

    let buttonDiv = elementBuilder("div", "create-task-buttons", prompt);

    let createButton = elementBuilder("button", "create-task", buttonDiv);
    createButton.textContent = "Create Task";

    let cancelButton = elementBuilder("button", "cancel", buttonDiv);
    cancelButton.textContent = "Cancel";

    function exit() {
      removeTransparent(children);
      prompt.remove();
    }

    cancelButton.addEventListener("click", exit);

    function createTask() {
      let title = document.getElementById("title").value;
      let titlePair = [title, titleDiv];
      let description = document.getElementById("description").value;
      let descPair = [description, descDiv];
      let enteredDate = document.getElementById("due").value;
      let datePair = [enteredDate, dueDiv];
      let priority = document.getElementById("priority").value;
      let priorityPair = [priority, priorityDiv];
      let notes = document.getElementById("notes").value;
      let notePair = [notes, notesDiv];
      let status = "In Progress";
      let obj = { titlePair, descPair, datePair, priorityPair, notePair };

      let validArray = validation(obj);
      let isValid = validArray[0];

      if (isValid) {
        let dueDate = validArray[1];
        let newTask = toDo(
          title,
          project,
          description,
          enteredDate,
          dueDate,
          priority,
          notes,
          status
        );

        set.project.taskArray.unshift(newTask);
        notif(newTask);
        let taskElements = taskBuilder(newTask, projectElement);

        let projectIndex = getPosition(projectElement);
        projectElement.remove();
        let updatedProject = projectBuilder(set.project);

        allProjects.masterList.push(updatedProject);
        projectDiv.insertBefore(
          updatedProject.projectElement,
          projectDiv.children[projectIndex]
        );
        taskButtons(updatedProject);
        themeCheck()

        exit();
      } else {
        createButton.addEventListener("click", createTask);
      }
    }

    createButton.addEventListener("click", createTask);
  })();
};

const addProject = () => {
  const projectPrompt = (() => {
    let prompt = elementBuilder("div", "project-prompt", body);

    let promptHead = elementBuilder("h3", "prompt-head", prompt);
    promptHead.textContent = "Start a New Project";

    let titleDiv = newInput(
      prompt,
      "new-task",
      "title-div",
      "name-label",
      "Task: ",
      "title-input",
      "Enter a title for your new project.",
      "project-title",
      "title"
    );
    let descDiv = newInput(
      prompt,
      "new-task",
      "description-div",
      "desc-label",
      "Description: ",
      "desc-input",
      "Include a brief description.",
      "project-description",
      "desc"
    );

    let children = body.children;
    addTransparent(children);

    let buttonDiv = elementBuilder("div", "create-task-buttons", prompt);

    let createButton = elementBuilder("button", "create-task", buttonDiv);
    createButton.textContent = "Create Project";

    let cancelButton = elementBuilder("button", "cancel", buttonDiv);
    cancelButton.textContent = "Cancel";

    function exit() {
      removeTransparent(children);
      prompt.remove();
    }

    cancelButton.addEventListener("click", exit);

    function createProject() {
      let title = document.getElementById("project-title").value;
      let titlePair = [title, titleDiv];
      let description = document.getElementById("project-description").value;
      let descPair = [description, descDiv];
      let obj = { titlePair, descPair };

      let isValid = validateProj(obj);

      if (isValid) {
        let newProject = project(title, description, []);
        allProjects.projectList.unshift(newProject);
        store(allProjects.projectList)

        let projectSet = projectBuilder(newProject);
        taskButtons(projectSet);
        allProjects.masterList.push(projectSet);
        themeCheck();

        exit();
      } else {
        createButton.addEventListener("click", createProject);
      }
    }
    createButton.addEventListener("click", createProject);
  })();
};

export { projectHeader, projectBuilder, addTask, addProject };

/* eslint-disable no-unused-vars */
import "./style.css";
import { project } from "./modules/objectBuilder";
import { projectBuilder, allProjects } from "./modules/projectCreator";
import { applyButtons } from "./modules/buttons";
import { notif } from "./modules/sidebar";
const start = (() => {
  const newTask = JSON.parse(localStorage.getItem('newTask'));
  if (newTask !== null) {
    let projObj = JSON.parse(newTask.project);
    notif(newTask);
    projObj.taskArray.push(newTask)
    const newProject = project(
      projObj.title,
      projObj.description,
      projObj.taskArray
    )
    const newProjSet = projectBuilder(newProject);
    allProjects.masterList.push(newProjSet);
    applyButtons(allProjects.masterList);
    localStorage.removeItem('newTask');
    let newTaskObj = JSON.stringify(newTask)
    localStorage.setItem("newTask", newTaskObj);
  }

  if (newTask === null) {
    const defaultProject = project(
      "New Project",
      "Add a task below and start tracking your project!",
      []
    );
    const defaultProjectSet = projectBuilder(defaultProject);
    allProjects.masterList.push(defaultProjectSet);
    applyButtons(allProjects.masterList);
  }
  return { allProjects };
})();

export { allProjects };

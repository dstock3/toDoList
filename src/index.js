/* eslint-disable no-unused-vars */
import "./style.css";
import { project } from "./modules/objectBuilder";
import { projectBuilder, allProjects } from "./modules/projectCreator";
import { applyButtons } from "./modules/buttons";

const start = (() => {
  const newTask = JSON.parse(localStorage.getItem('newTask'));
  let project = JSON.parse(newTask.project);
  console.log(project)

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

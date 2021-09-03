/* eslint-disable no-unused-vars */
import './style.css';
import { project, projectTracker } from './task.js'
import { projectSize, projectBuilder, applyButtons } from'./projectElements.js'

const start = (() => {
  let projects = projectTracker()
  const defaultProject = project("New Project", "Add a task below and start tracking your project!", []);
  const defaultProjectSet = projectBuilder(defaultProject);
  projects.masterList.push(defaultProjectSet);
  applyButtons(projects.masterList);
  let projectDiv = document.getElementsByClassName("project-container")[0];
  projectSize(projectDiv)

  return { projects }
})();

let projects = start.projects

export {
  projects
}



/* eslint-disable no-unused-vars */
import './style.css';
import { project, projectTracker } from './task.js'
import { projectBuilder, applyButtons } from'./projectElements.js'

const start = (() => {
  let projects = projectTracker()
  const defaultProject = project("New Project", "Add a task below amd start tracking your project!", []);
  const defaultProjectSet = projectBuilder(defaultProject);
  projects.masterList.push(defaultProjectSet);
  applyButtons(projects.masterList);

  return { projects }
})();

let projects = start.projects

export {
  projects
}



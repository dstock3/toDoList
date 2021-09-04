/* eslint-disable no-unused-vars */
import './style.css';
import { project, projectTracker } from './task.js'
import { projectBuilder, applyButtons } from'./projectElements.js'
import { reminders } from './date'

const start = (() => {
  let projects = projectTracker()
  const defaultProject = project("New Project", "Add a task below and start tracking your project!", []);
  const defaultProjectSet = projectBuilder(defaultProject);
  projects.masterList.push(defaultProjectSet);
  applyButtons(projects.masterList);

  reminders(defaultProject.taskArray)

  return { projects }
})();

let projects = start.projects



export {
  projects
}



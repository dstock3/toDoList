/* eslint-disable no-unused-vars */
import "./style.css";
import { taskBuilder } from "./modules/taskElements";
import { project, projectTracker } from "./modules/objectBuilder";
import { projectBuilder } from "./modules/projectCreator";
import { applyButtons } from "./modules/buttons";
import { notif } from "./modules/sidebar";
import { store, checkList, getTheme } from "./modules/store";

const allProjects = projectTracker();

const start = (() => {
  let fetchedList = checkList()
  if (fetchedList.length === 0) {
    const defaultProject = project(
      "New Project",
      "Add a task below and start tracking your project!",
      []
    );
    getTheme()
    allProjects.projectList.unshift(defaultProject);
    store(allProjects.projectList)
    const defaultProjectSet = projectBuilder(defaultProject);
    allProjects.masterList.push(defaultProjectSet);
    applyButtons(allProjects.masterList);
    
  } else {
    for (let i = 0; i < fetchedList.length; i++) {
      let project = fetchedList[i];
      let newProjSet = projectBuilder(project);
      getTheme()
      let tasks = project.taskArray;
      for (let y = 0; y < tasks.length; y++) {
        notif(tasks[i]);
      }
      allProjects.masterList.push(newProjSet);
      applyButtons(allProjects.masterList);
    };
  };
  
})();

export { allProjects } 


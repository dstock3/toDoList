/* eslint-disable no-unused-vars */
import "./style.css";
import { taskBuilder } from "./modules/taskElements";
import { project, projectTracker } from "./modules/objectBuilder";
import { projectBuilder } from "./modules/projectCreator";
import { applyButtons } from "./modules/buttons";
import { notif } from "./modules/sidebar";
import { store, checkList } from "./modules/store";

const start = () => {
  let fetchedList = checkList()
  if (fetchedList.length === 0) {
    const allProjects = projectTracker();
    const defaultProject = project(
      "New Project",
      "Add a task below and start tracking your project!",
      []
    );
    allProjects.projectList.unshift(defaultProject);
    store(allProjects.projectList)
    const defaultProjectSet = projectBuilder(defaultProject);
    allProjects.masterList.push(defaultProjectSet);
    applyButtons(allProjects.masterList);
    return allProjects
  } else {
    for (let i = 0; i < fetchedList.length; i++) {
      let project = fetchedList[i];
      let newProjSet = projectBuilder(project);
      let tasks = project.taskArray;
      for (let y = 0; y < tasks.length; i++) {
        let newTask = tasks[i];
        notif(newTask);
        taskBuilder(newTask, newProjSet.projectElement);
      }
      allProjects.masterList.push(newProjSet);
      applyButtons(allProjects.masterList);
      return allProjects
    }
  }
}

const allProjects = start()
console.log(allProjects)

export { allProjects } 


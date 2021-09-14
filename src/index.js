/* eslint-disable no-unused-vars */
import "./style.css";
import { project, projectTracker } from "./modules/objectBuilder";
import { projectBuilder, allProjects } from "./modules/projectCreator";
import { applyButtons } from "./modules/buttons";
import { notif } from "./modules/sidebar";

const start = (() => {
  const allProjects = projectTracker();
  if (typeof allProjects.projectList[0] == 'undefined') {
    const defaultProject = project(
      "New Project",
      "Add a task below and start tracking your project!",
      []
    );
    allProjects.projectList.unshift(defaultProject);
    
    const defaultProjectSet = projectBuilder(defaultProject);
    allProjects.masterList.push(defaultProjectSet);
    applyButtons(allProjects.masterList);
  } else {
    const fetchedList = localStorage.getItem("newArray");
    for (let i = 0; i < fetchedList.length; i++) {
      const newProjSet = projectBuilder(fetchedList[i]);
      allProjects.masterList.push(newProjSet);
      applyButtons(allProjects.masterList);
    }
  }

  const newArray = JSON.stringify(allProjects.projectList)
  localStorage.setItem("newArray", newArray)
    
  return { allProjects };
})();

export { allProjects };

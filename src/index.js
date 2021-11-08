/* eslint-disable no-unused-vars */
import "./style.css";
import { projectTracker, createDefaultProj } from "./modules/objectBuilder";
import { projectBuilder } from "./modules/projectCreator";
import { applyButtons, taskButtons } from "./modules/buttons";
import { notif, addNoNotifMessage } from "./modules/sidebar";
import { store, checkList, getTheme } from "./modules/store";
import { setTheme } from "./modules/themes";

window.document.title = "OnTask"

const allProjects = projectTracker();

function buildProjects(projList) {
  for (let i = 0; i < projList.length; i++) {
    let project = projList[i];
    let newProjSet = projectBuilder(project);
    let tasks = project.taskArray;
    for (let y = 0; y < tasks.length; y++) {
      notif(tasks[y]);
    };
    allProjects.masterList.push(newProjSet);
  };
  applyButtons(allProjects.masterList);
  getTheme();
}

const start = (() => {
  let fetchedList = checkList();
  if (fetchedList.length === 0) {
    let defaultProj = createDefaultProj();
    allProjects.projectList.unshift(defaultProj);
    store(allProjects.projectList);
    const defaultProjectSet = projectBuilder(defaultProj);
    taskButtons(defaultProjectSet);
    setTheme("classic", "classicComp");
    addNoNotifMessage()
  } else {
    buildProjects(fetchedList);
    addNoNotifMessage()
  };
})();

export { allProjects } 


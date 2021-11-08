/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-inner-declarations */
import { elementBuilder, body, toggleHide } from "./elements";
import { deadline } from "./date";
import { tips, randomGenerator } from "./tips"
import { themes, setTheme } from "./themes"
import { checkList, getTheme } from './store'
import { projectBuilder } from './projectCreator'
import { applyButtons } from "./buttons";

const mobileView = window.matchMedia("(max-width: 1100px)");

function removeListElements(notifBar) {
  let barElements = Array.from(notifBar.children)
  for (let i = 0; i < barElements.length; i++) {
    let element = barElements[i];
    element.remove();
  };
};

function removeAllProjects() {
  let projects = document.getElementsByClassName("project-container")[0]
  let projChildren = Array.from(projects.children);
  for (let y = 0; y < projChildren.length; y++) {
    projChildren[y].remove()
  };
};

function addNoNotifMessage() {
  let notifBar = document.getElementsByClassName("notif-bar")[0];
  let notifs = Array.from(notifBar.children);
  if (notifs.length === 0) {
    let noNotif = elementBuilder("div", "notif", notifBar);
    noNotif.textContent = "No New Notifications"
    noNotif.id = "no-notif"
  };
};

function addProjects(notifBar) {
  let fetchedList = checkList();

  for (let i = 0; i < fetchedList.length; i++) {
    let project = fetchedList[i];
    let projContainer = elementBuilder("div", "proj-container", notifBar);
    let projTitle = elementBuilder("div", "proj-title", projContainer);
    projTitle.textContent = project.title;

    function showThisProj() {
      removeAllProjects()
      let newProjSet = projectBuilder(project);
      let tasks = project.taskArray;
      applyButtons([newProjSet]);
      getTheme();

      if (mobileView.matches) {
        newProjSet.projectElement.style.width = "100%";
      } else {
        newProjSet.projectElement.style.width = "30%";
      };
    };

    projContainer.addEventListener("click", showThisProj)
  };
};

const sidebar = (() => {
  const element = elementBuilder("div", "sidebar", body);

  const minSideBarButton = elementBuilder("div", "min-sidebar-button", element);
  minSideBarButton.textContent = "-"

  let projectContainer = document.getElementsByClassName("project-container")[0];
  
  function maximizeSidebar() {
    element.classList.remove("min-sidebar");
    minSideBarButton.textContent = "-";

    if (mobileView.matches) {
      projectContainer.style.left = "0";
      projectContainer.style.width = "98%";
      barContainer.style.margin = "5% 0 15% 0"
    } else {
      projectContainer.style.left = "7.5%";
      projectContainer.style.width = "85%";
    }

    minSideBarButton.style.alignSelf = null;
    minSideBarButton.style.margin = null;
    minSideBarButton.style.paddingBottom = "0";
    minSideBarButton.addEventListener("click", minimizeSideBar)
  };

  function minimizeSideBar() {
    element.classList.add("min-sidebar");
    projectContainer.style.left = "0";
    projectContainer.style.width = "98%";
    minSideBarButton.textContent = "□";

    if (mobileView.matches) {
      minSideBarButton.style.alignSelf = "flex-end";
      minSideBarButton.style.margin = null;
      barContainer.style.margin = "0";
    } else {
      minSideBarButton.style.alignSelf = "center";
      minSideBarButton.style.margin = "15% 0";
    }
    minSideBarButton.removeEventListener("click", minimizeSideBar);
    minSideBarButton.addEventListener("click", maximizeSidebar);
  }
  minSideBarButton.addEventListener("click", minimizeSideBar)

  const headContainer = elementBuilder("div", "head-container", element);
  const head = elementBuilder("h1", "sidebar-head", headContainer);
  head.textContent = "OnTask";

  const sideButtons = elementBuilder(
    "div",
    "side-button-container",
    headContainer
  );

  const newProject = elementBuilder("button", "side-buttons", sideButtons);
  newProject.textContent = "New Project";
  newProject.id = "new-project";

  const changeView = elementBuilder("button", "side-buttons", sideButtons);
  changeView.id = "view-button";
  changeView.textContent = "Change View";

  const barContainer = elementBuilder("div", "bar-container", element);
  const notifHeadContainer = elementBuilder(
    "div",
    "notif-head-container",
    barContainer
  );
  const showNotifs = elementBuilder("div", "notif-button", notifHeadContainer);
  showNotifs.textContent = "N";

  const showProjects = elementBuilder(
    "div",
    "notif-button",
    notifHeadContainer
  );

  const showThemes = elementBuilder("div", "notif-button", notifHeadContainer);
  showThemes.textContent = "T"
  showProjects.textContent = "P";
  showProjects.classList.add("show-projects")

  const notifBar = elementBuilder("div", "notif-bar", barContainer);
  notifBar.classList.add("new-notifications");

  function generateNotifs() {
    if (notifBar.classList.contains("themes")) {
      notifBar.classList.remove("themes");
    } else if (notifBar.classList.contains("projects")) {
      notifBar.classList.remove("projects");
    };

    notifBar.classList.add("new-notifications");

    removeListElements(notifBar)
    let fetchedList = checkList();

    for (let i = 0; i < fetchedList.length; i++) {
      let project = fetchedList[i];
      let tasks = project.taskArray;
      for (let y = 0; y < tasks.length; y++) {
        notif(tasks[y]);
      };
    };
    let notifNum = document.getElementsByClassName("notif-num")[0];
    if (notifNum) {
      notifNum.remove();
    }
    addNoNotifMessage()
    getTheme();
  };

  showNotifs.addEventListener("click", generateNotifs);

  function populateProjects() {
    if (notifBar.classList.contains("themes")) {
      notifBar.classList.remove("themes");
    } else if (notifBar.classList.contains("new-notifications")) {
      notifBar.classList.remove("new-notifications");
    };
    notifBar.classList.add("projects");
    removeListElements(notifBar);
    addProjects(notifBar);

    if (!(document.getElementsByClassName("see-all-proj")[0])) {
      let seeAllProj = elementBuilder("div", "see-all-proj", notifBar);
      seeAllProj.textContent = "See All Projects";
  
      function showAllProjects() {
        removeAllProjects();
        let fetchedList = checkList();
        for (let i = 0; i < fetchedList.length; i++) {
          let project = fetchedList[i];
          let newProjSet = projectBuilder(project);
          let tasks = project.taskArray;
          applyButtons([newProjSet]);
        };
        getTheme();
      };
      seeAllProj.addEventListener("click", showAllProjects);
    };
    
    function newNotifs() {
      checkNotifs();
    };
    showNotifs.addEventListener("click", newNotifs);
  };

  showProjects.addEventListener("click", populateProjects);

  function themeOptions() {
    if (notifBar.classList.contains("projects")) {
      notifBar.classList.remove("projects");
    } else if (notifBar.classList.contains("new-notifications")) {
      notifBar.classList.remove("new-notifications");
    };
    notifBar.classList.add("themes");
    removeListElements(notifBar)
    elementBuilder("ul", "themes-list", notifBar);
    themes();
  }

  showThemes.addEventListener("click", themeOptions);
  notifButton();

  const tipsContainer = document.createElement("div")
  tipsContainer.classList.add("tips-container");

  if (mobileView.matches) {
    body.appendChild(tipsContainer);
    const tipHead = elementBuilder("h3", "tip-head", tipsContainer);
    tipHead.textContent = "Productivity Tips"

    const tipContent = document.createElement("div");
    tipContent.classList.add("tip");
    const tip = randomGenerator(tips);
    tipContent.textContent = tip;
    tipsContainer.appendChild(tipContent);
  } else {
    element.appendChild(tipsContainer);

    tipsContainer.classList.add("min-tips");
    const tipHead = elementBuilder("h3", "tip-head", tipsContainer);
    tipHead.textContent = "Productivity Tips"
  
    const minTipsButton = elementBuilder("div", "min-tips-button", tipsContainer);
    minTipsButton.textContent = "□"
  
    function maximize() {
      tipsContainer.classList.remove("min-tips");
      minTipsButton.textContent = "-";
      minTipsButton.removeEventListener("click", maximize);
      minTipsButton.addEventListener("click", minimize);
    };
  
    function minimize() {
      tipsContainer.classList.add("min-tips");
      minTipsButton.textContent = "□";
      minTipsButton.addEventListener("click", maximize);
    };
  
    minTipsButton.addEventListener("click", maximize);
  
    const tipContent = document.createElement("div");
    tipContent.classList.add("tip");
    const tip = randomGenerator(tips);
    tipContent.textContent = tip;
    tipsContainer.appendChild(tipContent);
  };

  return {
    element,
    newProject,
    changeView,
    notifBar,
    showNotifs,
    notifHeadContainer,
    tipsContainer,
    populateProjects,
  };
})();

function notifNum() {
  let notifs = document.getElementsByClassName("notif");
  for (let i = 0; i < notifs.length; i++) {
    if (notifs[i].id !== "no-notif") {
      let num = notifs.length;
      let previousNotifs = document.getElementsByClassName("notif-num")[0];
      if (previousNotifs !== undefined) {
        previousNotifs.remove();
      }
      if (num > 0) {
        let newNotifs = elementBuilder(
          "div",
          "notif-num",
          sidebar.notifHeadContainer
        );
        newNotifs.textContent = num;
      }
    }
  }
}

function noNotifChecker() {
  let notif = document.getElementById("no-notif");
  if (notif) {
    let notifContainer = Array.from(sidebar.notifBar.children)[0];
    notifContainer.remove();
  }
}

function deadlineNotif(task) {
  let deadlineMessage = deadline(task.enteredDate);

  if (
    deadlineMessage.indexOf("day") > 0 ||
    deadlineMessage.indexOf("hours") > 0
  ) {
    if (sidebar.notifBar.children.length < 7) {
      let newContainer = elementBuilder(
        "div",
        "notif-container",
        sidebar.notifBar
      );
      let newNotif = elementBuilder("div", "notif", newContainer);
      newNotif.id = "deadline";
      let notifTitle = elementBuilder("div", "notif-title", newNotif);
      notifTitle.style.fontWeight = "bold";
      notifTitle.textContent = `${task.title}: `
      let notifDate = elementBuilder("div", "notif-date", newNotif);
      notifDate.textContent =  `${deadlineMessage}`;
      noNotifChecker();
      return deadlineMessage;
    };
  } else {
    "No New Notifications";
  };
}

function notifButton() {
  let notifs = document.getElementsByClassName("notif");
  for (let i = 0; i < notifs.length; i++) {
    let notif = notifs[i];
    let parent = notif.parentNode;
    if (notif.parentNode.children.length === 1 && notif.id !== "no-notif") {
      let button = elementBuilder("div", "remove-notif", parent);
      button.textContent = "X";
      function removeNotif() {
        parent.remove();
        let previousNotif = document.getElementsByClassName("notif-num")[0];
        if (previousNotif !== undefined) {
          notifNum();
        }
        if (notifs.length === 0) {
          const newNotifContainer = elementBuilder(
            "div",
            "notif-container",
            sidebar.notifBar
          );
          newNotifContainer.id = "none";
          const noNotif = elementBuilder("p", "notif", newNotifContainer);
          noNotif.id = "no-notif";
          noNotif.textContent = "No New Notifications";
          previousNotif.remove();
        }
      }
      button.addEventListener("click", removeNotif);
    }
  }
}

function checkNotifs() {
  if (sidebar.notifBar.children.length > 0) {
    if (sidebar.notifBar.classList.contains("hidden")) {
      toggleHide(sidebar.notifBar);
    }
  }
}

function notif(newTask) {
  if (sidebar.notifBar.classList.contains("new-notifications")) {
    deadlineNotif(newTask);
    notifButton();
    checkNotifs();
    notifNum();
  };
};

function themeCheck() {
  let color = sidebar.element.id;
  let comp = sidebar.tipsContainer.id;
  setTheme(color, comp)
}

export { sidebar, notif, themeCheck, notifButton, addProjects, addNoNotifMessage };

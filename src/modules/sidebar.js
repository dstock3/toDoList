/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-inner-declarations */
import { elementBuilder, body, toggleHide } from "./elements";
import { today, deadline } from "./date";
import { tips, randomGenerator } from "./tips"
import { themes, setTheme } from "./themes"
import { checkList } from './store'

function removeListElements(notifBar) {
  let barElements = Array.from(notifBar.children)
  for (let i = 0; i < barElements.length; i++) {
    let element = barElements[i]
    element.remove()
  };
};

const sidebar = (() => {
  const element = elementBuilder("div", "sidebar", body);

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
  showNotifs.id = "show-notifs";
  showNotifs.textContent = "N";

  const showProjects = elementBuilder(
    "div",
    "notif-button",
    notifHeadContainer
  );
  showProjects.id = "show-projects";
  showProjects.textContent = "P";

  function populateProjects() {
    removeListElements(notifBar);

    let fetchedList = checkList();

    for (let i = 0; i < fetchedList.length; i++) {
      let project = fetchedList[i];
      let projContainer = elementBuilder("div", "proj-container", notifBar);
      let projTitle = elementBuilder("div", "proj-title", projContainer);
      projTitle.textContent = project.title;
      let projTasks = elementBuilder("div", "proj-tasks", projContainer);
      projTasks.textContent = `Tasks: ${project.taskArray.length}`
    };
  }

  showProjects.addEventListener("click", populateProjects);

  const notifBar = elementBuilder("div", "notif-bar", barContainer);
  const notifContainer = elementBuilder("div", "notif-container", notifBar);

  function hideNotif() {
    let notifNum = document.getElementsByClassName("notif-num")[0];
    if (notifNum !== undefined) {
      notifNum.remove();
    }
    toggleHide(notifBar);
    notifLogic(showNotifs);
  }

  showNotifs.addEventListener("click", hideNotif);
  const currentDate = elementBuilder("p", "notif", notifContainer);
  currentDate.id = "today";
  currentDate.textContent = today();
  notifButton();

  const themesButton = elementBuilder("button", "themes-button", sideButtons);
  themesButton.textContent = "Themes";
  const themesBar = elementBuilder("div", "themes-bar", barContainer);
  themesBar.classList.add("hidden");
  let themesList = elementBuilder("ul", "themes-list", themesBar)

  themes()

  const tipsContainer = elementBuilder("div", "tips-container", element);
  const tipHead = elementBuilder("h3", "tip-head", tipsContainer);
  tipHead.textContent = "Productivity Tips"
  const tipContent = document.createElement("div");
  tipContent.classList.add("tip");
  const tip = randomGenerator(tips);
  tipContent.textContent = tip;
  tipsContainer.appendChild(tipContent);

  return {
    element,
    newProject,
    changeView,
    notifBar,
    showNotifs,
    notifHeadContainer,
    notifContainer,
    today,
    tipsContainer,
  };
})();

function notifLogic(barButton) {
  if (sidebar.notifBar.classList.contains("hidden")) {
    barButton.setAttribute(
      "style",
      `border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;`
    );
  } else {
    barButton.setAttribute(
      "style",
      `border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;`
    );
  }
}

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
  if (notif !== null) {
    let notifContainer = notif.parentNode;
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
      let newNotif = elementBuilder("p", "notif", newContainer);
      newNotif.id = "deadline";
      newNotif.textContent = `${task.title}: ${deadlineMessage}`;
      noNotifChecker();
      return deadlineMessage;
    }
  } else {
    return "No New Notifications";
  }
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
  deadlineNotif(newTask);
  notifButton();
  checkNotifs();
  notifNum();
}

function themeCheck() {
  let color = sidebar.element.id;
  let comp = sidebar.tipsContainer.id;
  setTheme(color, comp)
}

export { sidebar, notif, themeCheck };

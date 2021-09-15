/* eslint-disable no-inner-declarations */
import { elementBuilder, body, toggleHide } from "./elements";
import { today, deadline } from "./date";
import { tips, randomGenerator } from "./tips"

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
  newProject.textContent = "Start New Project";
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

  function hideProjects() {
    //toggleHide(notifBar)
    notifLogic(showProjects);
  }

  showProjects.addEventListener("click", hideProjects);

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

  const themesDiv = elementBuilder("div", "themes", barContainer);
  const themesButton = elementBuilder("button", "themes-button", themesDiv);
  themesButton.textContent = "Themes";
  const themesBar = elementBuilder("div", "themes-bar", themesDiv);
  themesBar.classList.add("hidden");
  let themesList = elementBuilder("ul", "themes-list", themesBar)

  let themes = {
    "Light": "#ECECEC",
    "Dark": "#343434",  
    "Emerald": "#50C878", 
    "Artic": "#C6DAE9",
    "Ruby": "#E0115F",
    "Purple": "#800080",
    "Classic": "#82C1F8",
  };

  let themeMap = new Map();
  let themeArray = []
  let colorArray = []

  for (let key in themes) {
    let theme = elementBuilder("li", "theme-option", themesList);
    let themeText = elementBuilder("div", "theme-text", theme);
    themeArray.push(theme)
    let colorString = `${key}`;
    themeText.textContent = colorString
    let colorElement = elementBuilder("div", "color", theme);
    colorElement.setAttribute("style", `background-color: ${themes[key]};`)
    let color = colorString.charAt(0).toLowerCase() + colorString.slice(1);
    let comp = color + "Comp"
    let colorPair = { color, comp }
    colorArray.push(colorPair)
  }

  for(let i = 0; i < themeArray.length; i++){ 
    themeMap.set(themeArray[i], colorArray[i]); 
  }

  function setTheme(color, comp) {
    let projectElement = document.getElementsByClassName('project')[0];
    let sidebarElement = document.getElementsByClassName('sidebar')[0];
    let sideButtonContainer = document.getElementsByClassName('side-button-container')[0];
    let themesBar = document.getElementsByClassName('themes-bar')[0];
    let notifButtons = document.getElementsByClassName('notif-button');
    let notifBar = document.getElementsByClassName('notif-bar')[0];
    let notifContainer = document.getElementsByClassName('notif-container')[0];
    let removeNotifs = document.getElementsByClassName('remove-notif');
    let tipsContainer = sidebarElement.lastChild;
    let buttonElements = document.getElementsByTagName("button");
    let themeElementArray = [projectElement, sidebarElement];

    for (let i = 0; i < notifButtons.length; i++) {
      notifButtons[i].id = comp;
    }

    for (let i = 0; i < removeNotifs.length; i++) {
      removeNotifs[i].id = color;
    }

    for (let y = 0; y < buttonElements.length; y++) {
      themeElementArray.push(buttonElements[y]);
    }
    
    for (let i = 0; i < themeElementArray.length; i++) {
      themeElementArray[i].id = color;
    };
    sideButtonContainer.id = comp;
    tipsContainer.id = comp;
    notifBar.id = comp;
    notifContainer.id = comp;
    themesBar.id = comp;

    if (color === "light") {
      sidebarElement.setAttribute("style", "border-right: solid #ECECEC 3px;");
      tipsContainer.setAttribute("style", "border: solid #ECECEC 3px;");
    } else if (color === "dark") {
      sidebarElement.setAttribute("style", "border-right: solid #343434 3px;");
      tipsContainer.setAttribute("style", "border: solid #343434 3px;");
    } else if (color === "emerald") {
      sidebarElement.setAttribute("style", "border-right: solid #50C878 3px;");
      tipsContainer.setAttribute("style", "border: solid #50C878 3px;");
    } else if (color === "artic") {
      sidebarElement.setAttribute("style", "border-right: solid #C6DAE9 3px;");
      tipsContainer.setAttribute("style", "border: solid #C6DAE9 3px;");
    } else if (color === "ruby") {
      sidebarElement.setAttribute("style", "border-right: solid #E0115F 3px;");
      tipsContainer.setAttribute("style", "border: solid #E0115F 3px;");
    } else if (color === "purple") { 
      sidebarElement.setAttribute("style", "border-right: solid #800080 3px;");
      tipsContainer.setAttribute("style", "border: solid #800080 3px;");
    } else if (color === "classic") {
      sidebarElement.setAttribute("style", "border-right: solid #82C1F8 3px;");
      tipsContainer.setAttribute("style", "border: solid #82C1F8 3px;");
    }
  };

  for (let [themeElement, colorPair] of themeMap.entries()) {
    let color = colorPair[Object.keys(colorPair)[0]];
    let comp = colorPair[Object.keys(colorPair)[1]];
    function newTheme() {
      setTheme(color, comp);
    }      
    themeElement.addEventListener("click", newTheme);
  }
  
  function showThemes() {
    toggleHide(themesBar)
  };

  themesButton.addEventListener("click", showThemes)

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

export { sidebar, notif };

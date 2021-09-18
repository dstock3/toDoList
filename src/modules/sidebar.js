/* eslint-disable no-undef */
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

  const themesButton = elementBuilder("button", "themes-button", sideButtons);
  themesButton.textContent = "Themes";
  const themesBar = elementBuilder("div", "themes-bar", barContainer);
  themesBar.classList.add("hidden");
  let themesList = elementBuilder("ul", "themes-list", themesBar)

  let themes = {
    "Light": "#ECECEC",
    "Dark": "#343434",  
    "Emerald": "#50C878", 
    "Artic": "#C6DAE9",
    "Ruby": "#E4417F",
    "Purple": "#BB54CE;",
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
    tipsContainer,
  };
})();

function setTheme(color, comp) {
  let projects = document.getElementsByClassName('project');
  let taskElements = document.getElementsByClassName("task");
  let sidebarElement = document.getElementsByClassName('sidebar')[0];
  let sideButtonContainer = document.getElementsByClassName('side-button-container')[0];
  let themesBar = document.getElementsByClassName('themes-bar')[0];
  let notifButtons = document.getElementsByClassName('notif-button');
  let notifBar = document.getElementsByClassName('notif-bar')[0];
  let notifContainer = document.getElementsByClassName('notif-container')[0];
  let removeNotifs = document.getElementsByClassName('remove-notif');
  let tipsContainer = sidebarElement.lastChild;
  let buttonElements = document.getElementsByTagName("button");
  let tasks = document.getElementsByClassName("task");
  let projectPrompt = document.getElementsByClassName("project-prompt")[0];
  let taskPrompt = document.getElementsByClassName("task-prompt")[0];
  let warning = document.getElementsByClassName("warning")[0];
  let themeElementArray = [sidebarElement];

  if (taskPrompt !== undefined) {
    taskPrompt.id = color;
  }

  if (projectPrompt !== undefined) {
    projectPrompt.id = color;
  }

  for (let i = 0; i < taskElements.length; i++) {
    taskElements[i].id = comp;
  }

  for (let i = 0; i < notifButtons.length; i++) {
    notifButtons[i].id = comp;
  }

  for (let i = 0; i < removeNotifs.length; i++) {
    removeNotifs[i].id = comp;
  } 

  for (let y = 0; y < buttonElements.length; y++) {
    themeElementArray.push(buttonElements[y]);
  }

  for (let y = 0; y < projects.length; y++) {
    themeElementArray.push(projects[y]);
  }

  for (let i = 0; i < themeElementArray.length; i++) {
    if (themeElementArray[i] !== undefined) {
      themeElementArray[i].id = color;
    };
  };

  if (tasks !== undefined) {
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].id = comp;
    }
  }

  if (warning !== undefined) {
    warning.id = color;
  }

  sideButtonContainer.id = comp;
  tipsContainer.id = comp;
  notifBar.id = comp;
  notifContainer.id = comp;
  themesBar.id = comp;

  function themeComponents(hexValue) {
    sidebarElement.setAttribute("style", `border-right: solid ${hexValue} 3px;`);
    tipsContainer.setAttribute("style", `border: solid ${hexValue} 3px;`);
    themesBar.setAttribute("style", `border: solid ${hexValue} 3px;`);
    if (taskElements !== undefined) {
      for (let i = 0; i < taskElements.length; i++) { 
        taskElements[i].setAttribute("style", `border: solid ${hexValue} 5px;`);
      };
    };
  };

  // eslint-disable-next-line no-unused-vars
  const applyAccents = (() => {
    if (color === "light") {
      themeComponents('#CECECE');
    } else if (color === "dark") {
      themeComponents('#0F0F0F');
    } else if (color === "emerald") {
      themeComponents('#196B35');
    } else if (color === "artic") {
      themeComponents('#9aaab6');
    } else if (color === "ruby") {
      themeComponents('#E0115F');
    } else if (color === "purple") {
      themeComponents('#800080'); 
    } else if (color === "classic") {
      themeComponents('#82C1F8'); 
    }
  })();

  let themePair = JSON.stringify([color, comp]);
  localStorage.setItem("theme", themePair);
};

function themeCheck() {
  let color = sidebar.element.id;
  let comp = sidebar.tipsContainer.id;
  setTheme(color, comp)
}

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

export { sidebar, notif, setTheme, themeCheck };

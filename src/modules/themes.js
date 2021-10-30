/* eslint-disable no-undef */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-unused-vars */
import { elementBuilder, toggleHide } from './elements';

const themes = () => {

    let themes = {
        "Emerald": "#50C878", 
        "Artic": "#C6DAE9",
        "Ruby": "#E4417F",
        "Purple": "#BB54CE;",
        "Classic": "#82C1F8",
      };
    
      let themeMap = new Map();
      let themeArray = []
      let colorArray = []

      let themesList = document.getElementsByClassName("themes-list")[0];
    
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

      const themesBar = document.getElementsByClassName("themes-bar")[0]
      
      function showThemes() {
        toggleHide(themesBar)
      };

      const themesButton = document.getElementsByClassName("themes-button")[0];

      themesButton.addEventListener("click", showThemes)
    
    
}

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
      buttonElements[y].id = comp;
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
    if (notifContainer) {
      notifContainer.id = comp;
    }
    themesBar.id = comp;
  
    function themeComponents(hexValue) {
      for (let i = 0; i < projects.length; i++) {
        projects[i].setAttribute("style", `border: solid ${hexValue} 3px;`);
      };
      sidebarElement.setAttribute("style", `border-right: solid ${hexValue} 3px;`);
      tipsContainer.setAttribute("style", `border: solid ${hexValue} 3px;`);
      themesBar.setAttribute("style", `border: solid ${hexValue} 3px;`);
      if (taskElements !== undefined) {
        for (let i = 0; i < taskElements.length; i++) { 
          taskElements[i].setAttribute("style", `border: solid ${hexValue} 5px;`);
        };
      };
    }; 
  
    const applyAccents = (() => {
      if (color === "classic") {
        themeComponents('#1E67A7'); 
      } else if (color === "emerald") {
        themeComponents('#196B35');
      } else if (color === "artic") {
        themeComponents('#9aaab6');
      } else if (color === "ruby") {
        themeComponents('#910C3F');
      } else if (color === "purple") {
        themeComponents('#800080'); 
      };
    })();
  
    let themePair = JSON.stringify([color, comp]);
    localStorage.setItem("theme", themePair);
};
  
export { themes, setTheme }
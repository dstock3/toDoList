/* eslint-disable no-inner-declarations */
import { elementBuilder, body, toggleHide } from './elements'
import { today, deadline } from './date'

const sidebar = (() => {
    const element = elementBuilder("div", "sidebar", body);

    const headContainer = elementBuilder("div", "head-container", element);
    const head = elementBuilder("h1", "sidebar-head", headContainer);
    head.textContent = "OnTask";

    const sideButtons = elementBuilder("div", "side-button-container", headContainer)
  
    const newProject = elementBuilder("button", "side-buttons", sideButtons);
    newProject.textContent = "Start New Project";
    newProject.id = "new-project";
  
    const changeView = elementBuilder("button", "side-buttons", sideButtons)
    changeView.id = "view-button";
    changeView.textContent = "Change View";

    const barContainer = elementBuilder("div", "bar-container", element);
    const notifHeadContainer = elementBuilder("div", "notif-head-container", barContainer);
    const showNotifs = elementBuilder("div", "notif-button", notifHeadContainer);
    showNotifs.textContent = "N"
    
    const notifBar = elementBuilder("div", "notif-bar", barContainer);
    const notifContainer = elementBuilder("div", "notif-container", notifBar);

    function hideNotif() {
        let notifNum = document.getElementsByClassName("notif-num")[0];
        if (notifNum !== undefined) {
            notifNum.remove()
        }
        toggleHide(notifBar)
        if (notifBar.classList.contains("hidden")) {
            showNotifs.setAttribute("style", `border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;`) 
        } else {
            showNotifs.setAttribute("style", `border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;`) 
        }
    }
    
    showNotifs.addEventListener("click", hideNotif);
    const currentDate = elementBuilder("p", "notif", notifContainer);
    currentDate.id = "today"
    currentDate.textContent = today();
    notifButton()
    
    return { element, newProject, changeView, notifBar, showNotifs, notifHeadContainer, notifContainer, today }
})();

function notifNum() {
    let notifs = document.getElementsByClassName("notif");
    let num = notifs.length
    let previousNotifs = document.getElementsByClassName("notif-num")[0];
    if (previousNotifs !== undefined) {
        previousNotifs.remove()
    }
    if (num > 0) {
        let newNotifs = elementBuilder("div", "notif-num", sidebar.notifHeadContainer);
        newNotifs.textContent = num;
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
    if ((deadlineMessage.indexOf("day") > 0) || (deadlineMessage.indexOf("hours") > 0)) {
      if (sidebar.notifBar.children.length < 7) {
        let newContainer = elementBuilder("div", "notif-container", sidebar.notifBar)
        let newNotif = elementBuilder("p", "notif", newContainer);
        newNotif.id = "deadline" 
        newNotif.textContent = `${task.title}: ${deadlineMessage}`;
        noNotifChecker()
        return deadlineMessage 
      } 
    } else { return "No New Notifications" }
}

function notifButton() {
    let notifs = document.getElementsByClassName("notif");
    for (let i = 0; i < notifs.length; i++) {
        let notif = notifs[i];
        let parent = notif.parentNode
        if (notif.parentNode.children.length === 1) {
            let button = elementBuilder("div", "remove-notif", parent)
            button.textContent = "X"
            function removeNotif() {
                parent.remove();
                let previousNotifs = document.getElementsByClassName("notif-num")[0];
                if (previousNotifs !== undefined) {
                    notifNum() 
                }
                if (notifs.length === 0) {
                    const newNotifContainer = elementBuilder("div", "notif-container", sidebar.notifBar)
                    newNotifContainer.id = "none"
                    const noNotif = elementBuilder("p", "notif", newNotifContainer);
                    noNotif.id = "no-notif"
                    noNotif.textContent = "No New Notifications";
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

export {
    sidebar, 
    deadlineNotif,
    notifButton,
    checkNotifs,
    notifNum
}

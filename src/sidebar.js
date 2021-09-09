/* eslint-disable no-inner-declarations */
import { elementBuilder, body, hide } from './elements'
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
    
    //const notifHead = elementBuilder("h2", "notif-head", notifHeadContainer);
    //notifHead.textContent = "Notifications";
    const notifBar = elementBuilder("div", "notif-bar", barContainer);
    
    function hideNotif() {
        hide(notifBar)
    }
    
    showNotifs.addEventListener("click", hideNotif);

    const notifContainer = elementBuilder("div", "notif-container", notifBar)
    const currentDate = elementBuilder("p", "notif", notifContainer);
    currentDate.id = "today"
    currentDate.textContent = today();
    notifButton()
    
    return { element, newProject, changeView, notifBar, notifContainer, today }
})();


function deadlineNotif(task) {
    let deadlineMessage = deadline(task.enteredDate);
    if ((deadlineMessage.indexOf("day") > 0) || (deadlineMessage.indexOf("hours") > 0)) {
      if (sidebar.notifBar.children.length < 7) {
        let newContainer = elementBuilder("div", "notif-container", sidebar.notifBar)
        let newNotif = elementBuilder("p", "notif", newContainer);
        newNotif.id = "deadline" 
        newNotif.textContent = `${task.title}: ${deadlineMessage}`;
        return deadlineMessage 
      } 
    } else { return "No New Notifications"}
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
                notif.remove();
                button.remove();
                if (notifs.length === 0) {
                    let noNotif = elementBuilder("p", "notif", parent);
                    noNotif.textContent = "No New Notifications"
                    noNotif.id = "none"
                }
            }
            button.addEventListener("click", removeNotif);
        }
    }
}

function notifCheck() {
    let notifs = document.getElementsByClassName("notif");
    let noNotif = document.getElementById("none");

    if ((noNotif !== null) && (notifs.length >= 1)) {
        console.log(noNotif)
        noNotif.remove()
    }
}

export {
    sidebar, 
    deadlineNotif,
    notifButton, 
    notifCheck
}

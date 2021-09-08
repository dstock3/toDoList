/* eslint-disable no-inner-declarations */
import { elementBuilder, body } from './elements'
import { today } from './date'

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
    const notifHead = elementBuilder("h2", "notif-head", barContainer);
    notifHead.textContent = "Notifications";
    const notifBar = elementBuilder("div", "notif-bar", barContainer);
    const notifContainer = elementBuilder("div", "notif-container", notifBar)
    const currentDate = elementBuilder("p", "notif", notifContainer);
    currentDate.id = "today"
    currentDate.textContent = today();
    notifButton()
    
    return { element, newProject, changeView, notifHead, notifBar, notifContainer, today }
})();

function notifButton() {
    let notifs = document.getElementsByClassName("notif");
    for (let i = 0; i < notifs.length; i++) {
        let notif = notifs[i];
        if (notif.parentNode.children.length === 1) {
            
            let button = elementBuilder("button", "remove-notif", notif.parentNode)
            button.textContent = "x"
            function removeNotif() {
                notif.remove()
                button.remove()
            }
            button.addEventListener("click", removeNotif);
        }

    }
}

export {
    sidebar, 
    notifButton
}

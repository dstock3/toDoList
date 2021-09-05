import { elementBuilder, body } from './elements'
import { today } from './date'

const sidebar = (() => {
    const element = elementBuilder("div", "sidebar", body);
    const head = elementBuilder("h1", "sidebar-head", element);
    head.textContent = "OnTask";
    const sideButtons = elementBuilder("div", "side-button-container", element)
  
    const newProject = elementBuilder("button", "side-buttons", sideButtons);
    newProject.textContent = "Start New Project";
    newProject.id = "new-project"
  
    const changeView = elementBuilder("button", "side-buttons", sideButtons)
    changeView.id = "view-button"
    changeView.textContent = "Change View"
  
    const notifHead = elementBuilder("h2", "notif-head", element);
    notifHead.textContent = "Notifications";
  
    const notifications = elementBuilder("div", "notif-bar", element);
    
    const currentDate = elementBuilder("p", "today-notif", notifications);
    currentDate.textContent = today();
  
    return { element, newProject, changeView, notifHead, notifications, today }
})();

export {
    sidebar
}

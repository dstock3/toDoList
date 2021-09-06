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
    const notifications = elementBuilder("div", "notif-bar", barContainer);
    const currentDate = elementBuilder("p", "notif", notifications);
    currentDate.id = "today"
    currentDate.textContent = today();
    return { element, newProject, changeView, notifHead, notifications, today }
})();

export {
    sidebar
}

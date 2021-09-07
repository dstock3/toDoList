function elementBuilder(element, classLabel, parentName) {
    let item = document.createElement(element);
    item.classList.add(classLabel);
    parentName.appendChild(item);
    return item;
}

const getPosition = (projectElement) => {
    let projectElementArray = Array.from(projectElement.parentNode.children)
    let projectIndex = projectElementArray.indexOf(projectElement);
    return projectIndex
};

let body = document.getElementsByTagName("body")[0];

let projectDiv = elementBuilder("div", "project-container", body);

export {
    elementBuilder,
    getPosition,
    body, 
    projectDiv,
}


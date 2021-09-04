const project = (title, description, taskArray) => {
    return { title, description, taskArray }
};

const toDo = (title, project, description, enteredDate, dueDate, priority, notes, status) => {
    let task = { title, project, description, enteredDate, dueDate,  priority, notes, status }
    project.taskArray.unshift(task);
    return { title, project, description, enteredDate, dueDate,  priority, notes, status }
};

const projectTracker = () => {
    let masterList = []

    const clearList = () => {
        masterList = [];
        return masterList
    }
    return { masterList, clearList }
}

export {
    project,
    toDo,
    projectTracker
}
  
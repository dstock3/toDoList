const project = (title, description, taskArray) => {
    return { title, description, taskArray }
};

const toDo = (title, project, description, dueDate, priority, notes, status) => {
    return { title, project, description, dueDate, priority, notes, status }
};

const addTask = (task, project) => {
    project.taskArray.unshift(task);
    return project.taskArray
}

export {
    project,
    toDo,
    addTask
}
  
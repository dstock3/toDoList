const project = (title, description, taskArray) => {
    return { title, description, taskArray }
};

const toDo = (title, project, description, dueDate, priority, notes, status) => {
    let task = { title, project, description, dueDate, priority, notes, status }
    project.taskArray.unshift(task);
    return { task }
};

export {
    project,
    toDo,
}
  
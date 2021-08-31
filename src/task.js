const project = (title, description, taskArray) => {
    return { title, description, taskArray }
};

const toDo = (title, project, description, dueDate, priority, notes, status) => {
    return { title, project, description, dueDate, priority, notes, status }
};

export {
    project,
    toDo
}
  
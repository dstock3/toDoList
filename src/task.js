const project = (title, description) => {
    return { title, description }
};

const toDo = (title, project, description, dueDate, priority, notes) => {
    return { title, project, description, dueDate, priority, notes }
};

export {
    project,
    toDo
}
  
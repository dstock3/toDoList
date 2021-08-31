const project = (title, description) => {
    return { title, description }
};

const toDo = (title, project, description, dueDate, priority, notes, status) => {
    return { title, project, description, dueDate, priority, notes, status }
};

export {
    project,
    toDo
}
  
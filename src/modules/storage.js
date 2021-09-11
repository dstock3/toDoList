function store(taskObj) {
    let project = taskObj.project;
    let projectList = "";
    for (let i = 0; i < project.taskArray.length; i++) {
      let task = `${project.taskArray[i]}, `;
      projectList += task;
    }
  
    let projObj = {
      title: `${project.title}`,
      description: `${project.description}`,
      taskArray: projectList,
    };
  
    localStorage.setItem("title", taskObj.title);
    localStorage.setItem("project", projObj);
    localStorage.setItem("description", taskObj.description);
    localStorage.setItem("enteredDate", taskObj.enteredDate);
    localStorage.setItem("dueDate", taskObj.dueDate);
    localStorage.setItem("priority", taskObj.priority);
    localStorage.setItem("notes", taskObj.notes);
    localStorage.setItem("status", taskObj.status);
  }
  
  export { store };
  


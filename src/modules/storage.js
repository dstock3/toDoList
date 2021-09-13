function store(taskObj) {
  
  let newTaskObj = JSON.stringify(taskObj)
  localStorage.setItem("newTask", newTaskObj) 

}

export { store };

import { format, formatDistance, compareAsc, isPast } from "date-fns";

function dateChecker(date) {
  let dueDate = new Date(date);
  if (isPast(dueDate)) {
    return false;
  } else {
    return true;
  }
}

function formatDate(enteredDate) {
  let dueDate = new Date(enteredDate);
  let isValid = dateChecker(dueDate);
  if (isValid) {
    let formattedDate = format(dueDate, "EEEE, MMMM do, yyyy");
    return formattedDate;
  } else {
    return false;
  }
}

function today() {
  let today = new Date();
  today = format(today, "EEEE, MMMM do, yyyy");
  let message = `Today is ${today}.`;
  return message;
}

function deadline(dueDate) {
  const today = new Date();
  let dropDead = new Date(dueDate);
  let daysTill = formatDistance(dropDead, today);
  let deadMessage = `${daysTill} until your due date.`;
  return deadMessage;
}

function sortByDueDate(tasks) {
  let objArray = [];
  let deadlineArray = [];

  const newObj = (task, dueDate) => {
    return { task, dueDate };
  };

  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    let dueDate = new Date(task.enteredDate);
    let taskAndDate = newObj(task, dueDate);
    objArray.push(taskAndDate);
    deadlineArray.push(dueDate);
  }

  let sortedArray = deadlineArray.sort(compareAsc);
  let sortedTasks = [];
  for (let i = 0; i < sortedArray.length; i++) {
    let sortedDate = sortedArray[i];

    for (let y = 0; y < objArray.length; y++) {
      let date = objArray[y].dueDate;
      let task = objArray[y].task;

      if (sortedDate === date) {
        sortedTasks.push(task);
      }
    }
  }
  return sortedTasks;
}

export { dateChecker, formatDate, today, deadline, sortByDueDate };

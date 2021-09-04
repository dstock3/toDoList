import { format, formatDistance, compareAsc } from 'date-fns'

function formatDate(dueDate) {
    let newDate = new Date(dueDate);
    let formattedDate = format(newDate, 'EEEE, MMMM do, yyyy');
    return formattedDate
}

function today() {
    let today = new Date();
    today = format(today, 'EEEE, MMMM do, yyyy')
    let message = `Today is ${today}.`
    return message
}

function deadline(dueDate) {
    const today = new Date();
    let dropDead = new Date(dueDate)
    let daysTill = formatDistance(dropDead, today)
    let deadMessage = `(${daysTill} until your deadline.)`
    return deadMessage  
}

function sortByDueDate(tasks) {
    let deadlineArray = []
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let dueDate = new Date(task.enteredDate);

        deadlineArray.push(dueDate);
    }
    let sortedArray = deadlineArray.sort(compareAsc);
    console.log(sortedArray)
}

export {
    formatDate,
    today,
    deadline,
    sortByDueDate
}


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
    let objArray = [];
    let deadlineArray = []

    const newObj = (task, dueDate) => {
        return { task, dueDate }
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
            let date = objArray[y].dueDate
            let task = objArray[y].task

            if (sortedDate === date) {
                sortedTasks.push(task);
            }

        }
    }
    return sortedTasks
}
/*
function dateChecker(dueDate) {
    const today = new Date();

}
*/
export {
    formatDate,
    today,
    deadline,
    sortByDueDate
}


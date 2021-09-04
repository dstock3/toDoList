import { format, formatDistance, subDays, parseISO } from 'date-fns'

function formatDate(dueDate) {
    let newDate = new Date(dueDate);
    let formattedDate = format(newDate, 'EEEE, MMMM do, yyyy');
    return formattedDate
}

function deadline(dueDate) {
    const today = new Date();
    let dropDead = new Date(dueDate)

    let daysTill = formatDistance(dropDead, today)
    let deadMessage = `${daysTill} until your deadline.`
    console.log(deadMessage)    
}

export {
    formatDate,
    deadline
}

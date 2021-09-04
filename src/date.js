import { format } from 'date-fns'

function formatDate(due) {
    let newDate = new Date(due);
    let formattedDate = format(newDate, 'EEEE, MMMM do, yyyy')
    return formattedDate
}

export {
    formatDate
}


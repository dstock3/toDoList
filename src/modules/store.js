import { setTheme } from './themes'

const store = (projList) => {
    const newArray = JSON.stringify(projList);
    localStorage.setItem("newArray", newArray);
}

const checkList = () => {
    let fetchedList = JSON.parse(localStorage.getItem("newArray"));
    if (fetchedList === null) {
        return []
    } else { return fetchedList }
}

const getTheme = () => {
    let themePair = JSON.parse(localStorage.getItem("theme"))
    if (themePair !== undefined) {
        setTheme(themePair[0], themePair[1])
    };
};

const updateTask = (thisTask) => {
    let projList = checkList()
    for (let i = 0; i < projList.length; i++) {
        let project = projList[i];
        let tasks = project.taskArray;
        for (let y = 0; y < tasks.length; y++) {
            console.log(tasks[y].title)
            if (tasks[y].title === thisTask.title) {
                tasks[y].status = thisTask.status
                store(projList);
                break
            };
        };
    };
};

export { store, checkList, getTheme, updateTask }
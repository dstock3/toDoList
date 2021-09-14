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

export { store, checkList }
export function addValue(Name, Age, Marks) {

    return {
        type: "ADD",
        Name: Name,
        Age: Age,
        Marks: Marks
    }
}


export function changeState(id, Name, Age, Marks) {

    return {
        type: "UPDATE",
        id: id,
        Name: Name,
        Age: Age,
        Marks: Marks
    }
}


export function deleteData(id) {
    return {
        type: "DELETE",
        id: id
    }
}

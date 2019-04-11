export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const addTask = addItem => {
    console.log(addItem)
    return{
        type: ADD_TASK,
        payload: addItem
    }
}

export const deleteTask = deleteItem => {
    return{
        type: DELETE_TASK,
        payload: deleteItem
    }
}
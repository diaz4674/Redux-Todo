export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const addTask = addItem => {
    console.log(addItem)
    return{
        type: ADD_TASK,
        payload: addItem
    }
}

export function toggleCompleted(index)  {
    return{
        type: TOGGLE_COMPLETED,
        payload: index
    };
}
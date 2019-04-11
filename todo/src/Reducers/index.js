import{ADD_TASK, DELETE_TASK} from '../Actions'

const initialState = {
    todos: [ 
        {value: 'walk the dog', completed: false}, 
        {value: 'Kill John Wick', completed: false}
    ]
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK:
        return{
            todos: action.payload
        }
        case DELETE_TASK:
        return{
            todos: action.payload
        }
        default:
        return state;
    }
}
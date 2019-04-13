import{ADD_TASK, TOGGLE_COMPLETED} from '../Actions'

const initialState = {
    todos: [ 
        {value: 'walk the dog', completed: false}, 
        {value: 'Kill John Wick', completed: false}
    ]
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK:
        const newTask = {
            value: action.payload,
            completed: false
        }
        return{
            ...state,
            todos: [...state.todos, newTask]
        }
        case TOGGLE_COMPLETED:
        return{
            ...state,
            todos: state.todos.map((todo, index) => 
            action.payload === index ? {...todo, completed: !todo.completed } : todo)
        }
        default:
        return state;
    }
}
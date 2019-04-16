import React from 'react';
import {connect} from 'react-redux';
import {addTask, toggleCompleted} from '../Actions';

class Todo extends React.Component {

    state = {
        value: '',
        completed: false
    }

    handleChanges = e => {
        this.setState({ [e.target.name] : e.target.value } )
    }

    handleClick = e => {
        e.preventDefault();
        this.props.addTask(this.state.value)
    }

    toggleCompletedClick = (e, index) => {
        e.preventDefault();
        this.props.toggleCompleted(index)
    }

    render(){
        const{value, completed} = this.props.todos
        const todoItem = value.map((newVal, index) => ( <div> <p> {newVal}</p> <button onClick = { e => this.toggleCompletedClick(e, index)} key = {index}> Completed </button> </div>))

            return(
                <div> 
                    <h1>Add an Item to your list</h1>
                    <form>
                        <input type = 'text' name= 'value' value = {this.state.value} onChange = {this.handleChanges}/>
                        <button onClick = {this.handleClick}> Add Task </button>
                    </form>
                    <div> 
                        <ul> 
                            <div> 
                                { todoItem }
                            </div>

                        </ul>
                    </div>       
                </div>
            )
    }
}

const mapStateToProps = (state) =>{
    const arrayOfTodos = state.todos.map(todo => todo)
    return {
        todos: {
            value: arrayOfTodos.map(item => item.value),
            completed: arrayOfTodos.map(item => item.completed)
        }
    };
};

export default connect(mapStateToProps, {addTask, toggleCompleted})(Todo);
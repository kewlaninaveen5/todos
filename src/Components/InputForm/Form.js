import React, { Component } from 'react';
// import TodoList from '../TodoList/TodoList';
import Auxilliary from '../../hoc/Auxilliary';

class Form extends Component {
    state= {
        inputText: "",
        todoList: []
    };

    render () {

        const statusHandler = (event) => {
            this.props.setStatus(event.target.value);
            // const even = event;
            // console.log(event.target.value);
        }

        return (
            <Auxilliary>
            <form>
            <input 
                value={this.props.value}
                onChange={this.props.change} 
                type='text' 
                className='todo-input' 
                />

            <button onClick={this.props.btnClick} className='todo-button' type='submit' >
                <i className='fas fa-plus-square'></i>
            </button>
            <div className='select' >
                <select 
                onChange={(event) => statusHandler(event)} 
                name='todos' className='filter-todo' >
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option  value='uncompleted'>Uncompleted</option>
                </select>
            </div>
        </form>
        {/* <TodoList todos={this.state.todoList}> </TodoList> */}
        </Auxilliary>
        )
    }

    
}

export default Form;
import React from 'react';
// import todo from './Todo/Todo';
import Todo from './Todo/Todo';

const todoList = (props) => {

    // const deleteHandler = () => {
    //     // console.log(props.todos);
    //     props.setTodos(props.todos.filter(el => el.text !== todo.text));
    // }

    return (
        
       <div className='todo-container'>
           
           <ul className='todo-list' >
               
                   {
                   props.todos.map(todoItem =>{
                    return <Todo 
                            todos={props.todos}
                            setTodos={props.setTodos}  
                            key={todoItem.text} 
                            listItem={todoItem.text}
                            todoItem={todoItem}
                            // clicked={deleteHandler}
                            />
                   } 
                   )               
               }
               
               </ul>
       </div>
    );
}

export default todoList;
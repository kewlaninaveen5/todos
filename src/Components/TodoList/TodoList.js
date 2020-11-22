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
                   props.todoList.map(todoItem =>{
                    //    if (props.status === 'all') {
                        return <Todo 
                        // filteredList={props.filteredList}
                        todoList={props.todoList}
                        setTodosByDelete={props.setTodosByDelete}
                        setTodosByComplete={props.setTodosByComplete}  
                        key={todoItem.id} 
                        listItem={todoItem.text}
                        todoItem={todoItem}
                      
                        />
                    
                           
                   } 
                   )               
               }
               
               </ul>
       </div>
    );
}

export default todoList;
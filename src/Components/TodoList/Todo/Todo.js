import React from 'react';

const todo = (props) => {

    const deleteHandler = () => {
        console.log('pehle', props.todoList);

        console.log('delete wala', props.todoItem);
        const value = props.todoList.filter(el => el.id !== props.todoItem.id);
        // console.log('value', value)
       
        props.setTodos(value);
        // console.log('badme', props.todos);
    }
  
    const completeHandler = () => {

        const value = props.todoList.map(
            el => {
                if(el.id === props.todoItem.id) {
                    el.completionState = !el.completionState
                    
                }
            return el 
            } );
            props.setTodos(value);     
        
    }


return (
    <div className='todo'>
        <li className={`todo-item ${props.todoItem.completionState ? "completed" : ""}`}>
         {/* {console.log('Naveen', props.todoItem.completionState)} */}
         {props.listItem}
         </li>
        <button onClick={completeHandler} className='complete-btn'><i className='fas fa-check'></i></button>
        <button  onClick={deleteHandler} className='trash-btn'><i className='fas fa-trash'></i></button>

    </div>
);

};

export default todo;


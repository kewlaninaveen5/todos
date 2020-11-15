import React from 'react';

const todo = (props) => {

    const deleteHandler = () => {
        console.log('pehle', props.todos);

        console.log('delete wala', props.todoItem);
        const value = props.todos.filter(el => el.text !== props.todoItem.text);
        console.log('value', value)
        // props.todos = value
        // const index = props.todos.indexOf(value);
        // props.todos.splice(index, 1);
        props.setTodos(value);
        // console.log('badme', props.todos);
    }
  
    const completeHandler = () => {

        props.todos.map(
            el => {
                if(el.text === props.todoItem.text) {
                    el.completionState = !el.completionState
                }
            return el 
            } );
             
        
    }


return (
    <div className='todo'>
        <li className={`todo-item ${todo.completionState ? "completed" : ""}`}>
        {/* Hi {console.log('Naveen', typeof(props.listItem))} */}
         {props.listItem}
         </li>
        <button onClick={completeHandler} className='complete-btn'><i className='fas fa-check'></i></button>
        <button  onClick={deleteHandler} className='trash-btn'><i className='fas fa-trash'></i></button>

    </div>
);

};

export default todo;


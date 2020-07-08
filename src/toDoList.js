import React from 'react';
import ToDoItems from './ToDoItems';

const ToDoList = props => {
    console.log('props from todolist component', props)
    return (
        <>
        <div>
        {props.toDoItems.map(item => (
            <ul>
                <ToDoItems 
                    key={item.id}
                    ToDoItems={item} 
                    toggleCompleted={props.toggleCompleted}/>
            </ul>
            
            ))}
            
        </div>
        <button onClick={props.clearCopmpleted}>Remove Done Items</button>
        </>
     
    )
}

export default ToDoList;
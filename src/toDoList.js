import React from 'react';

const ToDoList = props => {
    console.log('props from todolist component', props)
    return (
        <div>
        <ul>
            {props.toDoItems.map(item => (
            <li key={item.id}>{item.task}</li>
            ))}
        </ul>
        </div>
     
    )
}

export default ToDoList;
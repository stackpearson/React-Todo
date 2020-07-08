import React from 'react';
import './components/Todo.css';

const ToDoItems = props => {
    console.log('props from ToDoItems', props)

    const handleClick = e => {
        props.toggleCompleted(props.ToDoItems.id)
    }

    return (
            <li onClick={handleClick} className={`ToDoItems${props.ToDoItems.completed ? ' completed': ''}`}>{props.ToDoItems.task}</li>
        
        
    )
}

export default ToDoItems;

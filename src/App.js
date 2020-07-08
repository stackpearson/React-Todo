import React from 'react';
import ToDoList from './toDoList';
import ToDoAdder from './ToDoAdder';

const toDos = [
  {
    task: 'style my list',
    id: 1,
    completed: false
  },
  {
    task: 'take a vacation',
    id: 2,
    completed: false
  }

]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super()
    this.state= {
      toDos: toDos
    };
  }

  addTask = taskName => {
    this.setState({
      toDos: [
        ...this.state.toDos,
        {
          task: taskName,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };

  toggleCompleted = itemId => {
    this.setState({
      toDos: this.state.toDos.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      toDos: this.state.toDos.filter(item => {
        return !item.completed;
      })
    });
  };

  render() {
    return (
      <>
      <div>
        <h2>To Do List</h2>
      </div>
      <ToDoAdder addTask={this.addTask}/>
      <ToDoList 
        toDoItems={this.state.toDos}
        toggleCompleted={this.toggleCompleted}
        clearCompleted={this.clearCompleted}
      />
      </>
    );
  }
}

export default App;

import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super()
    this.state= [
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
  }
  render() {
    return (
      <>
      <div>
        <h2>To Do List</h2>
      </div>
      
      <div>
        <ul>
        {this.state.map(item => (
          <li>{item.task}</li>
        ))}
        </ul>
      </div>
      </>
    );
  }
}

export default App;

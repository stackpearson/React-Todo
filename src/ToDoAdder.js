import React from 'react';

class ToDoAdder extends React.Component {
    constructor(props) {
        console.log('props from todoadder', props)
        super(props);
        this.state= {
            task: ''
        }
    }

    handleChanges = e => {
        console.log('toDoAdder handlechanges', e.target.value)
        this.setState({ task: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.task)
    }


    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text'
                    name='task'
                    onChange={this.handleChanges}/>

                <button>Add</button>
            </form>
        );
    }

}



export default ToDoAdder
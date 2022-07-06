
import uniqid from "uniqid";
import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { 
        text: '',
        id: uniqid()
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text: '',
        id: uniqid() 
      },
    });
  };

  handleDelete = (itemId) => {
    this.setState({tasks: this.state.tasks.filter(function(task) { 
      return task.id !== itemId
    })});
    
    // console.log(e.target)
  };

  render() {
    const { task, tasks} = this.state;
    // const {handleDelete} = this.props;
    return ( 
    <div className="App">
      <form onSubmit={ this.onSubmitTask }>
        <label htmlFor='taskInput'>Enter task</label>
        <input onChange={ this.handleChange } value={ task.text }type='text' id='taskInput'/>
        <button type='submit'>
          Add Task
        </button>
      </form>
      <Overview tasks={tasks} onDelete={this.handleDelete} />
    </div>
    )
  };
}

export default App;

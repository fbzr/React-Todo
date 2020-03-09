import React, { Fragment } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { Grid, Typography, CssBaseline } from '@material-ui/core';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addTodo = newTask => {
    const newTodo = {
      task: newTask,
      id: new Date().valueOf(),
      completed: false
    }
    
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => (
        todo.completed === false
      ))
    })
  }

  toggleStatus = (todoId) => {
    this.setState({
      todos: this.state.todos.map(todo => (
        todo.id === todoId 
        ? {...todo, completed: !todo.completed} 
        : todo
      ))
    })
  }

  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Grid container alignItems='center' direction='column'>
          <Typography variant='h2'>Todo List</Typography>
          <TodoForm clearCompleted={this.clearCompleted} addTodo={this.addTodo} />
          <TodoList toggleStatus={this.toggleStatus} todos={this.state.todos} />
          {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
        </Grid>
      </Fragment>
    );
  }
}

export default App;

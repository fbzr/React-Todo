import React, { Fragment } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { Grid, Typography, CssBaseline } from '@material-ui/core';
import Search from './components/Search';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      searchText: ''
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

  handleSearch = searchText => {
    this.setState({
      ...this.state,
      searchText
    })
  }

  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Grid style={{marginTop: '4%'}} container alignItems='center' direction='column'>
          <Typography variant='h2'>Todo List</Typography>
          <Search handleSearch={this.handleSearch} />
          <TodoForm clearCompleted={this.clearCompleted} addTodo={this.addTodo} />
          <TodoList toggleStatus={this.toggleStatus} todos={this.state.todos.filter(todo => todo.task.includes(this.state.searchText))} />
          {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
        </Grid>
      </Fragment>
    );
  }
}

export default App;

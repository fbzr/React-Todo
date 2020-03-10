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
        <Grid style={{margin: '4% auto', width: '400px'}} container alignItems='center' direction='column'>
          <Typography variant='h2'>Todo List</Typography>
          <TodoForm clearCompleted={this.clearCompleted} addTodo={this.addTodo} />
          { this.state.todos.length > 0 && <Search handleSearch={this.handleSearch} /> }
          <TodoList toggleStatus={this.toggleStatus} todos={this.state.todos.filter(todo => todo.task.includes(this.state.searchText))} />
          {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
        </Grid>
      </Fragment>
    );
  }
}

export default App;

import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

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
      <div>
        <h1>Todo List</h1>
        <TodoList toggleStatus={this.toggleStatus} todos={this.state.todos} />
        <TodoForm clearCompleted={this.clearCompleted} addTodo={this.addTodo} />
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}

export default App;

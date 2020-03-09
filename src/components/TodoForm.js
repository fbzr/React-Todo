import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            newTask: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTask);
        this.setState({
            newTask: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={this.state.newTask} type="text" name="newTask" id="newTask"/>
                <button type='submit'>Add</button>
                <button>Clear completed</button>
            </form>
        )
    }
}

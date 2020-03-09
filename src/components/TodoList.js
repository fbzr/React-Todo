// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'

export default class TodoList extends Component {
    constructor(props) {
        super();
        this.todos = props.todos;
    }
    render() {
        return (
            <div>
                { this.todos.map(todo => <div>{todo.task}</div>) }
            </div>
        )
    }
}

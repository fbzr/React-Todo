import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props) {
        super();
        this.todo = props.todo;
    }
    render() {
        return (
            <div>
                {this.todo.task}
            </div>
        )
    }
}

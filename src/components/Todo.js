import React, { Component } from 'react'

export default class Todo extends Component {
    handleClick = e => {
        this.props.toggleStatus(this.props.todo.id);
    }
    render() {
        return (
            <div onClick={this.handleClick}>
                {this.props.todo.task}
            </div>
        )
    }
}

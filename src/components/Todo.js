import React, { Component } from 'react'
import { Paper, withStyles, Typography } from '@material-ui/core';

const TodoPaper = withStyles(theme => ({
    root: {
        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
        width: '100%',
        padding: '2%',
        marginBottom: '2%'
    }
}))(Paper)

export default class Todo extends Component {
    handleClick = e => {
        this.props.toggleStatus(this.props.todo.id);
    }
    render() {
        return (
            <TodoPaper onClick={this.handleClick}>
                <Typography style={{
                    cursor: 'pointer',
                    color: this.props.todo.completed ? '#000' : '#fff',
                    textDecoration: this.props.todo.completed ? 'line-through' : 'none',
                }}>
                    {this.props.todo.task}
                </Typography>
            </TodoPaper>
        )
    }
}

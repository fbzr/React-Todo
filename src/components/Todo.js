import React, { Component } from 'react'
import { Paper, withStyles, Typography } from '@material-ui/core';

const TodoPaper = withStyles(theme => ({
    root: {
        background: `linear-gradient(45deg, ${theme.palette.primary.light} 30%, ${theme.palette.primary.main} 90%)`,
        width: '400px',
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
                    textDecoration: this.props.todo.completed ? 'line-through' : 'none'
                }}>
                    {this.props.todo.task}
                </Typography>
            </TodoPaper>
        )
    }
}

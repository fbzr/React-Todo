// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'
import Todo from './Todo';
import { Grid, Typography } from '@material-ui/core';

export default class TodoList extends Component {
    render() {
        return (
            <Grid container justify='center'>
                { this.props.todos.length > 0 
                ? this.props.todos.map(todo => <Todo key={todo.id} toggleStatus={this.props.toggleStatus} todo={todo} />) 
                : <Typography>There is no task at the moment</Typography> }
            </Grid>
        )
    }
}

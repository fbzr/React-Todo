import React, { Component } from 'react';
import { TextField, Button, Grid, IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

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

    clearCompleted = e => {
        e.preventDefault();
        this.props.clearCompleted();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} 
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                marginBottom: '2%'
            }}>
                <Grid container wrap='nowrap'
                style={{
                    marginBottom: '2%'
                }}>
                    <TextField style={{width: '100%'}} label='Add a task' onChange={this.handleChange} value={this.state.newTask} type="text" name="newTask" id="newTask"/>
                    <IconButton disabled={this.state.newTask === ''} type='submit'>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </Grid>
                <Button style={{width: '100%'}} onClick={this.clearCompleted}>Clear completed</Button>
            </form>
        )
    }
}

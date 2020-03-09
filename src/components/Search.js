import React, { Component } from 'react'
import { TextField } from '@material-ui/core';

export default class Search extends Component {
    handleChange = e => {
        this.props.handleSearch(e.target.value);
    }

    render() {
        return (
            <div>
                <TextField onChange={this.handleChange} label='Search for a task' />
            </div>
        )
    }
}

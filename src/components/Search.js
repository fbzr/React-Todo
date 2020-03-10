import React, { Component } from 'react'
import { TextField, Grid } from '@material-ui/core';

export default class Search extends Component {
    handleChange = e => {
        this.props.handleSearch(e.target.value);
    }

    render() {
        return (
            <Grid style={{marginBottom: '2%'}} container>
                <TextField onChange={this.handleChange} label='Search for a task' />
            </Grid>
        )
    }
}

import React, { Component } from 'react'
import { Select, InputLabel, MenuItem, FormControl } from '@material-ui/core';

export default class SortArticles extends Component {
    render() {
        const { handleChange } = this.props
        return (
            <div>
                <FormControl>
                    <InputLabel>Sort</InputLabel>
                    <Select onChange={handleChange} value="sort articles">
                        <MenuItem value="votes">Votes</MenuItem>
                        <MenuItem value="comment_count">Comment Count</MenuItem>
                        <MenuItem value="created_at">Date</MenuItem>
                    </Select>
                </FormControl>
            </div>
        )
    }
}
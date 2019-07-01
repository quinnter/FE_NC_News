import React, { Component } from 'react'
import { Select, InputLabel, MenuItem, FormControl, withStyles, OutlinedInput } from '@material-ui/core';

const styles = theme => ({
    border: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    input: {
        margin: "5px"
    }
})

class SortArticles extends Component {
    render() {
        const { handleChange, classes, sortBy } = this.props
        return (
            <div className={classes.root}>
                <FormControl className={classes.border} variant="outlined">
                    <InputLabel>Sort</InputLabel>
                    <Select
                        onChange={handleChange}
                        name="sortBy"
                        value={sortBy}
                        input={<OutlinedInput name="sort" className={classes.input} />}
                    >
                        <MenuItem value="votes">Votes</MenuItem>
                        <MenuItem value="comment_count">Comment Count</MenuItem>
                        <MenuItem value="created_at">Date</MenuItem>
                        <MenuItem value="author">User</MenuItem>
                    </Select>
                </FormControl>
            </div>
        )
    }
}

export default withStyles(styles)(SortArticles);
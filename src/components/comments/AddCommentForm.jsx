import React, { Component } from 'react'
import { InputBase, withStyles, Paper, Divider, IconButton, Icon } from '@material-ui/core';
import { addNewComment } from '../../api';
import Send from "@material-ui/icons/Send"

const styles = theme => ({
    root: {
        padding: '2px 4px',
        display: "flex",
        alignItems: "center",
        maxWidth: 900,
        margin: "10px"
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4
    }

})

class AddCommentForm extends Component {
    state = {
        body: "",
    }
    render() {
        const { classes } = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                <Paper className={classes.root}>
                    <InputBase
                        className={classes.input}
                        onChange={this.handleChange}
                        placeholder="Comment..."
                        name="body"
                        value={this.state.body}
                        required
                        multiline
                        aria-label="type comment"
                    ></InputBase>
                    <Divider className={classes.divider} />
                    <IconButton className={classes.iconButton} type="submit" aria-label="submit comment">
                        <Icon><Send /></Icon>
                    </IconButton>
                </Paper>
            </form>
        )
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        console.log('added comment')
        event.preventDefault();
        const { body } = this.state;
        addNewComment(this.props.article_id, { body, username: this.props.loggedInUser })
            .then((comment) => {
                this.setState({ body: " " })
                this.props.addComment(comment);
            })
    }
}

export default withStyles(styles)(AddCommentForm);


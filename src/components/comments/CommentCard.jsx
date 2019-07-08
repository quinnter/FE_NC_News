import React, { Component } from 'react'
import { withStyles, Grid, IconButton, Divider, Typography } from '@material-ui/core';
import ThumbUp from "@material-ui/icons/ThumbUp";
import ThumbDown from "@material-ui/icons/ThumbDown";
import DeleteForever from "@material-ui/icons/DeleteForever"
import { patchCommentVote, deleteComment } from '../../api';
import { Button } from '@material-ui/core';


const styles = theme => ({
    border: {
        maxWidth: 850,
        border: 0,
        borderRadius: 5,
        padding: "10px",
        margin: "10px"
    },
    row1: {
        padding: "10px"
    },
    voting: {
        maxWidth: 120,
    },
})

class CommentCard extends Component {
    state = {
        voteChange: 0
    }

    render() {
        const { voteChange } = this.state
        const { comment, loggedInUser, classes } = this.props
        return (
            <div className={classes.border}>
                <Grid container spacing={2} direction="column" >
                    <Grid item container direction="row">
                        <Grid item>
                            <Typography variant="subtitle1" color="textSecondary">{comment.author} • {comment.created_at}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" align="left">{comment.body}</Typography>
                    </Grid>
                    <Grid item container direction="row" alignItems="center">
                        <Grid item>
                            <Typography variant="body2" color="textSecondary">{comment.votes + voteChange} • </Typography>
                        </Grid>
                        <Grid item>
                            {loggedInUser && <IconButton disabled={voteChange === 1} onClick={() => this.handleVote(1)}> <ThumbUp /> </IconButton>}
                        </Grid>
                        <Grid item>
                            {loggedInUser && <IconButton disabled={voteChange === -1} onClick={() => this.handleVote(-1)}> <ThumbDown /> </IconButton>}
                        </Grid>
                        <Grid item>
                            {loggedInUser && loggedInUser === comment.author && <Button onClick={() => this.handleDelete(comment.comment_id)}><DeleteForever /> Delete </Button>}
                        </Grid>
                    </Grid>
                </Grid>
                <Divider />
            </div>
        )
    }

    handleVote(direction) {
        patchCommentVote(this.props.comment.comment_id, direction)
            .catch(err => {
                this.setState((prevState) => {
                    return { voteChange: prevState.voteChange - direction }
                })
            })
        this.setState((prevState) => {
            return { voteChange: prevState.voteChange + direction }
        })
    }

    handleDelete(comment_id) {
        deleteComment(comment_id)
            .then(this.props.deleteCommentFromState(comment_id))
    }
}

export default withStyles(styles)(CommentCard);
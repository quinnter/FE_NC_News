import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton';
import ThumbUp from "@material-ui/icons/ThumbUp";
import ThumbDown from "@material-ui/icons/ThumbDown";
import DeleteForever from "@material-ui/icons/DeleteForever"
import { patchCommentVote, deleteComment } from '../../api';
import { Button } from '@material-ui/core';

export default class CommentCard extends Component {
    state = {
        voteChange: 0
    }

    render() {
        const { voteChange } = this.state
        const { comment, loggedInUser } = this.props
        return (
            <div>
                <h5>{comment.created_at}</h5>
                <h3>{comment.author}</h3>
                <p>{comment.body}</p>
                <p>{comment.votes + voteChange}</p>
                {loggedInUser && <IconButton disabled={voteChange === 1} onClick={() => this.handleVote(1)}> <ThumbUp /> </IconButton>}
                {loggedInUser && <IconButton disabled={voteChange === -1} onClick={() => this.handleVote(-1)}> <ThumbDown /> </IconButton>}
                {loggedInUser && loggedInUser === comment.author && <Button onClick={() => this.handleDelete(comment.comment_id)}><DeleteForever/> Delete </Button>}
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
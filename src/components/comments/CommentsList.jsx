import React, { Component } from 'react'
import { getCommentsById } from '../../api';
import CommentCard from './CommentCard';
import AddCommentForm from './AddCommentForm';


export default class CommentsList extends Component {
    state = {
        comments: [],
    }

    componentDidMount() {
        getCommentsById(this.props.article_id)
            .then(comments => {
                this.setState({ comments })
            })
    }


    render() {
        const { comments } = this.state
        const { loggedInUser } = this.props
        return (
            <div>
                {loggedInUser && <AddCommentForm article_id={this.props.article_id} loggedInUser={this.props.loggedInUser} addComment={this.addComment} />}
                {comments.map(comment => {
                    return (
                        <CommentCard
                            key={comment.comment_id}
                            comment={comment}
                            loggedInUser={loggedInUser}
                            deleteCommentFromState={this.deleteCommentFromState} />
                    )
                })}
            </div>
        )
    }

    addComment = comment => {
        this.setState(prevState => {
            return { comments: [comment, ...prevState.comments] }
        })
    }

    deleteCommentFromState = deletedCommentId => {
        this.setState(prevState => {
            const notDeletedComments = prevState.comments.filter(comment => comment.comment_id !== deletedCommentId)
            return { comments: notDeletedComments }
        })
    }

}
import React, { Component } from 'react'
import { Input, Button } from '@material-ui/core';
import { addNewComment } from '../../api';

export default class AddCommentForm extends Component {
    state = {
        body: "",
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input
                    onChange={this.handleChange}
                    placeholder="Comment..."
                    name="body"
                    value={this.state.body}
                ></Input>
                <Button>Reply</Button>
            </form>
        )
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        const { body } = this.state;
        addNewComment(this.props.article_id, { body, username: this.props.loggedInUser })
            .then((comment) => {
                this.setState({ body: " " })
                this.props.addComment(comment);
            })
    }
}
import React, { Component } from 'react'
import { Input, InputLabel } from '@material-ui/core';
import { getUser } from '../../api';

export default class LoginForm extends Component {
    state = {
        userInput: ''
    }

    render() {
        return (
            <form onSubmit={this.handleSumbit}>
                <InputLabel>Enter Username</InputLabel>
                <Input
                    label="Enter Username"
                    variant="outlined"
                    onChange={this.storeUserInput}
                    value={this.state.userInput}
                    required
                ></Input>
            </form>
        )
    }

    storeUserInput = event => {
        this.setState({ userInput: event.target.value })
    }

    handleSumbit = event => {
        event.preventDefault();
        const { userInput } = this.state;
        getUser(userInput)
            .then(user => {
                this.setState({ userInput: "" })
                this.props.loginUser(user.username)
            })
    }
}
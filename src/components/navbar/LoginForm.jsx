import React, { Component } from 'react'
import { Input, FormControl, InputLabel } from '@material-ui/core';
import { getUser } from '../../api';

export default class LoginForm extends Component {
    state = {
        userInput: null
    }

    render() {
        return (
            <form onSubmit={this.handleSumbit}>
                <InputLabel>Enter Username</InputLabel>
                <Input
                    label="Enter Username"
                    variant="outlined"
                    placeholder="Enter Username"
                    onChange={this.storeUserInput}
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
                this.props.loginUser(user.username)
            })
    }
}
import React, { Component } from 'react'
import { getUser } from '../../api';

export default class ProfilePage extends Component {
    state = {
        user: ''
    }

    componentDidMount() {
        getUser(this.props.username)
            .then(user => {
                this.setState({ user })
            })
    }

    render() {
        const { user } = this.state
        return (
            <div>
                <p>{user.username}</p>
                <p>{user.name}</p>
                <img src={user.avatar_url} alt="Users Profile" />
            </div>
        )
    }
}

// loggedInUser && loggedInUser === user && for when I style this
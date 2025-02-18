import React, { Component } from "react";
import { getUser } from "../../api";
import UserCard from "./UserCard";

export default class ProfilePage extends Component {
  state = {
    user: ""
  };

  componentDidMount() {
    getUser(this.props.username).then(user => {
      this.setState({ user });
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <UserCard user={user} />
      </div>
    );
  }
}

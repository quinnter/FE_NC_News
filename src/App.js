import React, { Component } from 'react';
import './App.css';
import { Router } from "@reach/router";
import ArticlesPage from './components/articles/ArticlesPage';
import SingleArticlePage from './components/articles/SingleArticlePage';
import SingleTopicPage from './components/topics/SingleTopicPage';
import NavBar from './components/navbar/NavBar';



export default class App extends Component {
  state = {
    loggedInUser: null
  }
  render() {
    const { loggedInUser } = this.state;
    return (
      <div className="App">
        <NavBar loginUser={this.loginUser} />
        <Router>
          <ArticlesPage loggedInUser={loggedInUser} path="/" />
          <SingleArticlePage loggedInUser={loggedInUser} path="/articles/:article_id" />
          <SingleTopicPage path="/topics/:slug" />
        </Router>
      </div>
    );
  }

  loginUser = (username) => {
    this.setState({ loggedInUser: username })
  }
}


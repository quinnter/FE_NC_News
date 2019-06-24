import React, { Component } from 'react';
import './App.css';
import { Router } from "@reach/router";
import ArticlesPage from './components/articles/ArticlesPage';
import SingleArticlePage from './components/articles/SingleArticlePage';



export default class App extends Component {
  state = {
    loggedInUser: null
  } 
  render() {
    return (
      <div className="App">
      <Router>
      <ArticlesPage path="/"/>
      <SingleArticlePage path="/articles/:article_id" />
      <SingleTopicPage path="/topics/:slug"/>
      </Router>
      </div>
    );
  }

  loginUser = (username) => {
    this.setState({ loggedInUser: username })
  }
}


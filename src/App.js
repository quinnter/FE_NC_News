import React, { Component } from 'react';
import './App.css';
import { Router } from "@reach/router";
import ArticlesPage from './components/articles/ArticlesPage';
import SingleArticlePage from './components/articles/SingleArticlePage';
import SingleTopicPage from './components/topics/SingleTopicPage';
import NavBar from './components/navbar/NavBar';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import ErrorPage from './components/errors/ErrorPage';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#f05545',
      main: '#B71C1C',
      dark: '7f0000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#6d6d6d',
      main: '#424242',
      dark: '#1b1b1b',
      contrastText: '#000',
    },
  },
});

export default class App extends Component {
  state = {
    loggedInUser: null,
    error: false,
  }
  render() {
    const { loggedInUser, error } = this.state;
    if (error) return (<ErrorPage error={error} />)
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <NavBar loginUser={this.loginUser} />
          <Router>
            <ArticlesPage loggedInUser={loggedInUser} path="/" />
            <SingleArticlePage loggedInUser={loggedInUser} path="/articles/:article_id" />
            <SingleTopicPage path="/topics/:slug" />
            {/* if path doesn't match, show error DEFAULT */}
            <ErrorPage default />
          </Router>
        </div>
      </ThemeProvider>
    );
  }

  loginUser = (username) => {
    this.setState({ loggedInUser: username })
  }
}


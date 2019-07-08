import React, { Component } from 'react';
import './App.css';
import { Router } from "@reach/router";
import ArticlesPage from './components/articles/ArticlesPage';
import SingleArticlePage from './components/articles/SingleArticlePage';
import SingleTopicPage from './components/topics/SingleTopicPage';
import NavBar from './components/navbar/NavBar';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, withStyles, Container } from '@material-ui/core';
import ErrorPage from './components/errors/ErrorPage';
import ProfilePage from './components/user/ProfilePage';

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

const styles = theme => ({
  root: {
    alignContent: "center"
  }
})

class App extends Component {
  state = {
    loggedInUser: null,
    error: false,
  }

  componentDidMount() {
    if (localStorage.getItem("loggedInUser"))
      this.loginUser(localStorage.getItem("loggedInUser"))
  }

  render() {
    const { loggedInUser, error } = this.state;
    const { classes } = this.props;
    if (error) return (<ErrorPage error={error} />)
    return (
      <ThemeProvider theme={theme}>
        <Container className={classes.root}>
          <div className="App">
            <NavBar
              loginUser={this.loginUser}
              loggedInUser={loggedInUser}
              logoutUser={this.logoutUser}
            />
            <Router>
              <ArticlesPage loggedInUser={loggedInUser} path="/" />
              <SingleArticlePage loggedInUser={loggedInUser} path="/articles/:article_id" />
              <SingleTopicPage path="/topics/:slug" />
              {loggedInUser && <ProfilePage loggedInUser={loggedInUser} path="/profile/:username" />}
              <ErrorPage default />
            </Router>
          </div>
        </Container>
      </ThemeProvider>
    );
  }

  loginUser = (username) => {
    this.setState({ loggedInUser: username })
    localStorage.setItem('loggedInUser', username)
  }

  logoutUser = () => {
    this.setState(prevState => {
      return { loggedInUser: (prevState.loggedInUser = "") }
    })
  }
}


export default withStyles(styles)(App);

import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import ArticlesPage from './components/articles/ArticlesPage';
import SingleArticlePage from './components/articles/SingleArticlePage';



function App() {
  return (
    <div className="App">
    <Router>
    <ArticlesPage path="/"/>
    <SingleArticlePage path="/articles/:article_id" />
    </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import ArticlesPage from './components/articles/ArticlesPage';



function App() {
  return (
    <div className="App">
    <Router>
    <ArticlesPage path="/"/>
    </Router>
    </div>
  );
}

export default App;

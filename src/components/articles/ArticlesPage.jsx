import React, { Component } from 'react'
import { getArticles, sortArticles } from '../../api';
import ArticlesList from './ArticlesList';
import SortArticles from './SortArticles';


export default class ArticlesPage extends Component {
    state = {
        articles: null,
        sortBy: ''
    }
    componentDidMount() {
        getArticles()
            .then(articles => {
                this.setState({ articles: articles })
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.sortBy !== this.state.sortBy) {
            sortArticles(this.state.sortBy)
                .then(articles => {
                    this.setState({ articles })
                })
        }
    }

    render() {
        const { articles } = this.state
        const { loggedInUser } = this.props
        return (
            <div>
                <SortArticles handleChange={this.handleChange} />
                {loggedInUser && <p>You've Been Logged In!</p>}
                {articles && <ArticlesList articles={articles} />}
            </div>
        )
    }
    handleChange = event => {
        if (event.target.value) {
            this.setState({ sortBy: event.target.value })
        }
    }
}
import React, { Component } from 'react'
import { getArticles, sortArticles, orderArticles } from '../../api';
import ArticlesList from './ArticlesList';
import SortArticles from './SortArticles';
// import OrderArticles from './OrderArticles';


export default class ArticlesPage extends Component {
    state = {
        articles: null,
        sortBy: '',
        order: '',
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
        } else {
            if (prevState.order !== this.state.order) {
                orderArticles(this.state.order)
                    .then(articles => {
                        this.setState({ articles })
                    })
            }
        }
    }

    render() {
        const { articles, sortBy } = this.state

        return (
            <div>
                <SortArticles handleChange={this.handleChange} sortBy={sortBy} />
                {articles && <ArticlesList articles={articles} />}
            </div>
        )
    }
    handleChange = event => {
        if (event.target.value) {
            this.setState({ [event.target.name]: event.target.value })
        }
    }
}
import React, { Component } from 'react'
import { getArticlesByTopic, sortArticles } from '../../api';
import ArticleCard from '../articles/ArticleCard';
import ArticlesList from '../articles/ArticlesList';
import SortArticles from '../articles/SortArticles';

export default class TopicArticlesList extends Component {
    state = {
        articles: [],
        sortBy: ''
    }

    componentDidMount() {
        getArticlesByTopic(this.props.slug)
            .then(articles => {
                this.setState({ articles })
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.slug !== this.props.slug) {
            getArticlesByTopic(this.props.slug)
                .then(articles => {
                    this.setState({ articles })
                })
        } else {
            if (prevState.sortBy !== this.state.sortBy) {
                sortArticles(this.state.sortBy)
                    .then(articles => {
                        this.setState({ articles })
                    })
            }
        }
    }


    render() {
        const { articles } = this.state
        return (
            <div>
                {/* {articles.map(article => {
                    return (
                        <ArticleCard key={article.article_id} article={article} />
                    )
                })} */}
                <SortArticles handleChange={this.handleChange} />
                <ArticlesList articles={articles} />
            </div>
        )
    }

    handleChange = event => {
        if (event.target.value) {
            this.setState({ sortBy: event.target.value })
        }
    }
}
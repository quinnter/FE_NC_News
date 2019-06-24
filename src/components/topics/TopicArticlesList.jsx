import React, { Component } from 'react'
import { getArticlesByTopic } from '../../api';
import ArticleCard from '../articles/ArticleCard';

export default class TopicArticlesList extends Component {
    state = {
        articles: []
    }

    componentDidMount() {
        getArticlesByTopic(this.props.slug)
            .then(articles => {
                this.setState({ articles })
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.articles !== this.state.articles) { 
            getArticlesByTopic(this.props.slug)
                .then(articles => {
                    this.setState({ articles })
                })
        }
    }

    render() {
        const { articles } = this.state
        return (
            <div>
                {articles.map(article => {
                    return (
                        <ArticleCard key={article.article_id} article={article} />
                    )
                })}
            </div>
        )
    }
}
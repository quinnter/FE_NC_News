import React, { Component } from 'react'
import { getArticleById, patchArticleVote } from '../../api';
import ArticleCard from './ArticleCard';
import CommentsList from '../comments/CommentsList';
import ErrorPage from '../errors/ErrorPage';

export default class SingleArticlePage extends Component {
    state = {
        article: null,
        voteChange: 0,
        error: false
    }

    componentDidMount() {
        getArticleById(this.props.article_id)
            .then(article => {
                this.setState({ article })
            })
            .catch(error =>
                this.setState({ error })
            )
    }

    render() {
        const { article, voteChange, error } = this.state;
        const { loggedInUser } = this.props;
        if (error) return (<ErrorPage error={error} />)
        return (
            <div>
                {article && <ArticleCard
                    article={article}
                    voteChange={voteChange}
                    handleVote={this.handleVote}
                />}
                <CommentsList article_id={this.props.article_id} loggedInUser={loggedInUser} />
                {/* if error state show whatever, better here for styling */}
            </div>
        )
    }

    handleVote = (direction) => {
        patchArticleVote(this.props.article_id, direction)
            .catch(err => {
                this.setState((prevState) => {
                    return { voteChange: prevState.voteChange - direction }
                })
            })
        this.setState((prevState) => {
            return { voteChange: prevState.voteChange + direction }
        })
    }

}
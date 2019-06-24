import React, { Component } from 'react'
import { getArticleById, patchArticleVote } from '../../api';
import ArticleCard from './ArticleCard';
import CommentsList from '../Comments/CommentsList';
import IconButton from '@material-ui/core/IconButton';
import ThumbUp from "@material-ui/icons/ThumbUp";
import ThumbDown from "@material-ui/icons/ThumbDown";


export default class SingleArticlePage extends Component {
    state = {
        article: null,
        voteChange: 0,
    }

    componentDidMount() {
        getArticleById(this.props.article_id)
            .then(article => {
                this.setState({ article })
            })
    }

    render() {
        const { article, voteChange } = this.state;
        const { loggedInUser } = this.props;
        return (
            <div>
                {article && <ArticleCard article={article} voteChange={voteChange} />}
                <IconButton disabled={voteChange === 1} onClick={() => this.handleVote(1)}> <ThumbUp /> </IconButton>
                <IconButton disabled={voteChange === -1} onClick={() => this.handleVote(-1)}> <ThumbDown /> </IconButton>
                <CommentsList article_id={this.props.article_id} loggedInUser={loggedInUser}/>
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
import React from 'react'
import { Link } from "@reach/router";
import { withStyles, Grid, IconButton } from '@material-ui/core';
import ThumbUp from "@material-ui/icons/ThumbUp";
import ThumbDown from "@material-ui/icons/ThumbDown";
import PropTypes from 'prop-types';

const styles = theme => ({
    border: {
        maxWidth: 900,
        background: "whitesmoke",
        border: 0,
        borderRadius: 5,
        boxShadow: '0 3px 5px 2px lightgrey',
        padding: "10px",
        margin: "10px"
    },
    row1: {
        padding: "10px"
    },
    body: {
        background: "white"
    }
})

const ArticleCard = ({ article, voteChange = 0, classes, handleVote }) => {
    return (
        <div className={classes.border}>
            <Grid container spacing={2} direction="column">
                <Grid item container direction="row" justify="space-between" className={classes.row1}>
                    <Grid item>
                        <Link to={`/articles/${article.article_id}`}>
                            <h2>{article.title}</h2>
                        </Link>
                    </Grid>
                    <Grid item>
                        <h3>By: {article.author}</h3>
                    </Grid>
                </Grid>
                <Grid item className={classes.body}>
                    <p>{article.body}</p>
                </Grid>
                <Grid item container direction="row" justify="space-between">
                    <Grid item>
                        <h4>Comments: {article.comment_count}</h4>
                    </Grid>
                    <Grid item>
                        <h4>{article.votes + voteChange}</h4>
                    </Grid>
                    <Grid item>
                        <IconButton disabled={voteChange === 1} onClick={() => handleVote(1)}> <ThumbUp /></IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton disabled={voteChange === -1} onClick={() => handleVote(-1)}> <ThumbDown /></IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )

}

ArticleCard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ArticleCard);


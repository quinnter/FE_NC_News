import React from 'react'
import { Link } from "@reach/router";
import { withStyles, Grid, IconButton, Icon, Typography } from '@material-ui/core';
import ThumbUp from "@material-ui/icons/ThumbUp";
import ThumbDown from "@material-ui/icons/ThumbDown";
import Comment from "@material-ui/icons/Comment";

const styles = theme => ({
    root: {
        maxWidth: 900,
        padding: "4px 4px",
    },
    row1: {
        padding: "10px"
    },
    voting: {
        maxWidth: 115,
    },
    comments: {
        maxWidth: 60,
    },
    body: {
        padding: "10px",
    },
    title: {
        textDecoration: "none",
    }
})


const ArticleCard = ({ article, voteChange = 0, classes, handleVote, onSinglePage }) => {
    return (
        <div className={classes.root}>
            <Grid container spacing={2} direction="column" className={classes.body}>
                <Grid item container direction="row">
                    <Typography variant="subtitle2" color="textSecondary">By: {article.author} • {article.created_at} </Typography>
                </Grid>
                <Grid item container direction="row" justify="space-between" className={classes.row1}>
                    <Grid item>
                        <Link to={`/articles/${article.article_id}`} >
                            <Typography variant="h5" align="left" className={classes.title}><strong>{article.title}</strong></Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align="left">{article.body}</Typography>
                </Grid>
                <Grid item container direction="row" justify="space-between" alignItems="center">
                    <Grid item container direction="row" alignItems="center" className={classes.comments} justify="space-evenly">
                        <Grid item>
                            <Icon><Comment /> </Icon>
                        </Grid>
                        <div></div>
                        <Grid item>
                            <Typography variant="subtitle2"> {article.comment_count}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" className={classes.voting} alignItems="center" justify="space-evenly">
                        <Grid item>
                            <Typography variant="subtitle2">{article.votes + voteChange}</Typography>
                        </Grid>
                        {onSinglePage &&
                            <>
                                <Grid item>
                                    <IconButton disabled={voteChange === 1} onClick={() => handleVote(1)}> <ThumbUp /></IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton disabled={voteChange === -1} onClick={() => handleVote(-1)}> <ThumbDown /></IconButton>
                                </Grid>
                            </>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )

}

export default withStyles(styles)(ArticleCard);


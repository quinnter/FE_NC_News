import React from 'react'
import { Link } from "@reach/router";
import { withStyles, Grid } from '@material-ui/core';
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

const ArticleCard = ({ article, voteChange = 0, classes }) => {
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
                <Grid item className={classes.body} justify="center">
                    <p>{article.body}</p>
                </Grid>
                <Grid item>
                    <h4>{article.votes + voteChange}</h4>
                </Grid>
            </Grid>
        </div>
    )
}

{/* <Grid container spacing={2}>
    <Grid item>
        <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
        </ButtonBase>
    </Grid>
    <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                    Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    ID: 1030114
                </Typography>
                </Grid>
                <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    Remove
                </Typography>
                </Grid>
        </Grid>
        <Grid item>
            <Typography variant="subtitle1">$19.00</Typography>
        </Grid>
    </Grid>
</Grid> */}

ArticleCard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ArticleCard);


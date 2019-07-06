import React from 'react'
import ArticleCard from './ArticleCard';
import { Divider, withStyles } from '@material-ui/core';

const styles = theme => ({
    divider: {
        height: 10,
        margin: 4,
        color: "white"
    }
})

function ArticlesList({ articles, classes }) {
    return (
        <div>
            {articles.map(article => {
                return (
                    <>
                        <ArticleCard key={article.article_id} article={article} />
                        <Divider className={classes.divider} />
                    </>
                )
            })}
        </div>
    )
}

export default withStyles(styles)(ArticlesList);
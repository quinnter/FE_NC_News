import React from 'react'
import { Link } from "@reach/router";

const ArticleCard = ({ article, voteChange = 0, classes }) => {
    return (
        <div>
            <Link to={`/articles/${article.article_id}`}>
                <h2>{article.title}</h2>
            </Link>
            <p>{article.body}</p>
            <h3>{article.author}</h3>
            <h4>{article.votes + voteChange}</h4>
        </div>
    )
}

export default ArticleCard

const baseUrl = "https://lauraq-nc-news.herokuapp.com/api"
const axios = require('axios');

export const getArticles = (query) => {
    return axios.get(`${baseUrl}/articles`, {
        params: query
    })
        .then(({ data: { articles } }) => {
            return articles
        })
}

export const sortArticles = (sortBy) => {
    return axios.get(`${baseUrl}/articles?sort_by=${sortBy}`)
        .then(({ data: { articles } }) => {
            return articles
        })
}

export const orderArticles = (order) => {
    return axios.get(`${baseUrl}/articles?order=${order}`)
        .then(({ data: { articles } }) => {
            return articles
        })
}

export const addNewComment = (article_id, commentToPost) => {
    return axios.post(`${baseUrl}/articles/${article_id}/comments`, commentToPost)
        .then(({ data: { comment } }) => {
            return comment
        })
}

export const deleteComment = (comment_id) => {
    return axios.delete(`${baseUrl}/comments/${comment_id}`)
        .then(res => console.log(res))
}

export const patchArticleVote = (article_id, direction) => {
    return axios.patch(`${baseUrl}/articles/${article_id}`, {
        inc_votes: direction
    })
        .then(({ data: { article } }) => {
            return article
        })
}

export const patchCommentVote = (comment_id, direction) => {
    return axios.patch(`${baseUrl}/comments/${comment_id}`, {
        inc_votes: direction
    })
        .then(({ data: { comment } }) => {
            return comment
        })
}

export const getArticleById = (article_id) => {
    return axios.get(`${baseUrl}/articles/${article_id}`)
        .then(({ data: { article } }) => {
            return article
        })
}

export const getCommentsById = (article_id) => {
    return axios.get(`${baseUrl}/articles/${article_id}/comments`)
        .then(({ data: { comments } }) => {
            return comments
        })
}

export const getTopic = (slug) => {
    return axios.get(`${baseUrl}/topics/${slug}`)
        .then(({ data: { topic } }) => {
            return topic
        })
}

export const getTopics = (query) => {
    return axios.get(`${baseUrl}/topics`, {
        params: query
    })
        .then(({ data: { topics } }) => {
            return topics
        })
}

export const getArticlesByTopic = (slug) => {
    return axios.get(`${baseUrl}/articles?topic=${slug}`)
        .then(({ data: { articles } }) => {
            return articles
        })
}

export const getUser = (username) => {
    return axios.get(`${baseUrl}/users/${username}`)
        .then(({ data: { user } }) => {
            return user
        })
}
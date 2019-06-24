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
    .then(({data: {articles}}) => {
        return articles
    })
}
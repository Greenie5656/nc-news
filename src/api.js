import axios from "axios";

const api = axios.create({
    baseURL: "https://my-nc-news-7qlo.onrender.com/api"
})

const getArticles = () => {
    return api.get("/articles").then(({ data }) => {
        return data.articles
    })
}

const getArticleById = (article_id) => {
    return api.get(`/articles/${article_id}`).then(({ data }) => {
        return data.article
    })
}

const getArticleComments = (article_id) => {
    return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
        return data.comments;
    })
}

export { getArticles, getArticleById, getArticleComments }
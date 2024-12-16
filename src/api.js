import axios from "axios";

const api = axios.create({
    baseURL: "https://my-nc-news-7qlo.onrender.com/api"
})

const getArticles = () => {
    return api.get("/articles").then(({ data }) => {
        return data.articles
    })
}

export { getArticles }
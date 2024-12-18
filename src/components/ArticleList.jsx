import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";


const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { topic } = useParams();

    useEffect(() => {
        setIsLoading(true)
        getArticles()
        .then((articles) => {
            if (topic){
                const filteredArticles = articles.filter((article) => article.topic === topic);
                setArticles(filteredArticles)
            } else {
            setArticles(articles);
            }
            setIsLoading(false);
        })
        .catch((error) => {  
            console.log('Error:', error)
            setIsLoading(false);
        });
    }, [topic]);

    if (isLoading) return <p>Loading articles...</p>;

    return (
        <main className="articles-container">
            <h2>{topic ? `${topic.charAt(0).toUpperCase() + topic.slice(1)} Articles` : "Latest Articles"}</h2>
            <div className="articles-grid">
                {articles.map((article) => (
                    <ArticleCard key={article.article_id} article={article} />
                ))}
            </div>

        </main>
    );
};

export default ArticleList;
import { useState, useEffect } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";


const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        getArticles()
        .then((articles) => {
            setArticles(articles);
            setIsLoading(false);
        })
        .catch((error) => {  
            console.log('Error:', error)
            setIsLoading(false);
        });
    }, []);

    if (isLoading) return <p>Loading articles...</p>;

    return (
        <main className="articles-container">
            <h2>Latest Articles</h2>
            <div className="articles-grid">
                {articles.map((article) => (
                    <ArticleCard key={article.article_id} article={article} />
                ))}
            </div>

        </main>
    );
};

export default ArticleList;
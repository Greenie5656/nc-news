import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";


const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { topic } = useParams();
    const [sortBy, setSortBy] = useState("")
    const [order, setOrder] = useState("desc"); 
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        const queryParams = {
            ...(sortBy && { sort_by: sortBy}),
            ...(order && { order: order })
        };
   
        getArticles(queryParams)
            .then((articles) => {
            if (topic) {
                const filteredArticles = articles.filter((article) => article.topic === topic);
                if (filteredArticles.length === 0) {
                    setError(`Topic "${topic}" not found`);
                }
                setArticles(filteredArticles);
            } else {
                setArticles(articles);
            }
            setIsLoading(false);
            })
            .catch((error) => {
                console.log("Error", error);
                setIsLoading(false);
            });
    }, [topic, sortBy, order]);

    if (isLoading) return <p>Loading articles...</p>;
    if (error) return <p className="error-message">{ error }</p>

    return (
        <main className="articles-container">
            <div className="sort-controls">
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="">No Sort</option>
                        <option value="created_at">Sort by Date</option>
                        <option value="comment_count">Sort by Comments</option>
                        <option value="votes">Sort by Votes</option>
                </select>

                <select
                    value={order}
                    onChange={(e) => setOrder(e.target.value)}
                    >
                        <option value="desc">Descending</option>
                        <option value="asc">Ascending</option>
                </select>
            </div>

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
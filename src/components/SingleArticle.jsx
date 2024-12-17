import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";

const SingleArticle = () => {
    const [article, setArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { article_id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        getArticleById(article_id)
        .then((articleData) => {
            setArticle(articleData);
            setIsLoading(false);
        });
    }, [article_id]);

    if (isLoading) return <p>Loading article...</p>

    return (
        <main className="single-article">
            <article>
                <img src={article.article_img_url}
                alt=""
                className="article-full-image" />
                <h2>{article.title}</h2>
                <p className="article-info">By {article.author}</p>
                <p className="article-body">{article.body}</p>
                <div className="article-stats">
                    <span>💬 {article.comment_count}</span>
                    <span> 👍 {article.votes}</span>
                </div>

            </article>

        </main>
    )
}

export default SingleArticle;
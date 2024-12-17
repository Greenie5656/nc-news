import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, updateArticleVotes } from "../api";
import Comments from "./Comments";

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

    const handleVote = (increment) => {
        setArticle((currentArticle) => ({
            ...currentArticle, votes: currentArticle.votes +1
        }));

        updateArticleVotes(article_id, increment)
        .then((updateArticle) => {
            setArticle(updateArticle)
        })
        .catch((error) => {
            setArticle((currentArticle) => ({
                ...currentArticle,
                votes: currentArticle.votes -1
            }));
            console.log("Failed to update vote", error)
        })
    }

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
                    <button 
                        onClick={() => handleVote(1)}
                        className="vote-button">
                        Vote 👍
                    </button>
                
                </div>
            </article>

            <div>
                <h2>Comments sectioon</h2>
                <Comments article_id={article_id} />
            </div>

        </main>
    )
}

export default SingleArticle;
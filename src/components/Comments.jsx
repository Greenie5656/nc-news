import{ useState, useEffect } from "react";
import { getArticleComments } from "../api";

const Comments = ({ article_id }) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        getArticleComments(article_id)
        .then((commentsData) => {
            setComments(commentsData);
            setIsLoading(false);
        });
    }, [article_id]);

    if (isLoading) return <p>Loading comments...</p>;

    return (
        <section className="comments-section">
            <h3>Comments ({ comments.length })</h3>
            {comments.length === 0 ? (
                <p>No Comments Yet!</p>
            ) : (
                <ul className="comments-list">
                    {comments.map((comment) => {
                        return(
                            <li key={ comment.comment_id } className="comment-card">
                            <p className="comment-body">{ comment.body }</p>
                            <div className="comment-info">
                                <span>By { comment.author }</span>
                                <span>👍 { comment.votes } </span>
                            </div>
                            </li>
                        )
                    })}
                </ul>
            )}

        </section>
    )

};

export default Comments;
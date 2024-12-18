import{ useState, useEffect } from "react";
import { getArticleComments, deleteComment } from "../api";
import CommentForm from "./CommentForm";


const Comments = ({ article_id }) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isDeleting, setIsDeleting] = useState(null);

    useEffect(() => {
        setIsLoading(true);

        getArticleComments(article_id)
        .then((commentsData) => {
            setComments(commentsData);
            setIsLoading(false);
        });
    }, [article_id]);

    const handleNewComment = (newComment) => {
        setComments((currentComments) => [newComment, ...currentComments])
    }

    const handleDeleteComment = (comment_id) => {
        setIsDeleting(comment_id);
        deleteComment(comment_id)
        .then(() => {
            setComments((currentComments) => 
            currentComments.filter((comment) => comment.comment_id !== comment_id));
        })
        .catch((error) => {
            console.log("Failed to delete commnet", error);
            setIsDeleting(null);
        })
    }

    if (isLoading) return <p>Loading comments...</p>;

    return (
        <section className="comments-section">
            <CommentForm
            article_id={article_id} 
            onCommentPosted={handleNewComment}
            />
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
                                {comment.author === "jessjelly" && (
                                    <button onClick={() => handleDeleteComment(comment.comment_id)} className="delete-button">
                                        {isDeleting === comment.comment_id ? "Deleting..." : "'🗑️ Delete'"}
                                    </button>
                                )}
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
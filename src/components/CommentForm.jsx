import { useState } from "react";
import { postComment } from "../api";

const CommentForm = ({ article_id, onCommentPosted}) => {
    const [commentText, setCommentText] = useState("");

    const handleChange = (e) => {
        setCommentText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const commentData = {
            username: "jessjelly",
            body: commentText
        };

        postComment(article_id, commentData)
            .then((newComment) => {
                onCommentPosted(newComment);
                setCommentText("");
            });
      
    };



    return(
        <form className="comment-form" onSubmit={handleSubmit}>
            <label>
                Leave a comment
                <input type="text" onChange={handleChange} value={commentText} className="comment-input"/>
            </label>
            <button type="submit" className="submit-button">Post</button>
        </form>
    );
};

export default CommentForm;
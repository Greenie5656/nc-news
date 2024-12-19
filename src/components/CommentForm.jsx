import { useState } from "react";
import { postComment } from "../api";

const CommentForm = ({ article_id, onCommentPosted}) => {
    const [commentText, setCommentText] = useState("");
    const [error, setError] = useState (null); 


    const handleChange = (e) => {
        setCommentText(e.target.value);
        setError(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!commentText.trim()){
            setError("Comment cannot be empty")
            return;
        }

        const commentData = {
            username: "jessjelly",
            body: commentText
        };

        postComment(article_id, commentData)
            .then((newComment) => {
                onCommentPosted(newComment);
                setCommentText("");
                setError(null);
            })
            .catch((error) => {
                setError("Failed topost comment. Please try again. ");
            });
      
    };



    return(
        <form className="comment-form" onSubmit={handleSubmit}>
            {error ? <p className="error-message">{ error }</p> : null} 
            <label>
                Leave a comment
                <input type="text" onChange={handleChange} value={commentText} className="comment-input"/>
            </label>
            <button type="submit" className="submit-button">Post</button>
        </form>
    );
};

export default CommentForm;
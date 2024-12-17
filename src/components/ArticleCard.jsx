import { useNavigate } from "react-router-dom";

const ArticleCard = ({ article }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/articles/${article.article_id}`);
    }



    return (

        <li className="article-card" onClick={handleClick}>
            <img src={article.article_img_url} alt="" />
            <h3>{article.title}</h3>
            <p>By {article.author}</p>
            <span>💬 {article.comment_count}</span>
            <span>👍 {article.votes}</span>
        </li>
    
    );
};

export default ArticleCard;
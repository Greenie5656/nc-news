const ArticleCard = ({ article }) => {
    return (
        <li className="article-card">
            <img src={article.article_img_url} alt="" />
            <h3>{article.title}</h3>
            <p>By {article.author}</p>
            <span>💬 {article.comment_count}</span>
            <span>👍 {article.votes}</span>
        </li>
    );
};

export default ArticleCard;
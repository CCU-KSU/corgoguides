import { Link } from "react-router-dom";

const FeedEntry = ({id, title, description}) => {
    return (
        <>
            <Link className="feed-entry" to={`/app/article/${id}`}>
                <div className="feed-entry-title">{title}</div>
                <div className="feed-entry-description">{description}</div>
            </Link>
        </>
    );
}
 
export default FeedEntry;
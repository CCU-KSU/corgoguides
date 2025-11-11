import { Link } from "react-router-dom";

const FeedEntry = ({id, title, description, setWorkingId}) => {

    const handleClick = () => {
        setWorkingId(id)
    }

    return (
        <>
            <div className="feed-entry" onClick={handleClick}>
                <div className="feed-entry-title">{title}</div>
                <div className="feed-entry-description">{description}</div>
            </div>
        </>
    );
}
 
export default FeedEntry;
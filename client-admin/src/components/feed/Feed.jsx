import { useState, useEffect } from "react";
import { apiCall } from "../../utils/API";

import FeedEntry from "./FeedEntry";
import SearchBar from "../searchbar/SearchBar";

const Feed = ({setWorkingId, refreshKey}) => {
    const [articles, setArticles] = useState([]);
    const [feedQuery, setFeedQuery] = useState('');

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const a = await apiCall('/content/articles');
                setArticles(a);
            } catch (error) {
                console.error(error);
            }
        }
        fetchArticles()
    }, [refreshKey]);

    return (
        <>
            <SearchBar
                id={'feedSearch'}
                value={setFeedQuery}
                searchItem={'Guides'}
            />
            <div className="feed">
                {articles.map((article) => (
                    <FeedEntry 
                        key={article.id}
                        id={article.id}
                        title={article.title}
                        description={article.description}
                        setWorkingId={setWorkingId}
                    />
                ))}
            </div>
        </>
    );
}
 
export default Feed;
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import ReactMarkdown from 'react-markdown'; 
import ButtonImg from "../button/ButtonImg";
import ButtonIconBookmark from "../../assets/icons/bookmark-s2-svgrepo-com.svg"
import ButtonIconBookmarkFilled from "../../assets/icons/bookmark-s1-svgrepo-com.svg"

import { apiCall } from "../../utils/API";

const ArticlePage = ({ setHeader }) => {
    const { id } = useParams();
    const [article, setArticle] = useState({title: "", body:""});
    const { currentUser } = useAuth();
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        setHeader('Article', false);

        const fetchArticle = async () => {
            try {
                const a = await apiCall(`/content/articles/${id}`);
                setArticle(a);
                if (currentUser) {
                    const profile = await apiCall(`/user/current`);
                    if (profile && profile.bookmarks && profile.bookmarks.includes(id)) {
                        setIsBookmarked(true);
                    }
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchArticle()

        return () => {
            setHeader('Back', true);
        };
    }, [setHeader, id, currentUser]);

    const handleBookmarkToggle = async (method) => {
        if (!currentUser) return;
        try {
            await apiCall(`/user/bookmark`,{
                method: method,
                body: {
                    articleId: id,
                }
            });
            setIsBookmarked(method === 'POST')
        } catch (error) {
            console.error("Failed to modify bookmark:", error);
        }
    }

    const bookmark = async () => {
        if (isBookmarked) {
            handleBookmarkToggle('DELETE'); 
        } else {
            handleBookmarkToggle('POST');
        }
    }

    return (
        <>
            <div className="article-page">
                <div className="article-page-header">
                    <div className="article-page-header-title">
                        <h1>{article.title}</h1>
                        {currentUser && <ButtonImg imgRef={isBookmarked? ButtonIconBookmarkFilled:ButtonIconBookmark} action={bookmark}/>}
                    </div>
                    <div className="article-page-header-metadata">
                        <div className="article-page-header-metadata-tag-list">
                            <h3>Tagged Interests:</h3>
                            {article.tags && article.tags.map((tag) => (
                                <span key={tag} className="article-page-header-metadata-tag-item">{tag}</span>
                            ))}
                        </div>
                        <div className="article-page-header-metadata-tag-list">
                            <h3>Applies to:</h3>
                            {article.devices && article.devices.map((devices) => (
                                <span key={devices} className="article-page-header-metadata-tag-item">{devices}</span>
                            ))}
                        </div>
                    </div>
                    <div className="article-page-divider"/>
                </div>
                
                <div className="article-page-body">
                    <ReactMarkdown>
                        {article.body}
                    </ReactMarkdown>
                </div>
            </div>
        </>
    );
}
 
export default ArticlePage;
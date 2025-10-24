import { useState } from "react";

const Feed = () => {

    const [articles, setArticles] = useState([
        {
            id: 1,
            title: 'Title 01',
            desc: 'Wavy words!'
        },
        {
            id: 2,
            title: 'Title 02',
            desc: 'Flat words!'
        }
    ]);

    return (
        <>
            {articles.map((article) => (
                <div className="article" key={article.id}>
                    <h2>{article.title}</h2>
                    <p>{article.desc}</p>
                </div>
            ))}
        </>
    );
}
 
export default Feed;
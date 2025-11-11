import { useState, useEffect } from "react";
import { apiCall } from "../../utils/API";

import ReactMarkdown from 'react-markdown';

import Feed from "../../components/feed/Feed";
import Form from "../../components/form/Form"
import InputSingleLine from "../../components/input/InputSingleLine";
import InputMultiLine from "../../components/input/InputMultiLine"
import InputSelectBig from "../../components/input/InputSelectBig"
import Button from "../../components/button/Button";
import ButtonExtLink from "../../components/button/ButtonExtLink";

const ArticlesView = () => {
    
    const [workingId, setWorkingId] = useState('');
    const [article, setArticle] = useState(null);

    const [articleTitle, setArticleTitle] = useState(null);
    const [articleDescription, setArticleDescription] = useState(null);
    const [articleBody, setArticleBody] = useState(null);
    const [articleTags, setArticleTags] = useState([]);
    const [articleDevices, setArticleDevices] = useState([]);

    const [phoneMakeOptions, setPhoneMakeOptions] = useState([]);
    const [interestOptions, setInterestOptions] = useState([]);

    const [isSaved, setIsSaved] = useState(true);
    const [refreshKey, setRefreshKey] = useState(0);

    const handleFeedEntryClick = (newId) => {
        if (isSaved) {
            setWorkingId(newId);
            setIsSaved(false); 
        } else {
            alert("You have unsaved changes. Please save or discard them before selecting a new article.");
        }
    };

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const interests = await apiCall("/metadata/interests");
                const phoneMakes = await apiCall("/metadata/phoneMakes");
                setInterestOptions(interests.interests);
                setPhoneMakeOptions(phoneMakes.makes);
            } catch (error) {
                console.error(error);
            }
        };

        fetchOptions();
    }, []);

    useEffect(() => {
        if (workingId) {
            console.log(workingId);
            const fetchArticle = async () => {
                try {
                    const a = await apiCall(`/content/articles/${workingId}`);
                    setArticle(a);
                    console.log(a);
                    setArticleTitle(a.title);
                    setArticleDescription(a.description);
                    setArticleBody(a.body);
                    setArticleTags(a.tags);
                    setArticleDevices(a.devices);
                } catch (error) {
                    console.error(error);
                }
            }

            fetchArticle()
        }
    }, [workingId]);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (workingId) {
                await apiCall(`/content/articles/${workingId}`, {
                    method: "PATCH",
                    body: {
                        title: articleTitle,
                        description: articleDescription,
                        tags: articleTags,
                        devices: articleDevices,
                        body: articleBody
                    }
                })
            } else {
                await apiCall("/content/articles", {
                    method: "POST",
                    body: {
                        title: articleTitle,
                        description: articleDescription,
                        tags: articleTags,
                        devices: articleDevices,
                        body: articleBody
                    }
                })
            }
            clearForm();
            setRefreshKey(prevKey => prevKey + 1);
        } catch (error) {
            console.log(error);
        }
    };

    const handleReset = (e) => {
        e.preventDefault();
        clearForm();
    };

    const clearForm = () => {
        setArticleTitle(null);
        setArticleDescription(null);
        setArticleBody(null);
        setArticleTags([]);
        setArticleDevices([]);
        setWorkingId('');
        setIsSaved(true);
    }

    const handleChange = (e) => {
        setIsSaved(false);
    }

    return (
        <>
            <div className="panel-layout">
                <div className="panel-layout-fixed">
                    <Feed setWorkingId={handleFeedEntryClick} refreshKey={refreshKey}/>
                </div>
                <div className="panel-divider"/>
                <div className="panel-layout-flex">
                    <Form onSubmit={handleSubmit} onReset={handleReset} onChange={handleChange}>
                        <InputMultiLine
                            id={"aTitle"}
                            label={"Title"}
                            required={true}
                            value={setArticleTitle}
                            initialValue={articleTitle}
                            rows={1}
                            maxlength={30}
                        />
                        <InputMultiLine
                            id={"aDescription"}
                            label={"Description"}
                            required={true}
                            value={setArticleDescription}
                            initialValue={articleDescription}
                            rows={3}
                            maxlength={150}
                        />
                        <InputMultiLine
                            id={"aBody"}
                            label={"Body (Markdown Format)"}
                            required={true}
                            value={setArticleBody}
                            initialValue={articleBody}
                            rows={10}
                        />
                        <ButtonExtLink
                            link={'https://www.markdownguide.org/cheat-sheet/'}
                            label={'Markdown Cheat Sheet'}
                        />
                        <InputSelectBig
                            id={"aTags"}
                            placeholder={'-- Select --'}
                            required={true}
                            options={interestOptions}
                            value={setArticleTags}
                            initialValue={articleTags}
                            label={'Related Interests'}
                        />
                        <InputSelectBig
                            id={"aDevices"}
                            placeholder={'-- Select --'}
                            required={true}
                            options={phoneMakeOptions}
                            value={setArticleDevices}
                            initialValue={articleDevices}
                            label={'Applicable Device Makes'}
                        />
                        {!isSaved && <Button
                            label={'Save'}
                            type={'submit'}
                            action={() => {}}
                        />}
                        {!isSaved && <Button
                            label={'Clear/Start New'}
                            type={'reset'}
                            action={() => {}}
                        />}
                    </Form>
                </div>
                <div className="panel-divider"/>
                <div className="panel-layout-fixed">
                    <div className="article-preview">
                        <ReactMarkdown>
                            {articleBody? articleBody:(
                                "## Select an article on the far left to edit. \nOR \n## Start a new one in the center.\n`Changes made in \"Body\" will be reflected here.`"
                            )}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default ArticlesView;
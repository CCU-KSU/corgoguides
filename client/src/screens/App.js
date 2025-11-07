import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import Body from "../components/body/Body";
import Header from "../components/header/Header";

import NavBarV2 from "../components/navbar/NavBarV2";
import NavBarButtonV2 from "../components/navbar/NavBarButtonV2";
import NavIconGuides from "../assets/icons/book-open-svgrepo-com.svg"
import ButtonIconBookmark from "../assets/icons/bookmark-svgrepo-com.svg"
import NavIconApps from "../assets/icons/square-4-grid-svgrepo-com.svg"
import NavIconProfile from "../assets/icons/user-svgrepo-com.svg"

import Feed from "../components/feed/Feed";
import ArticlePage from "../components/article/ArticlePage";
import Bookmarks from "../components/bookmarks/Bookmarks";
import AppCatalog from "../components/appcatalog/AppCatalog";
import Profile from "../components/profile/Profile";

function App() {
	const [headerLbl, setHeaderLbl] = useState('Home')
	const [showHeader, setShowHeader] = useState(true);
	const { currentUser } = useAuth();

	const updateHeader = (newLabel, visibility = true) => {
		setHeaderLbl(newLabel);
		setShowHeader(visibility)
	};

	return (
		<>
            <div className="main-body">
				{showHeader && <Header label={headerLbl}/>}
				<Body>
					<Routes>
						<Route path='' element={<Navigate to="feed" replace />} />
						<Route path="feed" element={
							<>
								<Feed setHeader={updateHeader}/>
							</>
						}/>
						<Route path="bookmarks" element={
							<>
								<Bookmarks setHeader={updateHeader}/>
							</>
						}/>
						<Route path="appcatalog" element={
							<>
								<AppCatalog setHeader={updateHeader}/>
							</>
						}/>
						<Route path="profile" element={
							<>
								<Profile setHeader={updateHeader}/>
							</>
						}/>
						<Route path="article/:id" element={
							<>
								<ArticlePage setHeader={updateHeader}/>
							</>
						}/>
					</Routes>
				</Body>
				<NavBarV2 baseNav={'/app'}>
					<NavBarButtonV2
						iconRef={NavIconGuides}
						navTo={'feed'}
					/>
					{currentUser && <NavBarButtonV2
						iconRef={ButtonIconBookmark}
						navTo={'bookmarks'}
					/>}
					<NavBarButtonV2
						iconRef={NavIconApps}
						navTo={'appcatalog'}
					/>
					<NavBarButtonV2
						iconRef={NavIconProfile}
						navTo={'profile'}
					/>
				</NavBarV2>
            </div>
        </>
	);
}

export default App;
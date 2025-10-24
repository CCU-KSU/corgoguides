import { useState, useEffect } from "react";
import { useNavigate, Routes, Route, Outlet, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "../components/button/Button";

import { apiCall } from "../utils/API";

function App() {
	const navigate = useNavigate();

	const { currentUser, logout } = useAuth();

	const [userData, setUserData] = useState(null);

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const p = await apiCall("/user/current");
				setUserData(p)
			} catch (error) {
				console.error(error);
			}
		};
		fetchUserData();
	}, []);

	const handleLogout = async () => {
		try {
			await logout()
			navigate("/login")
		} catch (error) {
			alert("Failed to logout!")
		}
	}

	return (
		<>
            <div className="content-center list-box">
				<Routes>
					{/* The "index" route matches the parent path: /app */}
					<Route index element={
						<>
							<h1>Hello, {userData?.firstName}!</h1>
							<Button 
								label={'Log Out'}
								action={handleLogout}
							/>
							<Link to="article" className="button">Sample Article</Link>
						</>
					}/>
					{/* Matches: /app/article */}
					<Route path="article" element={
						<>
						{/* TODO: Replace with article Component */}
							<h1>Boo!</h1>
						</>
					}/>
				</Routes>
            </div>
        </>
	);
}

export default App;
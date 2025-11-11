import { useAuth } from "../contexts/AuthContext";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "../components/header/Header";
import SubBody from "../components/bodies/SubBody";
import Button from "../components/button/Button";
import ButtonPlain from "../components/button/ButtonPlain";
import ButtonLink from "../components/button/ButtonLink";

import ArticlesView from "./subscreens/ArticlesView";
function App() {

	const { logout } = useAuth();

	const handleLogout = async () => {
		try {
			await logout()
		} catch (error) {
			alert("Failed to logout!")
		}
	}

	return (
		<>
			<Header label={"Admin Panel"}>
				<h1 className="grow">Admin Panel</h1>
				<ButtonPlain
					label={'Log Out'}
					action={handleLogout}
				/>
			</Header>
			<SubBody>
				<Routes>
					<Route path='' element={
						<>
							<div className="list-box">
								<ButtonLink
									label={"Manage Articles"}
									navTo={"articles"}
								/>
								<ButtonLink
									label={"Manage Tags"}
									navTo={"tags"}
								/>
								<ButtonLink
									label={"Manage Onboarding Tasks"}
									navTo={"checklist"}
								/>
							</div>
						</>
					} />
					<Route path="articles" element={
						<>
							<ArticlesView/>
						</>
					}/>
					<Route path="tags" element={
						<>
							<h1>B</h1>
						</>
					}/>
					<Route path="checklist" element={
						<>
							<h1>C</h1>
						</>
					}/>
				</Routes>
			</SubBody>
			
				
		</>
	);
}

export default App;

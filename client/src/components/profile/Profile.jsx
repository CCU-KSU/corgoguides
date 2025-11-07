import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { apiCall } from "../../utils/API";

import Button from "../button/Button"
import ButtonLink from "../button/ButtonLink";

import Spinner from "../affects/Spinner"; //

const Profile = ({setHeader}) => {
    const navigate = useNavigate();
    const { currentUser, logout, loading } = useAuth();
    const [userData, setUserData] = useState(null);

	useEffect(() => {
        setHeader('My Profile');
    }, [setHeader]);

	useEffect(() => {
		if (currentUser) {
			const fetchUserData = async () => {
				try {
					const p = await apiCall("/user/current");
					setUserData(p)
					console.log(p);
					if (p.onboardingStatus === false) {
						navigate("/onboarding");
					}
				} catch (error) {
					console.error(error);
				}
			};

			fetchUserData();
		}
	}, [currentUser, navigate])

	if (loading) {
		return <Spinner/>
	}

    const handleLogout = async () => {
		try {
			await logout()
		} catch (error) {
			alert("Failed to logout!")
		}
	}

	if (!currentUser) {
        return (
			<>
				<div className="content-center">
					<h2 className="text-center">Log in for a personalized experience!!</h2>
					<ButtonLink label={'Login'} navTo={"/login"}/>
				</div>
			</>
		);
    }
    
    return (
        <>
			<div className="content-center list-box">
				<Button 
					label={'Log Out'}
					action={handleLogout}
				/>
				<Button 
					label={'Delete Account'}
					action={null}
				/>
			</div>
        </>
    );
}
 
export default Profile;
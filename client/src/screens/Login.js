import InputSingleLine from "../components/input/InputSingleLine";
import Button from "../components/button/Button";
import Link1 from "../components/button/Link1";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	
	const { currentUser, login } = useAuth();

	useEffect(
		() => {
			if (currentUser) {
				navigate("/app");
			}
		}, 
		[currentUser, navigate]
	);

    async function handleSubmit(e) {
		try {
			e.preventDefault();
			await login(email, password);
			navigate("/app");
		} catch (error) {
			alert("Failed to login!")
		}
	};
	
    return (
        <>
			<div className="content-center">
				<h1 className="tab-header">Welcome Back!</h1>
				<form onSubmit={handleSubmit}>
					<div className="form-fields">
						<InputSingleLine
							id={'email'}
							type = {'email'}
							placeholder = {'Email Address'}
							required={true}
							value = {setEmail}
						/>
						<InputSingleLine
							id={'password'}
							type = {'password'}
							placeholder = {'Password'}
							required={true}
							value = {setPassword}
						/>
						<Button 
							label={'Login'}
							type={'submit'}
							action={() => {}}
						/>
						<Link1
							text={'I don\'t have an account'}
							dest={'/register'}
						/>
					</div>
				</form>
			</div>
				
        </>
    );
}
 
export default Login;
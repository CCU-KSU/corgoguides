import InputSingleLine from "../components/input/InputSingleLine";
import Button from "../components/button/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { apiCall } from "../utils/API"; 

const Register = () => {
	const navigate = useNavigate();

	const [fname, setFname] = useState('');
	const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	
	const { currentUser, register } = useAuth();

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
			await register(email, password);
			await apiCall("/user/register", {
				method: 'POST',
				body: {
					fname,
					lname
				},
			});
			// navigate("/app");
		} catch (error) {
			alert("Failed to register!")
		}
	}

    return (
        <>
			<div className="content-center">
				<form onSubmit={handleSubmit}>
					<h1 className="tab-header">Create Account</h1>
					<div className="form-fields">
						<InputSingleLine
							type = {'text'}
							placeholder = {'First Name'}
							required={true}
							value = {setFname}
						/>
						<InputSingleLine
							type = {'text'}
							placeholder = {'Last Name'}
							required={true}
							value = {setLname}
						/>
						<InputSingleLine
							type = {'email'}
							placeholder = {'Email Address'}
							required={true}
							value = {setEmail}
						/>
						<InputSingleLine
							type = {'password'}
							placeholder = {'Password'}
							required={true}
							value = {setPassword}
						/>
						<Button 
							label={'Register'}
							action={() => {}}
						/>
					</div>
				</form>
			</div>
				
        </>
    );
}
 
export default Register;
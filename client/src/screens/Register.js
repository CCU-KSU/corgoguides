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
		// TODO: Ensure fname, and lname fields are filled
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
			console.error("Error", error)
		}
	}

    return (
        <>
			<div className="content-center">
				<h1 className="tab-header">Create Account</h1>
				<form onSubmit={handleSubmit}>
					<div className="form-fields">
						<InputSingleLine
							id={'fname'}
							type = {'text'}
							placeholder = {'First Name'}
							required={true}
							value = {setFname}
						/>
						<InputSingleLine
							id={'lname'}
							type = {'text'}
							placeholder = {'Last Name'}
							required={true}
							value = {setLname}
						/>
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
							label={'Register'}
							type={'submit'}
							action={() => {}}
						/>
					</div>
				</form>
			</div>
				
        </>
    );
}
 
export default Register;
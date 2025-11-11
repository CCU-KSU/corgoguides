import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import SubBody from "../components/bodies/SubBody"
import Form from "../components/form/Form";
import InputSingleLine from "../components/input/InputSingleLine";
import Button from "../components/button/Button"

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	
	const { currentUser, login } = useAuth();

    useEffect(() => {
        if (currentUser) {
            navigate("/app");
        }
    }, [currentUser, navigate]);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await login(email, password);
            navigate("/app");
        } catch (error) {
            alert("Failed to login!")
            console.log(error);
        }
    };

    return (
        <>
            <SubBody>
                <Form onSubmit={handleSubmit}>
                    <h1 className="text-center">Admin Login</h1>
                    <InputSingleLine
                        id={'email'}
                        type={'email'}
                        placeholder={'Email Address'}
                        required={true}
                        value={setEmail}
                    />
                    <InputSingleLine
                        id={'password'}
                        type={'password'}
                        placeholder={'Password'}
                        required={true}
                        value={setPassword}
                    />
                    <Button
                        label={'Login'}
                        type={'submit'}
                        action={() => {}}
                    />
                </Form>
            </SubBody>
        </>
    );
}
 
export default Login;
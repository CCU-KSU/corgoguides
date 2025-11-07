import Button from "../components/button/Button";
import InputSingleLine from "../components/input/InputSingleLine";
import InputSelect from "../components/input/InputSelect";
import InputSelectBig from "../components/input/InputSelectBig";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiCall } from "../utils/API";

const Onboarding = () => {
    const navigate = useNavigate();

    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [genderOptions, setGenderOptions] = useState([]);
    const [phoneMake, setPhoneMake] = useState('');
    const [phoneMakeOptions, setPhoneMakeOptions] = useState([]);
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [interestOptions, setInterestOptions] = useState([]);

    useEffect(() => {
        const onboardingPrep = async () => {
            try {
                const p = await apiCall("/user/current");
                if (p.onboardingStatus === true) {
                    navigate("/app");
                } else {
                    const interests = await apiCall("/metadata/interests");
                    const genders = await apiCall("/metadata/genders");
                    const phoneMakes = await apiCall("/metadata/phoneMakes");
                    setInterestOptions(interests.interests);
                    setGenderOptions(genders.genders);
                    setPhoneMakeOptions(phoneMakes.makes);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        onboardingPrep();
    }, [navigate]);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await apiCall("/user/profile", {
                method: 'POST',
                body: {
                    gender: gender,
                    age: age,
                    interests: selectedInterests,
                    onboardingStatus: true,
                    phoneMake: phoneMake,
                }
            });
            navigate("/app");
        } catch (error) {
            alert('Something went wrong!');
            console.error('Error', error);
        }
	}

    return (
        <>
            <div className="content-center">
                <h1 className="tab-header">Lets get you settled in!</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-fields">
                        <InputSingleLine
                            id={'age'}
                            type={'number'}
                            placeholder={'##'}
                            required={true}
                            value={setAge}
                            label={'How old are you?'}
                        />
                        <InputSelect
                            id={'gender'}
                            required={true}
                            placeholder={'Select'}
                            value={setGender}
                            options={genderOptions}
                            label={'What\'s your gender?'}
                        />
                        <InputSelect
                            id={'gender'}
                            required={true}
                            placeholder={'Select'}
                            value={setPhoneMake}
                            options={phoneMakeOptions}
                            label={'What\'s the make of your smartphone? (eg. Samsung, Apple, ...)'}
                        />
                        <InputSelectBig
                            id={'selectedInterests'}
                            placeholder={'-- Select --'}
                            required={true}
                            options={interestOptions}
                            value={setSelectedInterests}
                            label={'What are your interests? Hint: You can select multiple'}
                        />
                        <Button 
                            label={'Next'}
                            type={'submit'}
                            action={() => {}}
                        />
                    </div>  
                </form>
            </div>
        </>
    );
}
 
export default Onboarding;
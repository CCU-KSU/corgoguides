const ButtonPlain = ({label, action, type}) => {
    return (
        <>
            <button type={type? type:"button"} className={`button-plain`} onClick={action? action:() => {}}>{label}</button>
        </>
    );
}
 
export default ButtonPlain;
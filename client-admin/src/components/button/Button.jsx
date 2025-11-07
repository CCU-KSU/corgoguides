const Button = ({label, action, type}) => {
    return (
        <>
            <button type={type? type:"button"} className={`button`} onClick={action? action:() => {}}>{label}</button>
        </>
    );
}
 
export default Button;
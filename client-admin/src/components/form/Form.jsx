const Form = ({children, onSubmit, onReset, onChange}) => {
    return (
        <>
            <form onSubmit={onSubmit} onReset={onReset? onReset:() => {}} onChange={onChange? onChange:() => {}} action="" className="form">
                {children}
            </form>
        </>
    );
}
 
export default Form;
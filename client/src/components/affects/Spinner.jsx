import spinner from "../../assets/spinners/3-dots-bounce.svg"

const Spinner = () => {
    return (
        <>
            <div className="spinner-box">
                <img src={spinner} alt="" className="spinner" />
            </div>
        </>
    );
}
 
export default Spinner;
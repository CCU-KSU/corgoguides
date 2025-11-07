import defaultIcon from "../../assets/icons/placeholder.svg"

const ButtonImg = ({imgRef, action, type}) => {
    return (
        <>
            <button type={type? type:"button"} className={`button-img`} onClick={action? action:() => {}}>
                <img src={imgRef? imgRef:defaultIcon} className="button-img-icon" alt="" />
            </button>
        </>
    );
}
 
export default ButtonImg;
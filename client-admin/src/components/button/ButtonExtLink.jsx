import ExtIcon from "../../assets/icons/external-link-svgrepo-com.svg"

const ButtonExtLink = ({label, link}) => {
    return (
        <>
            <a target="_blank" rel="noopener noreferrer" className="button-ext-link" href={link}>
                <img src={ExtIcon} alt="" />
                <p>{label}</p>
            </a>
        </>
    );
}
 
export default ButtonExtLink;
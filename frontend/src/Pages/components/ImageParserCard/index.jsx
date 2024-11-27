import { profilePlaceholder } from "../../../assets"
import "./styles.css"

const ImageParserCard = ({ data={}, style=false }) => {
    return(
        <img 
            src={`${data?.Imagen ? data?.Imagen : profilePlaceholder}`} 
            alt={"Alternative-image"} 
            className={`image-parsed-card ${style && "image-style"}`}
        />
    );
}

export { ImageParserCard };

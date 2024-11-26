import "./styles.css"

const ImageParserCard = ({ data={}, style=false }) => {
    return(
        <img 
            src={`data:${data?.mimeType};base64,${data?.Imagen}`} 
            alt={"Alternative-image"} 
            className={`image-parsed-card ${style && "image-style"}`}
        />
    );
}

export { ImageParserCard };

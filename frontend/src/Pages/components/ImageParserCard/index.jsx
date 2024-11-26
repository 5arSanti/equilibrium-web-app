import React from "react";

const ImageParserCard = ({ data }) => {
    return(
        <img src={`data:${data?.mimeType};base64,${data?.Imagen}`} alt={"Alternative-image"} />
    );
}

export { ImageParserCard };
